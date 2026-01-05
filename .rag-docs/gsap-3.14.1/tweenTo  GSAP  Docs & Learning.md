### tweenTo( position:\[Number | Label\], vars:Object ) : Tween

Creates a linear tween that essentially scrubs the playhead to a particular time or label and then stops.

#### Parameters

-   #### **position**: \[Number | Label\]
    
    The destination time in seconds or label to which the timeline should play.
    
-   #### **vars**: Object
    
    (default = `null`) - An optional vars object that will be passed to the Tween instance. This allows you to define an `onComplete`, `ease`, `delay`, or any other Tween special property.
    

### Returns : Tween[](https://gsap.com/docs/v3/GSAP/Timeline/tweenTo()/#returns--tween "Direct link to Returns : Tween")

Tween instance that handles tweening the timeline between the desired times and labels.

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/tweenTo()/#details "Direct link to Details")

Creates a linear tween that essentially scrubs the playhead to a particular time or label and then stops. For example, to make the timeline play to the "myLabel2" label, simply do:

If you want advanced control over the tween, like adding an `onComplete` or changing the `ease` or adding a `delay`, just pass in a `vars` object with the appropriate properties.

For example, to tween to the 5-second point on the timeline and then call a function named `myFunction` and pass in a parameter that references this timeline and use a `strong` ease, you'd do:

```php
tl.tweenTo(5, {  onComplete: myFunction,  onCompleteParams: [tl],  ease: "strong",});
```

Remember, this method simply creates a tween that pauses the timeline and then tweens the `time()` of the timeline. So you can store a reference to that tween if you want, and you can `kill()` it anytime.

Also note that `tweenTo()` does **NOT** affect the timeline's reversed state. So if your timeline is oriented normally (not reversed) and you tween to a time/label that precedes the current time, it will appear to go backwards but the reversed state will not change to true.

Also note that `tweenTo()` pauses the timeline immediately before tweening its `time()`, and it does **not** automatically resume after the tween completes. If you need to resume playback, you could always use an onComplete to call the timeline's `resume()` method.

If you plan to sequence multiple playhead tweens one-after-the-other, it is typically better to use `tweenFromTo()` so that you can define the starting point and ending point, allowing the duration to be accurately determined immediately.