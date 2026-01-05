\[read-only\] The trigger element (if one was defined). If selector text was used, like ".trigger", the `trigger` will be the element itself (not selector text). Also note that it is possible to define a ScrollTrigger _without_ a trigger because `start` and `end` can be **numbers** which are specific scroll values that aren't based on where a trigger element is in the document flow.

```php
let st = ScrollTrigger.create({  trigger: ".trigger",  start: "top center",  end: "+=500",});console.log(st.trigger); // trigger element (not selector text)
```