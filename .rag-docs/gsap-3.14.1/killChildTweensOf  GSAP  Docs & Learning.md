You can kill all tweening elements that are children of a given target by using this function:

```javascript
function killChildTweensOf(ancestor) {  ancestor = gsap.utils.toArray(ancestor)[0];  gsap.globalTimeline    .getChildren(true, true, false)    .forEach((tween) =>      tween        .targets()        .forEach((e) => e.nodeType && ancestor.contains(e) && tween.kill(e))    );}
```

#### loading...