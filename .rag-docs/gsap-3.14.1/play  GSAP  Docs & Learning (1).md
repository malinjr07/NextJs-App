Begins playing forward, optionally from a specific time (by default playback begins from wherever the playhead currently is). This also ensures that the instance is neither paused nor reversed.

If you define a "from" time (the first parameter, which could also be a label for Timeline instances), the playhead moves there immediately and if there are any events/callbacks inbetween where the playhead was and the new time, they will not be triggered because by default `suppressEvents` (the 2nd parameter) is `true`. Think of it like picking the needle up on a record player and moving it to a new position before placing it back on the record. If, however, you do not want the events/callbacks suppressed during that initial move, simply set the `suppressEvents` parameter to `false`.

```cpp
//begins playing from wherever the playhead currently is:tl.play();//begins playing from exactly 2-seconds into the animation:tl.play(2);//begins playing from exactly 2-seconds into the animation but doesn't suppress events during the initial move:tl.play(2, false);>
```

**Note:** if the Timeline's timeScale is exactly 0 when play() is called, it will be changed to 1 (otherwise it wouldn't play). If you're going to tween it up from 0 you can set it to a very small number before calling play() like `tl.timeScale(tl.timeScale() || 0.001).play()` so that it doesn't jump to 1.