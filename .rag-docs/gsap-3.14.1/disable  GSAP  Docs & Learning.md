### .disable( revert:boolean, allowAnimation:Boolean )

Disables the ScrollTrigger instance, immediately unpinning and restoring any pin-related changes made to the DOM by ScrollTrigger.

#### Parameters

-   #### **revert**: boolean
    
    Determines whether or not the elements should be reverted to their pre-ScrollTriggered state after the ScrollTrigger is disabled. `true` by default.
    
-   #### **allowAnimation**: Boolean
    
    By default, any associated scrub animation will be paused but if allowAnimation is true, it won't pause() the animation.
    

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/disable()/#details "Direct link to Details")

Disables the ScrollTrigger instance, immediately unpinning and restoring any pin-related changes made to the DOM by ScrollTrigger. It also reverts the animation (if one is defined), although you can skip that using the first parameter.