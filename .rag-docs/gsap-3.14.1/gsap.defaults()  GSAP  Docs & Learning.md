-   [GSAP](https://gsap.com/docs/v3/GSAP/)
-   methods
-   gsap.defaults()

`gsap.defaults()` lets you set properties that should be inherited by **ALL** tweens (that don't have `inherit:false` set) unless overridden by that tween. General configuration settings that aren't Tween-specific (like `units`, `autoSleep`, and `force3D`) should be set using [`gsap.config()`](https://gsap.com/docs/v3/GSAP/gsap.config()) instead.

For example, if you want to change the default `ease` and `duration` of all tweens you'd do:

```php
gsap.defaults({  ease: "power2.in",  duration: 1,});
```

[

Previous

gsap.context()

](https://gsap.com/docs/v3/GSAP/gsap.context())[

Next

gsap.delayedCall()

](https://gsap.com/docs/v3/GSAP/gsap.delayedCall())