### restart( includeDelay:Boolean, suppressEvents:Boolean ) : self

Restarts and begins playing forward from the beginning.

#### Parameters

-   #### **includeDelay**: Boolean
    
    (default = `false`) - Determines whether or not the delay (if any) is honored when restarting. For example, if a tween has a delay of 1 second, like `gsap.to(obj, {duration: 2, x: 100, delay: 1});` and then later `restart()` is called, it will begin immediately, but`restart(true)` will cause the delay to be honored so that it won't begin for another 1 second.
    
-   #### **suppressEvents**: Boolean
    
    (default = `true`) - If `true` (the default), no events or callbacks will be triggered when the playhead moves to the new position defined in the `time` parameter.
    

### Returns : self[](https://gsap.com/docs/v3/GSAP/Tween/restart()/#returns--self "Direct link to Returns : self")

self (makes chaining easier)

### Details[](https://gsap.com/docs/v3/GSAP/Tween/restart()/#details "Direct link to Details")

Restarts and begins playing forward from the beginning.

```cpp
//restarts, not including any delay that was definedmyAnimation.restart();//restarts, including any delay, and doesn't suppress events during the initial move back to time:0myAnimation.restart(true, false);
```