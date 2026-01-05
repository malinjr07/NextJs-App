### isActive( ) : Boolean

Indicates whether or not the animation is currently active (meaning the virtual playhead is actively moving across this instance's time span and it is not paused, nor are any of its ancestor timelines).

### Returns : Boolean[](https://gsap.com/docs/v3/GSAP/Tween/isActive()/#returns--boolean "Direct link to Returns : Boolean")

Returns `true` if the tween is active. Returns `false` otherwise.

### Details[](https://gsap.com/docs/v3/GSAP/Tween/isActive()/#details "Direct link to Details")

Indicates whether or not the animation is currently active (meaning the virtual playhead is actively moving across this instance's time span and it is not paused, nor are any of its ancestor timelines). So for example, if a tween is in the middle of tweening, it's active, but after it is finished (or before it begins), it is **not** active. If it is paused or if it is placed inside of a timeline that's paused (or if any of its ancestor timelines are paused), `isActive()` will return `false`. If the playhead is directly on top of the animation's start time (even if it hasn't rendered quite yet), that counts as "active".

You may also check the [`timeline.progress()`](https://gsap.com/docs/v3/GSAP/Timeline/progress()) or [`timeline.totalProgress()`](https://gsap.com/docs/v3/GSAP/Timeline/totalProgress()), but those don't take into consideration the paused state or the position of the parent timeline's playhead.

In the demo below we use `isActive()` to make sure the tween can not have its direction changed while it is active. Click the **toggle tween direction** button repeatedly to see that clicks are ignored while the box is moving.

#### loading...

To get an array of all active GSAP tweens, use `gsap.globalTimeline.getChildren().filter(tween => tween.isActive())`.