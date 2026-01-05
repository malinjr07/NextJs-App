Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.

Gets or sets the local position of the playhead (essentially the current time), **not** including any repeats or repeatDelays. If the timeline has a non-zero `repeat`, its time goes back to zero upon repeating even though the `totalTime` continues forward linearly (or if `yoyo` is `true`, the `time` alternates between moving forward and backward). `time` never exceeds the duration whereas the `totalTime` reflects the overall time including any repeats and repeatDelays.

For example, if a timeline instance has a `duration` of 2 and a repeat of 3, `totalTime` will go from 0 to 8 during the course of the timeline (plays once then repeats 3 times, making 4 total cycles) whereas `time` would go from 0 to 2 a total of 4 times.

This method serves as both a getter and setter. Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.

```sql
//gets current timevar currentTime = tl.time();//sets time, jumping to new value just like seek()tl.time(2); .
```