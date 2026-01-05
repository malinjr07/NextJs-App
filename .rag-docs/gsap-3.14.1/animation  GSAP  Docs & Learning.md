\[read-only\] The [Tween](https://gsap.com/docs/v3/GSAP/Tween) or [Timeline](https://gsap.com/docs/v3/GSAP/Timeline) associated with the ScrollTrigger instance (if any). ScrollTriggers don't have to have any animation associated with them, of course, in which case `animation` will be undefined.

```php
let tween = gsap.to(".class", {  x: 100,  id: "example",  scrollTrigger: ".trigger",});console.log(ScrollTrigger.getById("example").animation); // tween
```

```php
let tween = gsap.to(".class", { x: 100 }),  st = ScrollTrigger.create({    trigger: ".trigger",    start: "top center",    end: "+=500",    animation: tween,  });console.log(st.animation); // tween
```