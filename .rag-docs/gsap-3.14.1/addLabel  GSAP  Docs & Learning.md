### addLabel( label:String, position:\[Number | String\] ) : self

Adds a label to the timeline, making it easy to mark important positions/times.

#### Parameters

-   #### **label**: String
    
    The name of the label
    
-   #### **position**: \[Number | String\]
    
    (default = `"+=0"`) - controls the insertion point in the timeline (by default, it's the end of the timeline). See options below, or the [Position Parameter article](https://gsap.com/resources/position-parameter) which has interactive timeline visualizations and a video. If you define a label that doesn't exist yet, it will **automatically be added to the end of the timeline**
    

### Returns : self[](https://gsap.com/docs/v3/GSAP/Timeline/addLabel()/#returns--self "Direct link to Returns : self")

self (makes chaining easier)

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/addLabel()/#details "Direct link to Details")

Adds a label to the timeline, making it easy to mark important positions/times. You can then reference that label in other methods, like `seek("myLabel")` or `add(myTween, "myLabel")` or `reverse("myLabel")`. You could also use the [`timeline.add()`](https://gsap.com/docs/v3/GSAP/Timeline/add()) method to insert a label.

```wasm
//tweens are inserted at and relative to a label's positionlet tl = gsap.timeline();tl.to("#green", {duration: 1, x: 854})  //add blueSpin label 1 second after end of timeline  .add("blueSpin", "+=1")  //add tween at blueSpin label  .to("#blue", {duration: 1, x: 854, rotation: 360}, "blueSpin")  //insert tween 0.5 seconds after blueSpin label  .to("#orange", {duration: 1, x: 854, rotation: 360}, "blueSpin+=0.5");
```

## Positioning labels in a timeline[](https://gsap.com/docs/v3/GSAP/Timeline/addLabel()/#positioning-labels-in-a-timeline "Direct link to Positioning labels in a timeline")

By default, labels are added to the **end** of the timeline but you can use the [position parameter](https://gsap.com/resources/position-parameter) to control precisely where things are placed. It uses a flexible syntax with the following options:

-   **Absolute time** (in seconds) measured from the start of the timeline, as a **number** like `3`
    
    ```sql
    // insert exactly 3 seconds from the start of the timelinetl.addLabel("myLabel", 3);
    ```
    
-   **Label**, like `"someLabel"`. _If the label doesn't exist, it'll be added to the end of the timeline._
    
    ```lua
    // insert at the "someLabel" labeltl.addLabel("myLabel", "someLabel");
    ```
    
-   `"<"` The **start** of previous animation\*\*. _Think of `<` as a pointer back to the start of the previous animation._
    
    ```sql
    // insert at the START of the  previous animationtl.addLabel("myLabel", "<");
    ```
    
-   `">"` - The **end** of the previous animation\*\*. _Think of `>` as a pointer to the end of the previous animation._
    
    ```sql
    // insert at the END of the previous animationtl.addLabel("myLabel", ">");
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

### Position Parameter Interactive Demo[](https://gsap.com/docs/v3/GSAP/Timeline/addLabel()/#position-parameter-interactive-demo "Direct link to Position Parameter Interactive Demo")

#### loading...

Be sure to read our tutorial [Understanding the Position Parameter](https://gsap.com/resources/position-parameter) which includes interactive timeline visualizations and a video.