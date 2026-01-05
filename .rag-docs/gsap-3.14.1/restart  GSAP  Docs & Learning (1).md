### restart( includeDelay:Boolean, suppressEvents:Boolean ) : self

Restarts and begins playing forward from the beginning.

#### Parameters

-   #### **includeDelay**: Boolean
    
    (default = `false`) - Determines whether or not the delay (if any) is honored when restarting.
    
-   #### **suppressEvents**: Boolean
    
    (default = `true`) - If `true` (the default), no events or callbacks will be triggered when the playhead moves to the new position defined in the `time` parameter.
    

### Returns : self[](https://gsap.com/docs/v3/GSAP/Timeline/restart()/#returns--self "Direct link to Returns : self")

self (makes chaining easier)

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/restart()/#details "Direct link to Details")

Restarts and begins playing forward from the beginning.

```cpp
//restarts, not including any delay that was definedtl.restart();//restarts, including any delay, and doesn't suppress events during the initial move back to time:0tl.restart(true, false);
```