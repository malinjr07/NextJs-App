### Returns : Boolean[](https://gsap.com/docs/v3/GSAP/gsap.isTweening()/#returns--boolean "Direct link to Returns : Boolean")

Reports whether or not a particular object is actively animating. If a tween is paused, completed, or hasn't started yet, it isn't considered active. For example:

```less
if (!gsap.isTweening("#id")) {  // do stuff}
```

The `target` can be selector text or an object/element.