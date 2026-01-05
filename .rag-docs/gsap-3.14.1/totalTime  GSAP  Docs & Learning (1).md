### totalTime( time:Number, suppressEvents:Boolean ) : \[Number | self\]

Gets or sets the position of the playhead according to the `totalDuration` which includes any repeats and repeatDelays.

#### Parameters

-   #### **time**: Number
    
    (default = `NaN`) - Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining. Negative values will be interpreted from the **END** of the animation.
    
-   #### **suppressEvents**: Boolean
    
    (default = `false`) - If `true`, no events or callbacks will be triggered when the playhead moves to the new position defined in the `time` parameter.
    

### Returns : \[Number | self\][](https://gsap.com/docs/v3/GSAP/Timeline/totalTime()/#returns--number--self "Direct link to Returns : [Number | self]")

Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/totalTime()/#details "Direct link to Details")

Gets or sets the position of the playhead according to the `totalDuration` which **includes any repeats and repeatDelays**. For example, if a tween has a `duration` of 2 and a `repeat` of 3, `totalTime` will go from 0 to 8 during the course of the tween (plays once then repeats 3 times, making 4 total cycles) whereas `time` will go from 0 to 2 a total of 4 times. If you added a `repeatDelay` of 1, that would make the `totalTime` go from 0 to 11 over the course of the tween.

This method serves as both a getter and setter. Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.

`totalTime` will never exceed the `totalDuration`, nor will it be less than 0 (values will be clipped appropriately). Negative values will be interpreted from the **END** of the animation. For example, -2 would be 2 seconds before the end. If the animation's `totalDuration` is 6 and you do `tl.totalTime(-2)`, it will jump to a `totalTime` of 4.

```sql
//gets total timevar totalTime = tl.totalTime();//sets total time, jumping to new value just like seek()tl.totalTime(2); .
```