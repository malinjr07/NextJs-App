### from( target:\[ Object | Array | String \], vars:Object, position:\[ Number | String \] ) : self

Adds a `.from()` tween to the end of the timeline (or elsewhere using the `position` parameter) - this is a convenience method that accomplishes exactly the same thing as `add( gsap.from(...) )` but with less code.

#### Parameters

-   #### **target**: \[ Object | Array | String \]
    
    Target object (or array of objects) whose properties should be affected. This can also be CSS selector text like "#feature" or "h2.author" (GSAP will pass selector strings to `document.querySelectorAll()`).
    
-   #### **vars**: Object
    
    An object defining the starting values for each property that should be tweened as well as any special properties like `onComplete`, `ease`, etc.
    
-   #### **position**: \[ Number | String \]
    
    (default = `"+=0"`) - controls the insertion point in the timeline (by default, it's the end of the timeline). See options below, or the [Position Parameter article](https://gsap.com/resources/position-parameter) which has interactive timeline visualizations and a video. If you define a label that doesn't exist yet, it will **automatically be added to the end of the timeline**
    

### Returns : self[](https://gsap.com/docs/v3/GSAP/Timeline/from()/#returns--self "Direct link to Returns : self")

self (makes chaining easier)

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/from()/#details "Direct link to Details")

Adds a [`gsap.from()`](https://gsap.com/docs/v3/GSAP/gsap.from()) tween to the end of the timeline (or elsewhere using the [position parameter](https://gsap.com/resources/position-parameter)) - this is a convenience method that accomplishes exactly the same thing as `add( gsap.from(...) )` but with less code. For example:

```csharp
var tl = gsap.timeline();var tween = gsap.from(element, { duration: 1, x: 100, opacity: 0.5 });tl.add(tween);//this line produces the same result as the previous two lines (just shorter)tl.from(element, { duration: 1, x: 100, opacity: 0.5 });
```

___

**See the [gsap.from() docs](https://gsap.com/docs/v3/GSAP/gsap.from()) for all the details and special properties available for a `from()` Tween.**

___

You can chain these calls together and use other convenience methods like [`to()`](https://gsap.com/docs/v3/GSAP/Timeline/to()), [`call()`](https://gsap.com/docs/v3/GSAP/Timeline/call()), [`set()`](https://gsap.com/docs/v3/GSAP/Timeline/set()), etc. to build out sequences very quickly:

```bash
//create a timeline that calls myFunction() when it completesvar tl = gsap.timeline({ onComplete: myFunction });//now we'll use chaining, but break each step onto a different line for readability...//tween element's x from -100tl.from(element, { duration: 1, x: -100 })  //then tween element's y to 50  .to(element, { duration: 1, y: 50 })  //then set element's opacity to 0.5 immediately  .set(element, { opacity: 0 })  //then call otherFunction()  .call(otherFunction)  //finally tween the rotation of all elements with the class "myClass" to 45 and stagger the start times by 0.25 seconds  .to(".myClass", { duration: 1.5, rotation: 45, stagger: 0.25 });
```

## Positioning animations in a timeline[](https://gsap.com/docs/v3/GSAP/Timeline/from()/#positioning-animations-in-a-timeline "Direct link to Positioning animations in a timeline")

By default, animations are added to the **end** of the timeline so that they're sequenced one-after-the-other but you can use the [position parameter](https://gsap.com/resources/position-parameter) to control precisely where things are placed. It typically comes after the **vars** parameter and it uses a flexible syntax with the following options:

-   **Absolute time** (in seconds) measured from the start of the timeline, as a **number** like `3`
    
    ```css
    // insert exactly 3 seconds from the start of the timelinetl.from(".class", { x: 100 }, 3);
    ```
    
-   **Label**, like `"someLabel"`. _If the label doesn't exist, it'll be added to the end of the timeline._
    
    ```lua
    // insert at the "someLabel" labeltl.from(".class", { x: 100 }, "someLabel");
    ```
    
-   `"<"` The **start** of previous animation\*\*. _Think of `<` as a pointer back to the start of the previous animation._
    
    ```lua
    // insert at the START of the  previous animationtl.from(".class", { x: 100 }, "<");
    ```
    
-   `">"` - The **end** of the previous animation\*\*. _Think of `>` as a pointer to the end of the previous animation._
    
    ```lua
    // insert at the END of the previous animationtl.from(".class", { x: 100 }, ">");
    ```
    
-   A complex string where `"+="` and `"-="` prefixes indicate **relative** values. _When a number follows `"<"` or `">"`, it is interpreted as relative so `"<2"` is the same as `"<+=2"`._ Examples:
    
    -   `"+=1"` - 1 second past the end of the timeline (creates a gap)
    -   `"-=1"` - 1 second before the end of the timeline (overlaps)
    -   `"myLabel+=2"` - 2 seconds past the label `"myLabel"`
    -   `"<+=3"` - 3 seconds past the start of the previous animation
    -   `"<3"` - same as `"<+=3"` (see above) (`"+="` is implied when following `"<"` or `">"`)
    -   `">-0.5"` - 0.5 seconds before the end of the previous animation. It's like saying _"the end of the previous animation plus -0.5"_
-   A complex string based on a **percentage**. When immediately following a `"+="` or `"-="` prefix, the percentage is based on [total duration](https://gsap.com/docs/v3/GSAP/Tween/totalDuration()) of the **animation being inserted**. When immediately following `"<"` or `">"`, it's based on the [total duration](https://gsap.com/docs/v3/GSAP/Tween/totalDuration()) of the **previous animation**. _Note: total duration includes repeats/yoyos_. Examples:
    
    -   `"-=25%"` - overlap with the end of the timeline by 25% of the inserting animation's total duration
    -   `"+=50%"` - beyond the end of the timeline by 50% of the inserting animation's total duration, creating a gap
    -   `"<25%"` - 25% into the previous animation (from its start). Same as `">-75%"` which is negative 75% from the **end** of the previous animation.
    -   `"<+=25%"` - 25% of the inserting animation's total duration past the start of the previous animation. Different than `"<25%"` whose percentage is based on the **previous animation's** total duration whereas anything immediately following `"+="` or `"-="` is based on the **inserting animation's** total duration.
    -   `"myLabel+=30%"` - 30% of the inserting animation's total duration past the label `"myLabel"`.

\*Percentage-based values were added in GSAP 3.7.0  
\*\*The "previous animation" refers to the most recently-inserted animation, not necessarily the animation that is closest to the end of the timeline.

### Position Parameter Interactive Demo[](https://gsap.com/docs/v3/GSAP/Timeline/from()/#position-parameter-interactive-demo "Direct link to Position Parameter Interactive Demo")

#### loading...

Be sure to read the [Position Parameter article](https://gsap.com/resources/position-parameter) which includes interactive timeline visualizations and a video.

info

By default, `immediateRender` is `true` in `from()` tweens, meaning that they immediately render their starting state regardless of any delay that is specified. You can override this behavior by passing `immediateRender: false` in the vars parameter so that it will wait to render until the tween actually begins.