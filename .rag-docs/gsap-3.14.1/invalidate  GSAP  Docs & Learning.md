### invalidate( ) : self

\[override\] Flushes any internally-recorded starting/ending values which can be useful if you want to restart an animation without reverting to any previously recorded starting values.

### Returns : self[](https://gsap.com/docs/v3/GSAP/Tween/invalidate()/#returns--self "Direct link to Returns : self")

self (makes chaining easier)

### Details[](https://gsap.com/docs/v3/GSAP/Tween/invalidate()/#details "Direct link to Details")

Clears any initialization data (like recorded starting/ending values) which can be useful if, for example, you want to restart a tween without reverting to any previously recorded starting values. When you `invalidate()` an animation, it will be re-initialized the next time it renders and its `vars` object will be re-parsed. The timing of the animation (duration, startTime, delay) will not be affected.

For example, let's say `element.x` is 0 and then you `gsap.to(element, {duration: 2, x: "+=100"})`, it will animate from 0 to 100 over the course of 2 seconds. If you `restart()` that tween, it'll do exactly the same (animate from 0 to 100).

But let's say after that tween runs once, you'd like to flush the starting/ending values that were recorded internally so that x animates to 100 more than where it is **NOW** (which in this example would be 100). If we now call `invalidate()` on that tween, it'll re-parse the starting/ending values on the next render, thus causing it to animate `x` from 100 to 200.

When you invalidate a timeline, it automatically invalidates all of its children.

Note: if you just want to invalidate() a tween each time it repeats, you can use the `repeatRefresh: true` special property.

Invalidate

<iframe width="560" height="315" src="https://www.youtube.com/embed/p1MAs-P_APk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>

#### loading...