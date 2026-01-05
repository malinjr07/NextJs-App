### tweenFromTo( fromPosition:\[Number | Label\], toPosition:\[Number | Label\], vars:Object ) : Tween

Creates a linear tween that essentially scrubs the playhead from a particular time or label to another time or label and then stops.

#### Parameters

-   #### **fromPosition**: \[Number | Label\]
    
    The beginning time in seconds or label from which the timeline should play.
    
-   #### **toPosition**: \[Number | Label\]
    
    The destination time in seconds or label to which the timeline should play.
    
-   #### **vars**: Object
    
    (default = `null`) - An optional vars object that will be passed to the Tween instance. This allows you to define an `onComplete`, `ease`, `delay`, or any other Tween special property.
    

### Returns : Tween[](https://gsap.com/docs/v3/GSAP/Timeline/tweenFromTo()/#returns--tween "Direct link to Returns : Tween")

Tween instance that handles tweening the timeline between the desired times and labels.

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/tweenFromTo()/#details "Direct link to Details")

Creates a linear tween that essentially scrubs the playhead from a particular time or label to another time or label and then stops. If you plan to sequence multiple playhead tweens one-after-the-other, `tweenFromTo()` is better to use than `tweenTo()` because it allows the duration to be determined immediately, ensuring that subsequent tweens that are appended to a sequence are positioned appropriately. For example, to make the timeline play from the label "myLabel1" to the "myLabel2" label, and then from "myLabel2" back to the beginning (a time of 0), simply do:

```csharp
var master = gsap.timeline();master.add(tl.tweenFromTo("myLabel1", "myLabel2"));master.add(tl.tweenFromTo("myLabel2", 0));
```

If you want advanced control over the tween, like adding an `onComplete` or changing the `ease` or adding a `delay`, just pass in a vars object with the appropriate properties.

For example, to tween from the start (0) to the 5-second spot on the timeline and then call a function named `myFunction` and pass in a parameter that references this timeline and use a `strong` ease, you'd do:

```php
tl.tweenFromTo(0, 5, {  onComplete: myFunction,  onCompleteParams: [tl],  ease: "strong",});
```

Remember, this method simply creates a tween that tweens the `time()` of your timeline. So you can store a reference to that tween if you want, and you can `kill()` it anytime.

Also note that `tweenFromTo()` does **NOT** affect the timeline's `reversed` property. So if your timeline is oriented normally (not reversed) and you tween to a time or label that precedes the current time, it will appear to go backwards but the `reversed` property will not change to true.

Also note that `tweenFromTo()` pauses the timeline immediately before tweening its `time()`, and it does not automatically resume after the tween completes. If you need to resume playback, you can always use an onComplete to call the `resume()` method.

Like all from-type methods in GSAP, `immediateRender` is `true` by default, meaning the timeline will immediately jump to the "from" time/label unless you set `immediateRender: false` (like `.tweenFromTo(1, 5, {immediateRender: false})`).