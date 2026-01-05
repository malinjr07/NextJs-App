### .smooth( duration:Number ) : Number | self

Gets/Sets the number of seconds it takes to catch up to the scroll position (smoothing).

#### Parameters

-   #### **duration**: Number
    
    The number of seconds that it should take to "catch up" to the native scroll position.
    

### Returns : Number | self[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/smooth()/#returns--number--self "Direct link to Returns : Number | self")

The number of seconds it takes to catch up to the scroll position (if getter) or the ScrollSmoother instance itself (if setter) for easier chaining

### Details[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/smooth()/#details "Direct link to Details")

Gets/Sets the number of seconds it takes to catch up to the scroll position (smoothing).

```cpp
// settersmoother.smooth(1.5);// getterlet duration = smoother.smooth();
```