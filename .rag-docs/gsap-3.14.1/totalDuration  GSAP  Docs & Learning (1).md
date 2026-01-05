Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.

Gets or sets the total duration of the timeline in seconds including any repeats or repeatDelays. `duration`, by contrast, does **NOT** include repeats and repeatDelays. For example, if the tween has a `duration` of 10, a `repeat` of 1 and a `repeatDelay` of 2, the `totalDuration` would be 22.

Due to the fact that a timeline's duration is dictated by its contents, using this method as a setter will simply cause the `timeScale` to be adjusted to fit the current contents into the specified totalDuration, but the totalDuration (and duration) value itself will remain unchanged.

This method serves as both a getter and setter. Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.

```cpp
//gets total durationvar total = tl.totalDuration();//adjusts the timeScale of the timeline so that it fits into exactly 10 seconds on its parent timelinetl.totalDuration(10);
```