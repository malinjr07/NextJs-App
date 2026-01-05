added in v3.10.0

Quick Start

#### CDN Link

```scss
gsap.registerPlugin(ScrollSmoother)
```

#### Minimal usage

```php
ScrollSmoother.create({smooth: 1,effects: true});
```

ScrollSmoother adds a vertical smooth-scrolling effect to a ScrollTrigger-based page. Unlike most smooth-scrolling libraries, ScrollSmoother leverages **NATIVE** scrolling - it doesn't add "fake" scrollbars nor does it mess with touch/pointer functionality. That means it doesn't suffer from many of the accessibility annoyances common with smooth-scrolling sites.

Detailed walkthrough

<iframe allow="autoplay; fullscreen" allowfullscreen="" frameborder="0" src="https://player.vimeo.com/video/692867683"></iframe>

Highlights

## Feature Highlights[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#feature-highlights "Direct link to Feature Highlights")

-   Uses the browser's **native scroll**; no "fake" scrollbars.
-   Add a **parallax effect** by defining a `data-speed` attribute on any element, like `data-speed="0.5"` would make that element "scroll" at half-speed while it's in the viewport. It arrives at its normal position in the document flow when it's **centered** vertically.
-   Put a larger image/element inside a container that has `overflow: hidden` and then set the child's `data-speed="auto"` and it'll automatically calculate exactly how far it can move inside that container (parallax).
-   Make an element appear to **lag behind**, taking a certain amount of time to "catch up" to the smoothed scroll position. It's a really fun effect! Simply define a `data-lag` attribute, like `data-lag="0.5"` would take 0.5 seconds to "catch up".

**read more...**

-   ScrollSmoother is **seamlessly integrated** with [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger) and GSAP for mega-robust animation capabilities.
-   Set [paused(true)](https://gsap.com/docs/v3/Plugins/ScrollSmoother/paused()) to completely halt scrolling (users can't even drag the scrollbar) - great for modals.
-   The `normalizeScroll: true` feature prevents \[most\] mobile browser address bars from hiding/showing (resizing the viewport), stops overscroll behavior, and solves multi-thread synchronization challenges!
-   A side benefit of using ScrollSmoother is that it avoids issues caused by browser multi-threading, like the small jump that sometimes happens when pinning/unpinning, or the occasional "jitter" of a pinned element in certain rare scenarios. You can even set `normalizeScroll: true` to avoid common problems like the hiding/showing of the address bar on mobile browsers, plus it'll work around iOS Safari bugs that occasionally cause jitter. See [ScrollTrigger.normalizeScroll()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()) for details.

## Setup[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#setup "Direct link to Setup")

Your HTML content should reside in a single `content` element (usually a `<div>` but it doesn't really matter) - that's what gets moved around when the user scrolls. That `content` element is wrapped in a `wrapper` element that serves as the viewport. The actual scrollbar remains on the `<body>`, so your setup would look like:

```php-template
<body><div id="smooth-wrapper"><div id="smooth-content"><!--- ALL YOUR CONTENT HERE ---></div></div><!-- position: fixed elements can go outside ---></body>
```

Under the hood, everything flows through [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger) which watches the page's native scroll position and then ScrollSmoother applies transforms to the `content` to gradually catch up with that scroll position. So if you suddenly drag the native scrollbar 500px, ScrollSmoother will gradually move the content to that spot using inline CSS transforms (`matrix3d()`) on the `content`. Since ScrollSmoother is built on top of ScrollTrigger, don't forget to register them both:

```scss
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
```

## Example[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#example "Direct link to Example")

```less
// create the scrollSmoother before your scrollTriggersScrollSmoother.create({smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll positioneffects: true, // looks for data-speed and data-lag attributes on elementssmoothTouch: 0.1 // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)});
```

#### loading...

## **Config Object**[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#config-object "Direct link to config-object")

The configuration object can have any of the following optional properties:

-   #### content[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#content)
    
    Element | String - the element containing all of your HTML content. This one `content` element is what gets moved around when scrolling. By default, it will automatically find the element with an id of "smooth-content", so if you're following that convention there's no need to even define `content`. The HTML structure would look like this:
    
    ```php-template
    <div id="smooth-wrapper">  <div id="smooth-content">    <!--- ALL YOUR CONTENT HERE --->  </div></div><!-- position: fixed elements can go outside -->
    ```
    
-   #### ease[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#ease)
    
    String | Function - the easing function to be used for smooth scrolling (defaults to "expo").
    
-   #### effects[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#effects)
    
    boolean | String | Array - if `true`, ScrollSmoother will find all elements that have a `data-speed` and/or `data-lag` attribute and apply those effects accordingly so that they move at the designated speed or delay, so `data-speed="0.5"` would scroll at half the normal speed, and `data-speed="2"` would scroll at twice the normal speed. `data-lag="0.8"` would take 0.8 seconds to "catch up" to the smoothed scroll position. You can also use selector text or an Array of elements, so `effects: ".box"` would only look for the attributes on elements with the ".box" class. You can use the [effects()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/effects()) method to apply effects directly via JavaScript instead. See that method's docs for more details about how effects work. _Note: effects should not be nested._
    
-   #### effectsPadding[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#effectsPadding)
    
    Number - Normally effects applied to a particular element begin as soon as the natural position of the element enters the viewport and then end when the natural position leaves the viewport, but in some rare cases you may want to expand that, so you can pass a number (in pixels) as the `effectsPadding`. _Added in 3.11.4_
    
-   #### effectsPrefix[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#effectsPrefix)
    
    String - perhaps you're already using `data-speed` and/or `data-lag` for other purposes and you'd like to use a custom prefix for effects data attributes like `effectsPrefix: "scroll-"` would resolve to `data-scroll-speed` and `data-scroll-lag`. _Added in 3.10.5_
    
-   #### ignoreMobileResize[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#ignoreMobileResize)
    
    Boolean - if `true`, vertical resizes (of 25% of the viewport height) on touch-only devices won't trigger a `ScrollTrigger.refresh()`, avoiding the jumps that can happen when the start/end values are recalculated. Beware that if you skip the refresh(), the start/end trigger positions may be inaccurate but in many scenarios that's preferable to the visual jumps that occur due to the new start/end positions.
    
-   #### onFocusIn[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#onFocusIn)
    
    Function - a function to call when a new element receives focus and you can return `false` if you want ScrollSmoother to skip ensuring that the element is in the viewport (overriding that default behavior).
    
-   #### onStop[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#onStop)
    
    Function - a function to call when the smoothed scroll comes to a stop (catches up to the native scroll position).
    
-   #### onUpdate[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#onUpdate)
    
    Function - a function to call after each time the SmoothScroller updates the position of the content.
    
-   #### normalizeScroll[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#normalizeScroll)
    
    boolean - if `true`, it forces scrolling to be done on the JavaScript thread, ensuring it is synchronized and the address bar doesn't show/hide on mobile devices. This is the same as calling [ScrollTrigger.normalizeScroll()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()) except that it _debounces_ because smooth scrolling makes that possible.
    
-   #### smooth[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#smooth)
    
    Number - the time (in seconds) that it takes to "catch up" to the native scroll position. By default, it is 0.8 seconds.
    
-   #### smoothTouch[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#smoothTouch)
    
    Boolean | Number - by default, ScrollSmoother will **NOT** apply scroll smoothing on touch-only devices (like phones) because that typically feels odd to users when it disconnects from their finger's drag position, but you can force smoothing on touch devices too by setting `smoothTouch: true` (same as `smooth` value) or specify an amount like `smoothTouch: 0.1` (in seconds).
    
-   #### speed[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#speed)
    
    Number - a multiplier for overall scroll speed, so `2` would make it scroll twice the normal speed, and `0.5` would make it scroll at half-speed. _added in version 3.11.4_.
    
-   #### wrapper[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#wrapper)
    
    Element | String - the outer-most element that serves as the viewport. Its only child should be the `content` element which is what gets moved around when scrolling. By default, it will automatically find the element with an id of "smooth-wrapper", so if you're following that convention there's no need to even define `wrapper`. If it cannot find a wrapper, one will automatically be created. You can use selector text like `"#elementID"` or reference the element itself.
    

## Speed (parallax)[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#speed-parallax "Direct link to Speed (parallax)")

When you set `effects: true`, ScrollSmoother finds all elements that have a `data-speed` attribute and applies a parallax effect accordingly so that they move at the designated speed. For example:

```php-template
<div data-speed="0.5"></div><!-- half-speed of scroll --><div data-speed="2"></div><!-- double-speed of scroll --><div data-speed="1"></div><!-- normal speed of scroll --><div data-speed="auto"></div><!-- auto-calculated based on how far it can move inside its container -->
```

### "auto" speed[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#auto-speed "Direct link to "auto" speed")

When you set the speed to `"auto"`, it will calculate how far it can move inside its **parent container** in the direction of the largest gap (up or down). So it's perfect for parallax effects - just make the child larger than its parent, align it where you want it (typically its top edge at the top of the container, or the bottom edge at the bottom of the container) and let ScrollSmoother do its magic. Obviously set `overflow: hidden` on the parent so it clips the child.

### clamp() speed effects[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#clamp-speed-effects "Direct link to clamp() speed effects")

Have you ever had an element that you natively placed toward the very top of your page but when you apply a `data-speed`, it starts out shifted from its native position? That's because by default, speed effects cause elements to reach their "native" position when **centered vertically** in the viewport, so they'll likely start out offset. Starting in version 3.12, you can wrap your speed value in `"clamp()"` to make them start out in their native position if they're "above the fold" (inside the viewport when scrolled to the very top). Under the hood, `data-speed` effects are driven by ScrollTrigger instances, so this a way to employ ScrollTrigger's clamp() feature that prevents the start/end values from "leaking" outside the page bounds (never less than 0 and never more than the maximum scroll position). For example:

```php-template
<div data-speed="clamp(0.5)"></div><!-- clamped half-speed -->
```

Feature Walkthrough

<iframe allow="autoplay; fullscreen" allowfullscreen="" frameborder="0" src="https://player.vimeo.com/video/828003354"></iframe>

You can also use the [effects()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/effects()) method to dynamically apply speed or lag effects to targets (including function-based ones). _Note: effects **should not be nested**._

```php
let scroller = ScrollSmoother.create({...});scroller.effects(".box", {speed: 0.5, lag: 0.1});
```

Keep in mind that the elements will hit their "natural" position in the **CENTER** of the viewport. Here's a visual demo from [@snorkltv](https://www.creativecodingclub.com/courses/FreeGSAP3Express?ref=44f484):

#### loading...

## Lag (the delightful kind)[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#lag-the-delightful-kind "Direct link to Lag (the delightful kind)")

Think of a "lag" like making the element lazy, allowing it to drift from its normal scroll position, taking a certain amount of time to "catch up". You can assign slightly different lags to elements in close proximity to give them a staggered effect when scrolling that's quite pleasing to the eye. If you set `effects: true` on the ScrollSmoother.create() config, it'll automatically find any elements with the `data-lag` attribute and apply that effect:

```php-template
<div data-lag="0.5"></div><!-- takes 0.5 seconds to "catch up" --><div data-lag="0.8"></div><!-- takes 0.8 seconds to "catch up" -->
```

You can also use the [effects()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/effects()) method to dynamically apply speed or lag effects to targets (including function-based ones) via JavaScript.

```php
let scroller = ScrollSmoother.create({...});scroller.effects(".box", {lag: 0.5, speed: 1});
```

## Caveats[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#caveats "Direct link to Caveats")

warning

-   \*\*`position: fixed` should be outside the wrapper \*\*- since the `content` has a CSS `transform` applied, browsers create a new containing block and that means `position: fixed` elements will be fixed to the `content` rather than the viewport. That's not a bug - it's just how CSS/browsers work. You can use ScrollTrigger pinning instead or you could put any `position: fixed` elements OUTSIDE the `wrapper`/`content`.
-   **`normalizeScroll: true` doesn't prevent the address bar from hiding/showing on iOS phones in portrait orientation** - the latest Apple iOS makes it impossible to prevent that (at least from what we can tell). Even though `event.preventDefault()` is called on all scroll-related events, the browser _still_ imposes that behavior. If that causes a jump due to the window resizing and making your ScrollTriggers recalculate their start/end positions, you could `ScrollTrigger.config({ ignoreMobileResize: true });`

## **Properties**[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#properties "Direct link to properties")

|       #### .progress : Number       | The progress value of the overall page scroll where 0 is at the very top and 1 is at the very bottom and 0.5 is halfway scrolled. This value will animate during the smooth scrolling and end when the `onStop` fires. |
|-------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| #### .scrollTrigger : ScrollTrigger |                                                 The ScrollTrigger instance that ScrollSmoother created internally to manage the smooth scrolling effect of the page.                                                 |
|         #### .vars : Object         |                                                                                                                                                                                                                      |

## **Methods**[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#methods "Direct link to methods")

|              #### .content( element:String | Element ) : Element | self               |                                                        Gets/Sets the content element.                                                        |
|---------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
|    #### .effects( targets:String | Element | Array, config:Object | null ) : Array    |                                     Adds parallax elements that should be managed by the ScrollSmoother                                      |
|                             #### .getVelocity( ) : Number                             |                                   Returns the current velocity of the smoothed scroll in pixels-per-second                                   |
|                                    #### .kill( ) ;                                    |                                  Kills the entire ScrollSmoother as well as any effects that were applied.                                   |
|           #### .offset( target:String | Element, position:String ) : Number           | Calculates the numeric offset (scroll position in pixels) that corresponds to when a particular element reaches the specified position like: |
|                    #### .paused( pause:Boolean ) : Boolean | self                     |              Gets/Sets the paused state - if `true`, nothing will scroll (except via scrollTop() or scrollTo() on this instance).              |
| #### .scrollTo( target:Number | String | Element, smooth:Boolean, position:String ) ; |                                                 Scrolls to a particular position or element                                                  |
|                  #### .scrollTop( position:Number ) : Number | void                   |                                            Immediately gets/sets the scroll position (in pixels).                                            |
|                    #### .smooth( duration:Number ) : Number | self                    |                           Gets/Sets the number of seconds it takes to catch up to the scroll position (smoothing).                           |
|                                   #### .create( ) ;                                   |                                                                                                                                              |
|                             #### .get( ) : ScrollSmoother                             |               Returns the ScrollSmoother instance (if one has been created). There can only be one instance at any given time.               |
|              #### .wrapper( element:String | Element ) : Element | self               |                                                        Gets/Sets the wrapper element.                                                        |

## **Demos**[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/#demos "Direct link to demos")

Check out the full collection of [Scroll animation demos](https://codepen.io/collection/bNPYOw) on CodePen.