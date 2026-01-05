Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.

Factor that's used to scale time in the animation where 1 = normal speed (the default), 0.5 = half speed, 2 = double speed, -1 = go backwards at normal speed, etc. For example, if an animation's `duration` is 2 but its `timeScale` is 0.5, it will take 4 seconds to finish. If you nest that animation in a timeline whose `timeScale` is 0.5 as well, it would take 8 seconds to finish. You can even tween the `timeScale` to gradually slow it down or speed it up.

This method serves as both a getter and setter. Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining, like `myAnimation.timeScale(2).play(1);`

```bash
//gets current timeScalevar currentTimeScale = myAnimation.timeScale();//sets timeScale to half-speedmyAnimation.timeScale(0.5);
```