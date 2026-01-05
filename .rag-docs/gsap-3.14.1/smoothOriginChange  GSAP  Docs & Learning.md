If you want to change `transformOrigin` dynamically without a jump, you'd need to compensate its translation (x/y). Here's a function I whipped together for that purpose:

```javascript
function smoothOriginChange(targets, transformOrigin) {  gsap.utils.toArray(targets).forEach(function (target) {    var before = target.getBoundingClientRect();    gsap.set(target, { transformOrigin: transformOrigin });    var after = target.getBoundingClientRect();    gsap.set(target, {      x: "+=" + (before.left - after.left),      y: "+=" + (before.top - after.top),    });  });}
```

#### loading...