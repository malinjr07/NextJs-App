## ScrollTrigger.observe

### ScrollTrigger.observe( config:Object ) : Observer

Super-flexible, unified way to sense meaningful events across all (touch/mouse/pointer) devices without wrestling with all the implementation details. Trigger simple callbacks like onUp, onDown, onLeft, onRight, onChange, onHover, onDrag, etc. Functionally identical to [Observer.create()](https://gsap.com/docs/v3/Plugins/Observer/static.create())

#### Parameters

-   #### **config**: Object
    
    A configuration object with properties like target, type, onUp, onDown, etc.
    

An Observer object that has properties like `deltaX`, `deltaY`, etc. See [Observer docs](https://gsap.com/docs/v3/Plugins/Observer) for details.

Super-flexible, unified way to sense meaningful events across all (touch/mouse/pointer) devices without wrestling with all the implementation details. Perhaps you want to respond to "scroll-like" user behavior which could be a mouse wheel spin, finger swipe on a touch device, a scrollbar drag, or a pointer press & drag...and of course you need directional data and velocity. No problem!

`ScrollTrigger.observe()` is just a convenient way to access [Observer.create()](https://gsap.com/docs/v3/Plugins/Observer/static.create()). Since [ScrollTrigger.normalizeScroll()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()) functionality leverages Observer under the hood (thus it's included inside ScrollTrigger anyway), it made sense to expose its functionality so that you can avoid loading Observer as a separate file if you're already using ScrollTrigger in your project. You're welcome. 🙂

Look how easy it is to trigger next()/previous() functions based on when the user swipes up/down or uses their mouse wheel:

```perl
ScrollTrigger.observe({  target: window, // can be any element (selector text is fine)  type: "wheel,touch", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")  onUp: () => previous(),  onDown: () => next(),});
```

Notice there's no actual scrolling in the demo below but you can use your mouse wheel (or swipe on touch devices) to initiate movement so it "feels" like a scroll:

#### loading...