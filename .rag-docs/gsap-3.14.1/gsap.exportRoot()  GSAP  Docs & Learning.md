Seamlessly transfers all tweens, timelines, and \[optionally\] delayed calls from the root timeline into a new timeline so that you can perform advanced tasks on a seemingly global basis without affecting tweens/timelines that you create **_after_** the export.

For example, imagine a game that uses the GSAP for all of its animations and at some point during the game, you want to slow everything down to a stop (animating the `timeScale`) while at the same time animating a new popup window into place:

```yaml
var tl = gsap.exportRoot();gsap.to(tl, { duration: 0.5, timeScale: 0 });//this tween isn't affected because it's created after the export.gsap.fromTo(  myWindow,  { scaleX: 0, scaleY: 0 },  { duration: 1, scaleX: 1, scaleY: 1 });
```

You could then re-animate things when you're ready by tweening the `timeScale` back to 1. Or you could use `exportRoot()` to collect all the animations and `pause()` them and then animate the popup screen (or whatever). Then `resume()` that instance or even `reverse()`.

You can `exportRoot()` as many times as you want; all it does is wrap all the loose tweens, timelines, and delayedCalls into a timeline which itself gets placed onto the root, so if you `exportRoot()` again, that timeline would get wrapped into another one, etc. Things can be nested as deeply as you want.

warning

Completed tweens and timelines are removed from the globalTimeline (for automatic garbage collection), so if you `exportRoot()` _after_ a particular tween completes, it won't be included in the export.