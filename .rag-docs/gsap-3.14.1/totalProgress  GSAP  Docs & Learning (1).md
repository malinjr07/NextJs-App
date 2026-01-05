### totalProgress( value:Number, suppressEvents:Boolean ) : \[Number | self\]

\[override\] Gets or sets the timeline's total progress which is a value between 0 and 1 indicating the position of the virtual playhead (including repeats) where 0 is at the beginning, 0.5 is at the halfway point, and 1 is at the end (complete).

#### Parameters

-   #### **value**: Number
    
    (default = `NaN`) - Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.
    
-   #### **suppressEvents**: Boolean
    
    (default = `true`) - If `true`, no events or callbacks will be triggered when the playhead moves to the new position.
    

### Returns : \[Number | self\][](https://gsap.com/docs/v3/GSAP/Timeline/totalProgress()/#returns--number--self "Direct link to Returns : [Number | self]")

Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/totalProgress()/#details "Direct link to Details")

Gets or sets the timeline's total progress which is a value between 0 and 1 indicating the position of the virtual playhead (**including** repeats and repeatDelays) where 0 is at the beginning, 0.5 is at the halfway point, and 1 is at the end (complete). If the timeline has a non-zero `repeat` defined, `progress()` and `totalProgress()` will be different because `progress()` doesn't include the `repeat` or `repeatDelay` whereas `totalProgress()` does.

For example, if a timeline instance is set to repeat once, at the end of the first cycle `totalProgress()` would only be 0.5 whereas `progress` would be 1. If you watched both properties over the course of the entire animation, you'd see `progress` go from 0 to 1 twice (once for each cycle) in the same time it takes the `totalProgress()` to go from 0 to 1 once.

This method serves as both a getter and setter. Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining, like `tl.totalProgress(0.5).play();`

```cpp
//gets total progressvar progress = tl.totalProgress();//sets total progress to one quarter finishedtl.totalProgress(0.25);
```