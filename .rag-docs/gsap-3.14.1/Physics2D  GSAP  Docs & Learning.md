#### loading...

Provides simple physics functionality for tweening an Object's `x` and `y` coordinates (or `left` and `top`) based on a combination of `velocity`, `angle`, `gravity`, `acceleration`, `accelerationAngle`, and/or `friction`. It is not intended to replace a full-blown physics engine and does not offer collision detection, but serves as a way to easily create interesting physics-based effects with the GreenSock Animation Platform.

info

Parameters are not intended to be dynamically updateable, but one unique convenience is that everything is reverseable. So if you spawn a bunch of particle tweens, for example, and throw them into a timeline, you could simply call `reverse()` on the timeline to watch the particles retrace their steps right back to the beginning. Keep in mind that any easing equation you define for your tween will be completely ignored for these properties.

```yaml
gsap.to(element, {  duration: 2,  physics2D: { velocity: 300, angle: -60, gravity: 400 },});//orgsap.to(element, {  duration: 2,  physics2D: { velocity: 300, angle: -60, friction: 0.1 },});//orgsap.to(element, {  duration: 2,  physics2D: {    velocity: 300,    angle: -60,    acceleration: 50,    accelerationAngle: 180,  },});
```