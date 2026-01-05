Returns the element in an Array associated with the provided index or a number in a provided range, going backwards once the last index is reached (yoyo-ing). Or if no value to wrap is provided, it returns a reusable **function** that will do the wrapping accordingly when it's fed a value.

Places a number into a specified range such that when it exceeds the maximum, it yoyos back toward the start and if it is less than the minimum, it yoyo's forward to the end. In the context of tweening this has the effect of cycling back and forth through the values.

For example, if you have 10 elements with the `"box"` class applied, and you've got a `["red", "green", "yellow"]` array of colors that you'd like to have those elements animate to so that the first box animates to `"red"`, then next to `"green"`, then next to `"yellow"` and then go backwards so that the 4th would go to `"green"`, 5th to `"red"`, then forwards again to `"green"`, etc., `wrapYoyo()` is perfect for that. If we don't provide an `index` value, we'll get a `function` instead that's ready to do the wrap yoyo-ing accordingly.

```perl
//returns the corresponding value in the array (wrapping back to the beginning when necessary)let color = gsap.utils.wrapYoyo(["red", "green", "yellow"], 5); // "red" (index 5 maps to index 0 in a 3-element Array)//or use a rangelet num = gsap.utils.wrapYoyo(5, 10, 12); // 8 (12 is two past the max of 10, thus the yoyo would go backward to 8)//if we don't provide an index, we get a function that's ready to do wrapping accordinglylet wrap = gsap.utils.wrapYoyo(["red", "green", "yellow"]);//now we just feed an index number into the function we got back from the line above and we'll get the corresponding value from the wrapped Arraylet color = wrap(5) // "green"
```

#### loading...