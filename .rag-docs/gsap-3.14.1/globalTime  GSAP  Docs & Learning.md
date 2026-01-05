### globalTime( localTime:Number ) : Number

Converts a local time to the corresponding time on the [gsap.globalTimeline](https://gsap.com/docs/v3/GSAP/gsap.globalTimeline) (factoring in all nesting, timeScales, etc.).

#### Parameters

-   #### **localTime**: Number
    
    The local time that should be converted into global time
    

### Returns : Number[](https://gsap.com/docs/v3/GSAP/Tween/globalTime()/#returns--number "Direct link to Returns : Number")

The corresponding time on the `gsap.globalTimeline`

### Details[](https://gsap.com/docs/v3/GSAP/Tween/globalTime()/#details "Direct link to Details")

Converts a local time to the corresponding time on the [gsap.globalTimeline](https://gsap.com/docs/v3/GSAP/gsap.globalTimeline()) (factoring in all nesting, timeScales, etc.). Perhaps you've got a tween nested inside a timeline that's in another timeline and you want to convert that tween's start time (0) into where that would sit on the global timeline, you'd do `tween.globalTime(0)`.

By default, it uses the tween's totalTime, so `tween.globalTime()` is the same as `tween.globalTime(tween.totalTime())`.