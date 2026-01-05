### .effects( targets:String | Element | Array, config:Object | null ) : Array

Adds parallax elements that should be managed by the ScrollSmoother

#### Parameters

-   #### **targets**: String | Element | Array
    
    The target elements that should have the effects applied. You can use selector text like `".box"` or use an element reference or an Array of elements.
    
-   #### **config**: Object | null
    
    A config object that can contain `speed` and/or `lag` properties like `{speed: 1, lag: 0.3}`. If omitted, ScrollSmoother will just use each element's `data-speed` or `data-lag` attribute value. Function-based values are accepted as well just like most places in GSAP.
    

### Returns : Array[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/effects()/#returns--array "Direct link to Returns : Array")

An Array of ScrollTrigger instances that were created to handle the effects

### Details[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/effects()/#details "Direct link to Details")

Adds **speed** or **lag** effects to the supplied targets. Use "speed" to get parallax effects. Think of a "lag" like making the element lazy, allowing it to drift from its normal scroll position, taking a certain amount of time to "catch up". You can assign slightly different lags to elements in close proximity to give them a staggered effect when scrolling that's quite pleasing to the eye. If you set `effects: true` on the [ScrollSmoother.create()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/static.create()) config, it'll automatically find any elements with the `data-lag` attribute and apply that effect, or you can use this function to apply them via JavaScript:

```perl
let smoother = ScrollSmoother.create(...);// use the data-speed and data-lag attributes found on each .box elementsmoother.effects(".box");// or specify values:smoother.effects(".circle", {speed: 0.9, lag: 0.3});
```

You can remove effects by setting them to the defaults like:

```cpp
// remove effects by setting back to defaultssmoother.effects(".box", { speed: 1, lag: 0 });
```

When an effect is applied to an element, ScrollSmoother just creates a [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger) instance to manage the effect, and it returns an Array of those ScrollTrigger instances. So if you apply a "speed" effect to 5 elements, the returned Array will contain 5 ScrollTrigger instances. You can also get an Array of ALL effects by using the method as a getter:

```sql
// returns an Array of all the ScrollTrigger instances that are managing the effectslet effects = smoother.effects(); // getter// kill all the effects:smoother.effects().forEach((t) => t.kill());
```

## "auto" speed[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/effects()/#auto-speed "Direct link to "auto" speed")

When you set the speed to `"auto"`, it will calculate how far it can move inside its **parent container** in the direction of the largest gap (up or down). So it's perfect for parallax effects - just make the child larger than its parent, align it where you want it (typically its top edge at the top of the container, or the bottom edge at the bottom of the container) and let ScrollSmoother do its magic. Obviously set `overflow: hidden` on the parent so it clips the child.

You can even use **function-based values** to make things even more dynamic:

```javascript
smoother.effects(".box", {  speed: (index, element) => 0.5 + index * 0.1,  lag: (index, element) => 0.3 + index * 0.05,});
```

These function-based values will get refreshed whenever [ScrollTrigger.refresh()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()) is called.

### data-speed alignment[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/effects()/#data-speed-alignment "Direct link to data-speed alignment")

Keep in mind that the elements will hit their "natural" position in the **CENTER** of the viewport. Here's a visual demo from [@snorkltv](https://www.creativecodingclub.com/courses/FreeGSAP3Express?ref=44f484):

#### loading...