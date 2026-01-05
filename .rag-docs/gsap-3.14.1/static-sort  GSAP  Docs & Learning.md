## ScrollTrigger.sort

### ScrollTrigger.sort( func:Function ) : Array

Sorts the internal Array of ScrollTrigger instances to control the order in which they [refresh()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()) (calculate their start/end values).

#### Parameters

-   #### **func**: Function
    
    Optional function to use for the sorting, just like JavaScript's native Array.sort() method. If omitted, sorting will be done first by any "refreshPriority" defined in the ScrollTrigger's vars object (default: 0) and then the "start" value for each ScrollTrigger.
    

### Returns : Array[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.sort()/#returns--array "Direct link to Returns : Array")

The internal Array of ScrollTriggers

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.sort()/#details "Direct link to Details")

Sorts the internal Array of ScrollTrigger instances to control the order in which they [refresh()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()) (calculate their start/end values). It's **VERY** unlikely that you'd need to `sort()` as long as you create your ScrollTriggers in the order they'd happen on the page (top-to-bottom or left-to-right)...which we _strongly_ recommend doing. Otherwise, you can either define a `refreshPriority` in any ScrollTriggers that you need to push higher or lower in the list (which forces a `sort()`), or you can manually call the `ScrollTrigger.sort()` method to ensure that the pinning distance gets added to the `start`/`end` values of subsequent ScrollTriggers further down the page (that's why order matters).

For example, if you create a ScrollTrigger that spans the _entire_ height of the window, but then **later** you create one that pins an element for 300px, that would technically make the page 300px taller (assuming `pinSpacing` isn't `false`), thus the earlier-calculated `end` position would be incorrect for the whole-page ScrollTrigger. The easiest solution is to just create that ScrollTrigger last but if you can't do that, set its `refreshPriority` to a low value like `-1` and it'll get placed lower in the list of ScrollTriggers in terms of their `refresh()` calculations.

You can either use your own custom sorting method or if none is provided, it'll sort by `refreshPriority` first, then by each ScrollTrigger's `start` value. So, for example, a ScrollTrigger with `refreshPriority: 1` will get refreshed earlier than one with `refreshPriority: 0` (the default). You're welcome to use negative numbers too, and you can assign the same number to multiple ScrollTriggers.

If a `refreshPriority` is defined on **any** ScrollTrigger, it will force a `sort()`. If you choose to pass in a custom function, it'll work just like the native JavaScript [Array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method.

## Example[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.sort()/#example "Direct link to Example")

```perl
ScrollTrigger.create({  refreshPriority: -1, // lower priority makes it happen later in the refresh() calculations  ...});ScrollTrigger.create({  ... // if no refreshPriority is defined, it defaults to 0});gsap.to(".class", { // works with tweens/timelines too  opacity: 1,  scrollTrigger: {    refreshPriority: 3, // a higher number makes it happen earlier in the refresh() calculations    ...  }});ScrollTrigger.sort(); // use the defaults (typically best)// or use a custom function...ScrollTrigger.sort((a, b) => a.start - b.start);
```