### yoyo( value:Boolean ) : \[Boolean | self\]

Gets or sets the tween's yoyo state, where true causes the tween to go back and forth, alternating backward and forward on each repeat.

#### Parameters

-   #### **value**: Boolean
    
    (default = `false`) - Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.
    

### Returns : \[Boolean | self\][](https://gsap.com/docs/v3/GSAP/Tween/yoyo()/#returns--boolean--self "Direct link to Returns : [Boolean | self]")

Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining.

### Details[](https://gsap.com/docs/v3/GSAP/Tween/yoyo()/#details "Direct link to Details")

Gets or sets the tween's `yoyo` state, where `true` causes the tween to go back and forth, alternating backward and forward on each `repeat`. `yoyo` works in conjunction with `repeat`, where `repeat` controls how many times the tween repeats, and `yoyo` controls whether or not each repeat alternates direction. So in order to make a tween yoyo, you must set its `repeat` to a non-zero value. Yoyo-ing, has no affect on the tween's `reversed` property.

For example, if `repeat` is 2 and `yoyo` is `false`, it will look like: start - 1 - 2 - 3 - 1 - 2 - 3 - 1 - 2 - 3 - end. But if `yoyo` is `true`, it will look like: start - 1 - 2 - 3 - 3 - 2 - 1 - 1 - 2 - 3 - end.

You can set the `yoyo` property initially by passing `yoyo: true` in the `vars` parameter, like: `gsap.to(obj, {duration: 1, x: 100, repeat: 1, yoyo: true});`

This method serves as both a getter and setter. Omitting the parameter returns the current value (getter), whereas defining the parameter sets the value (setter) and returns the instance itself for easier chaining, like `myAnimation.yoyo(true).repeat(3).timeScale(2).play(0.5);`

```bash
//gets current yoyo statevar yoyo = myAnimation.yoyo();//sets yoyo to truemyAnimation.yoyo(true);
```