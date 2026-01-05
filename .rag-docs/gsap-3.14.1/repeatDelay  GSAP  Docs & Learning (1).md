Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.

Gets or sets the number of times that the timeline should repeat after its first iteration.

For example, if `repeat` is 2 and `repeatDelay` is 1, the timeline will play initially, then wait for 1 second before it repeats, then play again, then wait 1 second again before doing its final repeat. You can set the initial `repeatDelay` value via the `vars` parameter, like:

```php
var tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
```

This method serves as both a getter and setter. Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining, like `myTimeline.repeat(2).yoyo(true).play();`