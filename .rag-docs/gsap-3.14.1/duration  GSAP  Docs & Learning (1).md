### duration( value:Number ) : \[Number | self\]

\[override\] Gets the timeline's duration or, if used as a setter, adjusts the timeline's timeScale to fit it within the specified duration.

#### Parameters

-   #### **value**: Number
    
    (default = `NaN`) - Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.
    

### Returns : \[Number | self\][](https://gsap.com/docs/v3/GSAP/Timeline/duration()/#returns--number--self "Direct link to Returns : [Number | self]")

Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/duration()/#details "Direct link to Details")

Gets the timeline's `duration` or, if used as a setter, adjusts the timeline's `timeScale` to fit it within the specified duration. `duration()` is identical to `totalDuration()` except for timeline instances that have a non-zero `repeat` in which case `totalDuration` includes `repeat`s and `repeatDelays` whereas `duration` doesn't.

For example, if a timeline has a `duration` of 2 and a `repeat` of 3, its `totalDuration` would be 8 (one standard play plus 3 repeats equals 4 total cycles).

Due to the fact that a timeline's `duration` is dictated by its contents, using this method as a setter will simply cause the `timeScale` to be adjusted to fit the current contents into the specified `duration`, but the `duration` value itself will remain unchanged.

For example, if there are 20-seconds worth of tweens in the timeline and you do `myTimeline.duration(10)`, the `timeScale` would be changed to 2. If you checked the `duration` again immediately after that, it would still return 20 because technically that is how long all the child tweens/timelines are but upon playback the speed would be doubled because of the `timeScale`.

This method serves as both a getter and setter. Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining, like `myAnimation.duration(2).play(1);`

```less
//gets current durationvar currentDuration = tl.duration();//adjusts the timeScale of myAnimation so that it fits into exactly 10 seconds on its parent timelinetl.duration(10);
```