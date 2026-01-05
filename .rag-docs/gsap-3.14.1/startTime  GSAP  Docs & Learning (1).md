Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.

Gets or sets the time at which the animation begins on its parent timeline (after any `delay` that was defined). For example, if a tween starts at exactly 3 seconds into the timeline on which it is placed, the tween's `startTime` would be 3.

The `startTime` may be automatically adjusted to make the timing appear seamless if the parent timeline's `smoothChildTiming` property is `true` and a timing-dependent change is made on-the-fly, like `reverse()` is called or `timeScale()` is changed, etc. See the documentation for the [`smoothChildTiming`](https://gsap.com/docs/v3/GSAP/Timeline/smoothChildTiming) property of timelines for more details.

This method serves as both a getter and setter. Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.

```sql
//gets current start timevar start = tl.startTime();//setstl.startTime(2);
```