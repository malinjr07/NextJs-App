-   more plugins
-   PhysicsProps

Quick Start

#### CDN Link

```scss
gsap.registerPlugin(PhysicsPropsPlugin)
```

#### Minimal usage

```php
gsap.to(obj, {  duration: 2,  physicsProps: {    x: { velocity: 100, acceleration: 200 },    y: { velocity: -200, friction: 0.1 },  },});
```

## Description[](https://gsap.com/docs/v3/Plugins/PhysicsPropsPlugin/#description "Direct link to Description")

Sometimes it's useful to tween a value at a particular velocity and/or acceleration without a specific end value in mind. PhysicsPropsPlugin allows you to tween **any** numeric property of **any** object based on these concepts. Keep in mind that any easing equation you define for your tween will be completely ignored for these properties. Instead, the physics parameters will determine the movement/easing.

## **Config Object**[](https://gsap.com/docs/v3/Plugins/PhysicsPropsPlugin/#config-object "Direct link to config-object")

### Property

### Description

-   #### velocity[](https://gsap.com/docs/v3/Plugins/PhysicsPropsPlugin/#velocity)
    
    Number - The initial velocity of the object measured in units per second. Default: `0`.
    
-   #### acceleration[](https://gsap.com/docs/v3/Plugins/PhysicsPropsPlugin/#acceleration)
    
    Number - The amount of acceleration applied to the object, measured in units per second. Default: `0`.
    
-   #### friction[](https://gsap.com/docs/v3/Plugins/PhysicsPropsPlugin/#friction)
    
    Number - A value between 0 and 1 where 0 is no friction, 0.08 is a small amount of friction, and 1 will completely prevent any movement. This is not meant to be precise or scientific in any way, but it serves as an easy way to apply a friction-like physics effect to your tween. Generally it is best to experiment with this number a bit, starting at a very low value like `0.02`. Also note that friction requires more processing than physics tweens without any friction. Default: `0`.
    

info

These parameters are not intended to be dynamically updateable. But one unique convenience is that everything is reverseable. So if you create several physics-based tweens, for example, and throw them into a timeline, you could simply call reverse() on the timeline to watch the objects retrace their steps right back to the beginning. Here are the parameters you can define (note that `friction` and `acceleration` are both completely optional):

## **Demos**[](https://gsap.com/docs/v3/Plugins/PhysicsPropsPlugin/#demos "Direct link to demos")

-   [PhysicsProps demos](https://codepen.io/collection/nwMRgp)

[

Previous

Physics2D

](https://gsap.com/docs/v3/Plugins/Physics2DPlugin)[

Next

Pixi

](https://gsap.com/docs/v3/Plugins/PixiPlugin/)