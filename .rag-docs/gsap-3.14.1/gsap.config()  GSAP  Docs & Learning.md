`gsap.config()` lets you configure GSAP's settings that aren't Tween-specific, like `autoSleep`, `force3D`, and `units`. To affect properties that should be **inherited** by individual tweens, use [`gsap.defaults()`](https://gsap.com/docs/v3/GSAP/gsap.defaults()) instead. Here is a list of config() options:

-   `autoSleep` - How many frames should elapse between internal checks to see if GSAP should power-down the internal ticker to conserve system resources and battery life on mobile devices. The default is `120` (about every 2 seconds).
-   `force3D` - GSAP automatically attempts to maximize rendering performance by applying transforms with 3D components like `translate3d()` instead of `translate()`**during** The animation to activate GPU acceleration, and then switches back to the 2D variant at the end (if possible) to conserve GPU memory. That describes `force3D:"auto"` behavior (the default). Setting `force3D: false` disables the behavior. Setting `force3D: true` will force all transform-related tweens to use the 3D component and NOT switch back to 2D at the end of the tween.
-   `nullTargetWarn` - By default, GSAP will throw a warning when attempting to tween elements that don't exist (are null). You can suppress this warning by setting `nullTargetWarn: false`.
-   `units` - Set the default CSS unit to be used for various properties when no unit is provided. For example, `{left: 100}` animates the CSS "left" property to be tweened to 100px because the default unit is "px" for the "left" property. If you want to make `{left: 100}` animate to 100% by default instead you could define `gsap.config({units: {left: "%"}})`. Only the properties that you set will be changed. The default for most numbers is `"px"` and rotation-related values are `"deg"`.

### Example[](https://gsap.com/docs/v3/GSAP/gsap.config()/#example "Direct link to Example")

```yaml
// you only need to define the configuration settings you want to CHANGE. Omitted properties won't be affected.gsap.config({  autoSleep: 60,  force3D: false,  nullTargetWarn: false,  trialWarn: false,  units: { left: "%", top: "%", rotation: "rad" },});
```