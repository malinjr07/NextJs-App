### reverse( from:\*, suppressEvents:Boolean ) : self

Reverses playback so that all aspects of the animation are oriented backwards including, for example, a tween's ease.

#### Parameters

-   #### **from**: \*
    
    (default = `null`) - The time (or label for Timeline instances) from which the animation should begin playing in reverse (if none is defined, it will begin playing from wherever the playhead currently is). To begin at the very end of the animation, use `0`. Negative numbers are relative to the end of the animation, so -1 would be 1 second from the end.
    
-   #### **suppressEvents**: Boolean
    
    `Boolean` (default = `true`) - If `true` (the default), no events or callbacks will be triggered when the playhead moves to the new position defined in the `from` parameter.
    

Reverses playback so that all aspects of the animation are oriented backwards including, for example, a tween's ease. This will cause the instance's `time` and `totalTime` to move back towards zero as well. You can optionally define a specific time to jump to before reversing (by default it begins playing in reverse from wherever the playhead currently is). Calling `reverse()` also ensures that the instance is neither paused nor reversed.

To jump to the very end of the animation and play in reverse from there, use 0 as the "from" parameter, like `reverse(0)`.

To check whether or not the instance is reversed, use the reversed() method, like `if (myAnimation.reversed()) {...}`

If you define a "from" time (the first parameter, which could also be a label for timeline instances), the playhead moves there immediately and if there are any events/callbacks inbetween where the playhead was and the new time, they will not be triggered because by default `suppressEvents` (the 2nd parameter) is `true`. Think of it like picking the needle up on a record player and moving it to a new position before placing it back on the record. If, however, you do not want the events/callbacks suppressed during that initial move, simply set the `suppressEvents` parameter to `false`.

```cpp
//reverses playback from wherever the playhead currently is:myAnimation.reverse();//reverses playback from exactly 2 seconds into the animation:myAnimation.reverse(2);//reverses playback from exactly 2 seconds into the animation but doesn't suppress events during the initial move:myAnimation.reverse(2, false);//reverses playback from the very END of the animation:myAnimation.reverse(0);//reverses playback starting from exactly 1 second before the end of the animation:myAnimation.reverse(-1);//flips the orientation (if it's forward, it will go backward, if it is backward, it will go forward):if (myAnimation.reversed()) {  myAnimation.play();} else {  myAnimation.reverse();}//flips the orientation using the reversed() method instead (shorter version of the code above):myAnimation.reversed(!myAnimation.reversed());
```