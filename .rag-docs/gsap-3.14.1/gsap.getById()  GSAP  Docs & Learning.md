GSAP automatically releases animations for garbage collection shortly after they complete, so `getById()` will only find animations that are active or haven't begun yet. Otherwise, if kept all animations around just in case you're gonna call `getById()` to find one, it could quickly clog up the system and lead to memory leaks. If you need to maintain a reference to an animation even after it completes, you should use a variable like this:

```php
let myTween = gsap.to(obj, { duration: 1, x: 100 });// latermyTween.pause();
```