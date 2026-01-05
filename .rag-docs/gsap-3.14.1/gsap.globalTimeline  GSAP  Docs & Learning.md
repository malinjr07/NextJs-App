`gsap.globalTimeline` is the root Timeline instance that drives everything in GSAP, making it a powerful way to affect all animations at once. Keep in mind, however, that [gsap.delayedCalls()](https://gsap.com/docs/v3/GSAP/gsap.delayedCall()) are also technically tweens, so if you [pause()](https://gsap.com/docs/v3/GSAP/Timeline/pause()) or [timeScale()](https://gsap.com/docs/v3/GSAP/Timeline/timeScale()) the globalTimeline, it will affect delayedCalls() too. If you want to omit those, check out [gsap.exportRoot()](https://gsap.com/docs/v3/GSAP/gsap.exportRoot()).

```scss
gsap.globalTimeline.timeScale(0.5); //plays at half-speedgsap.globalTimeline.timeScale(2); //plays twice the normal speedvar currentTimeScale = gsap.globalTimeline.timeScale(); //returns the current global timeScale
```

info

Keep in mind that since the global timeline is used to run all other tweens and timelines, `gsap.globalTimeline.isActive()` will always return `true` regardless of whether or not there are any tweens or timelines currently active.