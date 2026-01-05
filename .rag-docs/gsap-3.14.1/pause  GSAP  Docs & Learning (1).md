Pauses the animation, optionally jumping to a specific time first.

If you define a time to jump to (the first parameter, which could also be a label for Timeline instances), the playhead moves there immediately and skips any events/callbacks inbetween where the playhead was and the new time (unless `suppressEvents` parameter is `false`). Think of it like picking the needle up on a record player and moving it to a new position before placing it back on the record. If you do want the events/callbacks to be triggered during that initial move, simply set the `suppressEvents` parameter to `false`.

```cpp
//pauses wherever the playhead currently is:tl.pause();//jumps to exactly 2-seconds into the animation and then pauses:tl.pause(2);//jumps to exactly 2-seconds into the animation and pauses but doesn't suppress events during the initial move:tl.pause(2, false);
```

Note that when an animation (tween or timeline) is nested within a timeline, the parent timeline's playhead will continue to run even if the child animation is paused ([demo](https://codepen.io/GreenSock/pen/BaKogyg?editors=1000)). In most cases you want to pause the parent timeline instead.