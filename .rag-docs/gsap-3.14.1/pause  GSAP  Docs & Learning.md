Pauses the instance, optionally jumping to a specific time.

If you define a time to jump to (the first parameter, which could also be a label for timeline instances), the playhead moves there immediately and if there are any events/callbacks inbetween where the playhead was and the new time, they will not be triggered because by default `suppressEvents` (the 2nd parameter) is `true`. Think of it like picking the needle up on a record player and moving it to a new position before placing it back on the record. If, however, you do not want the events/callbacks suppressed during that initial move, simply set the `suppressEvents` parameter to `false`.

```cpp
//pauses wherever the playhead currently is:myAnimation.pause();//jumps to exactly 2-seconds into the animation and then pauses:myAnimation.pause(2);//jumps to exactly 2-seconds into the animation and pauses but doesn't suppress events during the initial move:myAnimation.pause(2, false);
```