### Returns : Function[](https://gsap.com/docs/v3/GSAP/gsap.quickTo()/#returns--function "Direct link to Returns : Function")

### Details[](https://gsap.com/docs/v3/GSAP/gsap.quickTo()/#details "Direct link to Details")

If you find yourself calling `gsap.to()` many times on the same numeric property of the same target, like in a "mousemove" event, you can **boost performance** by creating a quickTo() function instead. Think of a `quickTo()` like an optimized function tied to one particular numeric property, where it directly pipes a new number to it and **skips** convenience tasks in a normal `gsap.to()` call such as:

-   Unit conversion and auto-appending of units
-   Relative values
-   Function-based values
-   `"random()"` parsing
-   Plugin parsing - this is only for direct properties or CSS-related properties of the target. You cannot, for example, use an attr: value or morphSVG, etc.
-   Property name alias conversion ("x" will work for transforms, but "translateX" won't)

Each time you pass in a new number to the function, it basically **restarts** the animation, redirecting it to that new value. It returns the (reused) Tween instance.

The optional 3rd parameter is for the tween `vars` object where you can specify tween-related settings like `duration`, `ease`, etc.

**Example**

```javascript
let xTo = gsap.quickTo("#id", "x", { duration: 0.4, ease: "power3" }),  yTo = gsap.quickTo("#id", "y", { duration: 0.4, ease: "power3" });document.querySelector("#container").addEventListener("mousemove", (e) => {  xTo(e.pageX);  yTo(e.pageY);});
```

## Combine with utility methods for super-powerful functions![](https://gsap.com/docs/v3/GSAP/gsap.quickTo()/#combine-with-utility-methods-for-super-powerful-functions "Direct link to Combine with utility methods for super-powerful functions!")

Since it accepts a single value, you can slap a quickTo at the end of a [`pipe()`](https://gsap.com/docs/v3/GSAP/UtilityMethods/pipe()), after other utility functions that do useful things to the numbers you feed in, like [clamping](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp()) or [snapping](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()) or somehow sanitizing the values. For example:

```perl
let xTo = gsap.utils.pipe(    gsap.utils.clamp(0, 100),    // make sure the number is between 0 and 100    gsap.utils.snap(5),          // snap to the closest increment of 5    gsap.quickTo("#id", "x", {duration: 0.8, ease: "power3"}) // apply it to the #id element's x property, have it take 0.8 seconds each time it's updated, and use a "power3" ease  );//then later...xTo(150) // animates the #el's transform to translateX(100px) (clamped to 100)xTo(3)   // animates it to 5px (snapped)...
```

## Mouse Follower Demo[](https://gsap.com/docs/v3/GSAP/gsap.quickTo()/#mouse-follower-demo "Direct link to Mouse Follower Demo")

#### loading...

## Optionally define a start value[](https://gsap.com/docs/v3/GSAP/gsap.quickTo()/#optionally-define-a-start-value "Direct link to Optionally define a start value")

By default, it will start from whatever the CURRENT value is _inside the tween_ at its current progress (it doesn't actually check the target for the current value...the idea here is to maximize performance). But you can override that by passing in a numeric start value as the 2nd parameter:

```csharp
let xTo = gsap.quickTo("#id", "x", { duration: 0.8 });xTo(100); // animates to 100 from current value inside the tween at its current progressxTo(100, 500); // animates to 100 from 500
```

### Access the tween[](https://gsap.com/docs/v3/GSAP/gsap.quickTo()/#access-the-tween "Direct link to Access the tween")

If you need to access the tween, like to `pause()` it for example, the resulting function has a `.tween` property:

```csharp
let xTo = gsap.quickTo("#id", "x", { duration: 0.8 });xTo(100); // animate to 100xTo.tween.pause(); // pause the tween!
```

It's a regular [Tween](https://gsap.com/docs/v3/GSAP/Tween) instance, so you can leverage any of its methods and properties except `delay()`.