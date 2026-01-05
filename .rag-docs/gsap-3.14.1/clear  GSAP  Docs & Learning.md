### clear( labels:Boolean ) : self

Empties the timeline of all tweens, timelines, and callbacks (and optionally labels too).

#### Parameters

-   #### **labels**: Boolean
    
    (default = `true`) - If `true` (the default), labels will be cleared too.
    

### Returns : self[](https://gsap.com/docs/v3/GSAP/Timeline/clear()/#returns--self "Direct link to Returns : self")

self (makes chaining easier)

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/clear()/#details "Direct link to Details")

Empties the timeline of all tweens, timelines, and callbacks (and optionally labels too). Event callbacks (like onComplete, onUpdate, onStart, etc.) are not removed. If you need to remove event callbacks, use the `eventCallback()` method and set them to null like `myTimeline.eventCallback("onComplete", null);`