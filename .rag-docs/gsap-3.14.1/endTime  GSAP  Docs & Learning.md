Returns the time at which the animation will finish according to the parent timeline's local time.

Returns the time at which the animation will finish according to the parent timeline's local time. This does factor in the timeScale. For example:

```csharp
var tl = gsap.timeline();//create a 1-second tweenvar tween = gsap.to(e, { duration: 1, x: 100 });//insert the tween at 0.5 seconds into the timelinetl.add(tween, 0.5);console.log(tween.endTime()); //1.5//double the speed of the tween, thus it'll finish in half the normal timetween.timeScale(2);console.log(tween.endTime()); //1
```