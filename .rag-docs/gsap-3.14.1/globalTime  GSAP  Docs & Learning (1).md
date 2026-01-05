### globalTime( localTime:Number ) : Number

Converts a local time to the corresponding time on the [gsap.globalTimeline](https://gsap.com/docs/v3/GSAP/gsap.globalTimeline) (factoring in all nesting, timeScales, etc.).

#### Parameters

-   #### **localTime**: Number
    
    The local time that should be converted into the corresponding time on the global timeline
    

### Returns : Number[](https://gsap.com/docs/v3/GSAP/Timeline/globalTime()/#returns--number "Direct link to Returns : Number")

The corresponding time on the global timeline

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/globalTime()/#details "Direct link to Details")

Converts a local time to the corresponding time on the [gsap.globalTimeline](https://gsap.com/docs/v3/GSAP/gsap.globalTimeline()) (factoring in all nesting, timeScales, etc.). Perhaps you've got a timeline nested inside a timeline that's in another timeline and you want to convert its start time (0) into where that would sit on the global timeline, you'd do `yourTimeline.globalTime(0)`.

By default, it uses the animation's totalTime, so `yourTimeline.globalTime()` is the same as `yourTimeline.globalTime(tween.totalTime())`.