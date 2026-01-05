Jumps to a specific time (or label) without affecting whether or not the instance is paused or reversed.

If there are any events/callbacks inbetween where the playhead was and the new time, they will not be triggered because by default `suppressEvents` (the 2nd parameter) is `true`. Think of it like picking the needle up on a record player and moving it to a new position before placing it back on the record. If, however, you do not want the events/callbacks suppressed during that initial move, simply set the `suppressEvents` parameter to `false`.

```cpp
//jumps to exactly 2 secondstl.seek(2);//jumps to exactly 2 seconds but doesn't suppress events during the initial move:tl.seek(2, false);//jumps to the "myLabel" labeltl.seek("myLabel");
```