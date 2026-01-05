The Tween or Timeline associated with the provided ID.

Searches the timeline and returns the first descendant with a matching ID. When creating a tween or timeline, you can assign it an `id` so that later you can find it using that `id`. This is particularly helpful when using frameworks and build tools like React where keeping track of variables can be difficult.

```bash
var tl = gsap.timeline();//give the animation a "myTween" id upon creationtl.to(obj, { id: "myTween", duration: 1, x: 100 });//later we can get it like thisvar myTween = tl.getById("myTween");
```