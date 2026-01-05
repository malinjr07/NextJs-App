## ScrollTrigger.refresh

### ScrollTrigger.refresh( safe:Boolean )

Recalculates the positioning of all of the ScrollTriggers on the page; this typically happens automatically when the window/scroller resizes but you can force it by calling `ScrollTrigger.refresh()`

#### Parameters

-   #### **safe**: Boolean
    
    If `true`, it will wait for at least one requestAnimationFrame tick, and up to roughly 200ms before initiating the refresh. This is useful because sometimes the browser doesn't actually render the DOM-related changes immediately, causing measurements to be inaccurate. For example, if you add a "click" event listener to an element that expands other content on the page and you call ScrollTrigger.refresh() in that callback, the changes may not have been fully rendered by that point, so it's the perfect place to enable `safe`.
    

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()/#details "Direct link to Details")

Recalculates the positioning of all of the ScrollTriggers on the page which typically happens **automatically** when the window/scroller resizes but you can force it by calling `ScrollTrigger.refresh()`. For example, if you make changes to the DOM that would cause a reflow and position changes like expanding content.

To wait for at least one requestAnimationFrame tick, and up to roughly 200ms before initiating the refresh, just pass in `true` for the `safe` parameter. This is useful because sometimes the browser doesn't actually render the DOM-related changes immediately, causing measurements to be inaccurate. For example, if you add a "click" event listener to an element that expands other content on the page and you call `ScrollTrigger.refresh()` in that callback, the changes may not have been fully rendered by that point, so it's the perfect place to enable `safe` mode like `ScrollTrigger.refresh(true)`.

## What happens when you refresh?[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()/#what-happens-when-you-refresh "Direct link to What happens when you refresh?")

Each ScrollTrigger will go through the following steps (in the order they were created):

-   A "refreshInit" event is dispatched
-   Any pinned elements are temporarily reverted to their non-pinned state (their natural place in the document flow)
-   If `scrub` is enabled, the animation gets temporarily reset to its beginning
-   The ScrollTrigger's start and end positions are recalculated based on the current DOM (natural flow). This also means that if you used a function-based value for `start` or `end`, it will be called.
-   Any pinned elements and animations are re-enabled according to the new position/progress.
-   An `update()` is called which will trigger any appropriate callbacks if the progress changed.
-   The ScrollTrigger instance's `onRefresh` callback fires.

## Advanced: listening for refresh/refreshInit events[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()/#advanced-listening-for-refreshrefreshinit-events "Direct link to Advanced: listening for refresh/refreshInit events")

ScrollTrigger will perform a "refreshInit" event immediately BEFORE refreshing all of the ScrollTriggers on the page, and then a "refresh" event immediately AFTER it's done. You can [add a listener](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.addEventListener()) accordingly to call a function of your choice:

```javascript
ScrollTrigger.addEventListener("refreshInit", function () {  // this code will run BEFORE the refresh});ScrollTrigger.addEventListener("refresh", function () {  // this code will run AFTER all ScrollTriggers refreshed.});
```

There's also a [ScrollTrigger.removeEventListener()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.removeEventListener()) method. Notice that both methods are _static_ methods, not instance methods.

## What's the difference between refresh() and update()?[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()/#whats-the-difference-between-refresh-and-update "Direct link to What's the difference between refresh() and update()?")

`refresh()` involves recalculating where the ScrollTrigger's start/end positions should be based on the current DOM whereas an `update()` simply checks the scroller's scroll position and updates any linked animations and fires callbacks (if necessary). So a `refresh()` involves quite a bit more work, and it ends up calling `update()` too. You should only call `refresh()` when something has changed in the DOM and/or you need to force the recalculation of start/end positions.