Name of the label that is after the time passed to `nextLabel()`. If no `time` is provided, the timeline's current playhead time will be used.

Returns the next label (if any) that occurs **after** the `time` parameter. If no `time` is provided, the timeline's current playhead time will be used. It makes no difference if the timeline is reversed ("after" means later in the timeline's local time zone).

A label that is positioned exactly at the same `time` as the time parameter will be ignored.

You could use `nextLabel()` in conjunction with `tweenTo()` to make the timeline tween to the next label like this:

```less
tl.tweenTo(tl.nextLabel());
```