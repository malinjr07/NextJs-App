-   [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
-   methods
-   ScrollTrigger.removeEventListener()

## ScrollTrigger.removeEventListener

### ScrollTrigger.removeEventListener( type:String, callback:Function ) : null

Removes an event listener

#### Parameters

-   #### **type**: String
    
    The type of listener which can be "scrollStart", "scrollEnd", "refreshInit", or "refresh".
    
-   #### **callback**: Function
    
    The callback that should be removed as a listener
    

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.removeEventListener()/#details "Direct link to Details")

Removes a listener that had previously been added for any of the following events:

-   **"scrollStart"** - when any ScrollTrigger-related scroller begins scrolling
-   **"scrollEnd"** - when any ScrollTrigger-related scroller stops scrolling (when roughly 200ms elapses since the last "scroll" event AND the user doesn't have a pointer/mouse pressed on the document/scrollbar)
-   **"refreshInit"** - typically just after a resize occurs and _BEFORE_ ScrollTrigger does all of its recalculating of start/end values in the \[new\] document flow. This will also happen when you call [ScrollTrigger.refresh()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()) directly.
-   **"refresh"** - immediately after ScrollTrigger finishes all of its recalculations of start/end values when a refresh occurs (typically after a resize event or when ScrollTrigger.refresh() is called directly).

## Example[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.removeEventListener()/#example "Direct link to Example")

```bash
ScrollTrigger.removeEventListener("scrollEnd", yourFunction);
```

[

Previous

ScrollTrigger.refresh()

](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh())[

Next

ScrollTrigger.saveStyles()

](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.saveStyles())