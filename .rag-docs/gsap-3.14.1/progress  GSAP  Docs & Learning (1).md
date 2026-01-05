### progress( value:Number, suppressEvents:Boolean ) : \[Number | self\]

\[override\] Gets or sets the timeline's progress which is a value between 0 and 1 indicating the position of the virtual playhead (excluding repeats) where 0 is at the beginning, 0.5 is halfway complete, and 1 is complete.

#### Parameters

-   #### **value**: Number
    
    (default = `NaN`) - Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.
    
-   #### **suppressEvents**: Boolean
    
    `Boolean` (default = `false`)- If `true`, no events or callbacks will be triggered when the playhead moves to the new position.
    

Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.

Gets or sets the timeline's progress which is a value between 0 and 1 indicating the position of the virtual playhead (excluding repeats) where 0 is at the beginning, 0.5 is halfway complete, and 1 is complete. If the timeline has a non-zero `repeat` defined, progress and `totalProgress` will be different because `progress` doesn't include any repeats or repeatDelays whereas `totalProgress` does. For example, if a timeline instance is set to repeat once, at the end of the first cycle `totalProgress` would only be 0.5 whereas `progress` would be 1. If you watched both properties over the course of the entire animation, you'd see progress go from 0 to 1 twice (once for each cycle) in the same time it takes the `totalProgress` to go from 0 to 1 once.

This method serves as both a getter and setter. Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining, like `tl.progress(0.5).play();`

```cpp
//gets current progressvar progress = tl.progress();//sets progress to one quarter finishedtl.progress(0.25);
```