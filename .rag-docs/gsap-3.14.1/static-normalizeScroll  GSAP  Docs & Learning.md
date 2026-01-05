## ScrollTrigger.normalizeScroll

### ScrollTrigger.normalizeScroll( normalize:Boolean | Object ) : ScrollObserver | null

Forces scrolling to be done on the JavaScript thread, ensuring screen updates are synchronized and the address bar doesn't show/hide on \[most\] mobile devices.

#### Parameters

-   #### **normalize**: Boolean | Object
    
    If `true`, it'll force scrolling to be done on the JavaScript thread and prevent mobile browser address bars from showing/hiding. If `false`, it'll use native scrolling which is often handled on a separate thread and may cause repainting to be slightly out of sync. You can pass in a configuration object instead if you'd like to tweak the observer properties. For example { type: "touch,wheel,pointer" } would cause the page to be drag-scrollable with the mouse/pointer. See Observer docs for options (most callbacks are not available since they're used internally)
    

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()/#details "Direct link to Details")

By default, ScrollTrigger leverages the browser's **native** scrolling behavior but there are three potential problems you may encounter with native scrolling:

-   **Address bar showing/hiding on mobile browsers, resizing the viewport** - have you ever noticed a sudden shift after the address bar shows/hides? That's because the when the viewport resizes, ScrollTrigger must recalculate the start/end positions and they likely change at the new viewport size (hence the jump). It's logically impossible to keep things accurate in terms of trigger positions AND avoid any changes. This isn't a bug in ScrollTrigger. You could prevent it from recalculating (see [config()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.config())) but then your trigger positions become inaccurate.
-   **Multi-threaded synchronization issues** - if you scroll quickly you may see a pinned ScrollTrigger appear to **jump** when it initially pins/unpins. Why? Because modern browsers handle scrolling on a different thread, so it may repaint the screen as if the page was scrolled _past_ the point of the pinning...and then the JavaScript thread runs a few milliseconds later and applies the pinning, causing the perceived jump. See [Firefox's explanation](https://firefox-source-docs.mozilla.org/performance/scroll-linked_effects.html).
-   **iOS Safari bugs which misreport position data, causing jitter** - some of these bugs have been around since 2017 and still haven't been fixed. The browser misreports scroll position as well as event.clientX/Y intermittently, causing things to "jitter". So when ScrollTrigger asks the browser _"what's your scroll position"_ or _"where is the user's finger on the screen?"_, iOS Safari provides the **wrong** value quite frequently.
-   **Overscroll behavior** - some browsers like iOS Safari ignore the `overscroll-behavior` CSS and force the annoying overscroll bouncing behavior when you reach the top or bottom of the page.
-   **Inconsistent momentum scroll across devices** - Android and iOS touch-scroll with momentum very differently.

## Solution[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()/#solution "Direct link to Solution")

When you set `ScrollTrigger.normalizeScroll(true)`, it intercepts native scroll behavior and handles it on the JavaScript thread instead which has the following results:

-   **Prevents the address bar from showing/hiding** on \[most\] mobile devices, maintaining a consistent viewport size (resize shifts disappear). One exception we know of is the most recent version of iOS, only on phones in portrait orientation where the browser forces the show/hide (it seems impossible to work around, but you can still use `ScrollTrigger.config({ ignoreMobileResize: true})` to skip refreshes in that case).
-   **Prevents over-scroll and bounce-back** scroll behavior.
-   Since scrolling is done on the JavaScript thread, **screen updates are synchronized** (no more pin jumping due to repaint mis-timing)
-   ScrollTrigger **works around the iOS bugs** by skipping every other "touchmove" event and managing the position internally rather than relying on the browser's reporting. The "touchmove" skips only occur on iOS devices.
-   Momentum scrolling for touch is handled by ScrollTrigger consistently across all devices.

This is a hybrid form of scroll-jacking; it technically is cancelling native scroll events but it's not imposing any fake scrollbars or different acceleration or anything like that - it's simply grabbing the delta and applying it via JavaScript to solve the problems mentioned above. This also minimizes accessibility side effects.

## Basic Usage[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()/#basic-usage "Direct link to Basic Usage")

The method can be used as a getter or setter

```ruby
ScrollTrigger.normalizeScroll(true); // enableScrollTrigger.normalizeScroll(false); // disablelet normalizer = ScrollTrigger.normalizeScroll(); // gets the Observer instance that's handling normalization (if enabled, of course)
```

## Advanced Configuration[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()/#advanced-configuration "Direct link to Advanced Configuration")

Internally, it uses an [Observer](https://gsap.com/docs/v3/Plugins/Observer) to work its magic, so you could pass in a configuration object that contains any of the following optional properties:

### Example[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()/#example "Direct link to Example")

```javascript
ScrollTrigger.normalizeScroll({  allowNestedScroll: true,  lockAxis: false,  momentum: self => Math.min(3, self.velocityY / 1000), // dynamically control the duration of the momentum when flick-scrolling  type: "touch,wheel,pointer", // now the page will be drag-scrollable on desktop because "pointer" is in the list});
```

### Caveats[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()/#caveats "Direct link to Caveats")

-   In order to avoid interfering with gestures, it'll relinquish control on touch devices when there are multiple touches occurring and when the page is zoomed to a scale other than 1 (like after a pinch-zoom).
-   Some mobile browsers hide the scrollbar until you're _actively_ scrolling but since normalizeScroll() intercepts the browser's native scrolling behavior, that doesn't occur. At this point, we haven't implemented any "fake" ones but you're welcome to do so; it should be relatively easy to do by tapping into the data ScrollTrigger provides. In fact, you could use a simple ScrollTrigger with no scroller/trigger and no start/end (because it defaults to the entire page) and animate a scrollbar `<div>`. If you need help, post in the [forums](https://gsap.com/community/).
-   This is considered an experimental feature at this point but it seems to work quite well. If you run into any problems, please post in our [forums](https://gsap.com/community/).

### Why doesn't ScrollTrigger always normalize scroll by default?[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()/#why-doesnt-scrolltrigger-always-normalize-scroll-by-default "Direct link to Why doesn't ScrollTrigger always normalize scroll by default?")

Because it often isn't needed and we prefer to let the browser handle things natively as much as possible. `normalizeScroll()` seems like a setting that's important to opt-in to. ScrollTrigger was designed specifically _not_ to do scroll-jacking because we wanted it to remain as "pure" and non-intrusive as possible.

### What's with the iOS browser bugs?[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()/#whats-with-the-ios-browser-bugs "Direct link to What's with the iOS browser bugs?")

Here's just a sampling of the various unresolved bugs we encountered in Safari which was **by far** the most problematic browser (mostly on mobile): [1](https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503) | [2](https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562) | [3](https://codepen.io/GreenSock/pen/XWajYwG/16c435b12ef09c38125204818e7b45fc) | [4](https://codepen.io/GreenSock/pen/ExoyEyg/c0402caac3044c3f5bb85022450b059b) | [5](https://codepen.io/GreenSock/pen/VwxxwWm?editors=0010). Some were reported back in _January 2018_ and still haven't been fixed. We tried reaching out to the Safari team directly on many occasions, but they were unresponsive. If anyone knows a way to reach them, please let us know; we'd love to collaborate on workarounds. We sunk hundreds of hours into troubleshooting and normalizeScroll() represents our best crack at working around the various browser bugs and inconsistencies. We welcome [suggestions](mailto:info@greensock.com).