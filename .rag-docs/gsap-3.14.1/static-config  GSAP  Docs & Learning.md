## ScrollTrigger.config

### ScrollTrigger.config( vars:Object )

Allows you to configure certain global behaviors of ScrollTrigger like `limitCallbacks`

#### Parameters

-   #### **vars**: Object
    
    A configuration object with the properties you'd like to affect, like `{ limitCallbacks: true }`
    

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.config()/#details "Direct link to Details")

Allows you to configure certain global behaviors of ScrollTrigger like:

-   **limitCallbacks** _\[Boolean\]_ - if `true`, ScrollTrigger will only fire callbacks (onEnter, onLeave, onEnterBack, onLeaveBack) when the active state is _toggled_. For example, if you have a grid of 100 elements that each have a ScrollTrigger associated with them, and only 10 are on the screen at any given time and then you scroll down so that only boxes 50 - 60 are showing and reload the page, `limitCallbacks: true` would skip the `onEnter` for elements 1-49. The default limitCallbacks value is `false` meaning that the `onEnter` for elements 1-60 would all fire in this scenario.
-   **autoRefreshEvents** _\[String\]_ - by default, ScrollTrigger will refresh() on the following events: "visibilitychange,DOMContentLoaded,load,resize" but you can set it to a subset of those if you prefer. For example, if you don't want it to refresh on `visibilitychange` (when the browser tab changes from hidden to visible), you could set `autoRefreshEvents: "DOMContentLoaded,load,resize"`. _(added in 3.6.0)_
-   **syncInterval** _\[Number\]_ - by default, ScrollTrigger checks the scroll position every 200ms and updates things accordingly. This accomplishes two key things: 1) Some very old browsers have a bug that could cause them not to fire "scroll" events while touch-scrolling, so this helps work around that (though it's extremely rare these days), and 2) it keeps the velocity-tracking features functioning accurately. If velocity data was only updated on scroll events, it wouldn't return down to 0 when scrolling stops. So you can alter how often (in milliseconds) syncing occurs, like if you want to effectively disable it you could do `ScrollTrigger.config({syncInterval: 999999999 });`.
-   **ignoreMobileResize** if `true`, vertical resizes (of 25% of the viewport height) on **touch-only** devices won't trigger a [ScrollTrigger.refresh()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()), avoiding the jumps that can happen when the start/end values are recalculated. Beware that if you skip the refresh(), the start/end trigger positions may be inaccurate but in many scenarios that's preferable to the visual jumps that occur due to the new start/end positions. _(added in version 3.10.0)_

### Example[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.config()/#example "Direct link to Example")

```yaml
// only fire callbacks when the active state togglesScrollTrigger.config({  limitCallbacks: true,  ignoreMobileResize: true,});
```

`ScrollTrigger.config()` was added in version 3.3.4.