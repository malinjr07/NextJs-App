### repeat( value:Number ) : \[Number | self\]

Gets or sets the number of times that the timeline should repeat after its first iteration.

#### Parameters

-   #### **value**: Number
    
    (default = `0`) - Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.
    

### Returns : \[Number | self\][](https://gsap.com/docs/v3/GSAP/Timeline/repeat()/#returns--number--self "Direct link to Returns : [Number | self]")

Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/repeat()/#details "Direct link to Details")

Gets or sets the number of times that the timeline should repeat after its first iteration.

For example, if `repeat` is `1`, the timeline will play a total of twice (the initial play plus 1 repeat). To repeat **indefinitely**, use `-1`. `repeat` should always be an integer.

To cause the repeats to alternate between forward and backward, set `yoyo` to `true`. To add a time gap between repeats, use `repeatDelay`. You can set the initial `repeat` value via the `vars` parameter, like:

```php
var tl = gsap.timeline({ repeat: 2 });
```

This method serves as both a getter and setter. Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining, like `myTimeline.repeat(2).yoyo(true).play();`

```lua
//gets current repeat valuevar repeat = tl.repeat();//sets repeat to 2tl.repeat(2);
```