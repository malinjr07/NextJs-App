Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.

Gets or sets the animation's initial `delay` which is the length of time in seconds before the animation should begin. A tween's starting values are not recorded until after the `delay` has expired (except in `from()` tweens which render immediately by default unless `immediateRender: false` is set in the `vars` parameter). An animation's `delay` is unaffected by its `timeScale`, so if you were to change `timeScale` from `1` to `10`, for example, it wouldn't cause the delay to grow tenfold.

This method serves as both a getter and setter. Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining, like `myAnimation.delay(2).timeScale(0.5).restart(true);`

```bash
var currentDelay = myAnimation.delay(); //gets current delaymyAnimation.delay(2); //sets delay
```