## ScrollTrigger.addEventListener

### ScrollTrigger.addEventListener( type:String, callback:Function ) : null

Add a listener for any of the following events: "scrollStart", "scrollEnd", "refreshInit", "revert", "matchMedia", or"refresh" which get dispatched globally when **any** such ScrollTrigger-related event occurs (it is not tied to a particular instance).

#### Parameters

-   #### **type**: String
    
    Event type which may be "scrollStart", "scrollEnd", "refreshInit", "revert", "matchMedia", or "refresh".
    
-   #### **callback**: Function
    
    The function to call when the event occurs
    

These events get dispatched _globally_ when **any** such ScrollTrigger-related event occurs (it is not tied to a particular instance).

```javascript
ScrollTrigger.addEventListener("scrollEnd", () =>  console.log("scrolling ended!"));
```