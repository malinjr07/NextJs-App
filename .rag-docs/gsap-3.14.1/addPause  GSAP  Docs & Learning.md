### addPause( position:\[String | Number | Label\], callback:Function, params:Array ) : self

Inserts a special callback that pauses playback of the timeline at a particular time or label.

#### Parameters

-   #### **position**: \[String | Number | Label\]
    
    (default = `"+=0"`) - controls the insertion point in the timeline (by default, it's the end of the timeline). See options below, or the [Position Parameter article](https://gsap.com/resources/position-parameter) which has interactive timeline visualizations and a video. If you define a label that doesn't exist yet, it will **automatically be added to the end of the timeline**
    
-   #### **callback**: Function
    
    (default = `null`) - An optional callback that should be called immediately after the timeline is paused.
    
-   #### **params**: Array
    
    (default = `null`) - An optional array of parameters to pass the callback.
    

### Returns : self[](https://gsap.com/docs/v3/GSAP/Timeline/addPause()/#returns--self "Direct link to Returns : self")

self (makes chaining easier)

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/addPause()/#details "Direct link to Details")

Inserts a special callback that pauses playback of the timeline at a particular time or label. This method is more accurate than using a simple callback of your own because it ensures that even if the virtual playhead had moved slightly beyond the pause position, it'll get moved back to precisely the correct position.

Remember, the virtual playhead moves to a new position on each tick (frame) of the core timing mechanism, so it is possible, for example for it to be at 0.99 and then the next render happens at 1.01, so if your callback was at exactly 1 second, the playhead would (in this example) move slightly past where you wanted to pause. Then, if you `reverse()`, it would run into that callback again and get paused almost immediately.

However, if you use the `addPause()` method, it will calibrate things so that when the callback is hit, it'll move the playhead back to **EXACTLY** where it should be. Thus, if you `reverse()` it won't run into the same callback again.

```sql
//insert a pause at exactly 2 seconds into the timelinetimeline.addPause(2);//insert a pause at "yourLabel"timeline.addPause("yourLabel");//insert a pause 3 seconds after "yourLabel" and when that pause occurs, call yourFunctiontimeline.addPause("yourLabel+=3", yourFunction);//insert a pause at exactly 4 seconds and then call yourFunction and pass it 2 parameters, "param1" and "param2"timeline.addPause(4, yourFunction, ["param1", "param2"]);
```

The special callback is just a zero-duration tween that utilizes an `onComplete`, so technically this callback is just like any other, and it is considered a child of the timeline. To remove a pause that was added via `addPause()` use [`timeline.removePause()`](https://gsap.com/docs/v3/GSAP/Timeline/removePause()).

## Positioning a pause in a timeline[](https://gsap.com/docs/v3/GSAP/Timeline/addPause()/#positioning-a-pause-in-a-timeline "Direct link to Positioning a pause in a timeline")

Use the [position parameter](https://gsap.com/resources/position-parameter) to control precisely where the pause is placed. It uses a flexible syntax with the following options:

-   **Absolute time** (in seconds) measured from the start of the timeline, as a **number** like `3`
    
    ```sql
    // insert exactly 3 seconds from the start of the timelinetl.addPause(3);
    ```
    
-   **Label**, like `"someLabel"`. _If the label doesn't exist, it'll be added to the end of the timeline._
    
    ```lua
    // insert at the "someLabel" labeltl.addPause("someLabel");
    ```
    
-   `"<"` The **start** of previous animation\*\*. _Think of `<` as a pointer back to the start of the previous animation._
    
    ```sql
    // insert at the START of the  previous animationtl.addPause("<");
    ```
    
-   `">"` - The **end** of the previous animation\*\*. _Think of `>` as a pointer to the end of the previous animation._
    
    ```sql
    // insert at the END of the previous animationtl.addPause(">");
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

### Position Parameter Interactive Demo[](https://gsap.com/docs/v3/GSAP/Timeline/addPause()/#position-parameter-interactive-demo "Direct link to Position Parameter Interactive Demo")

#### loading...

Be sure to read our tutorial [Understanding the Position Parameter](https://gsap.com/resources/position-parameter/) which includes interactive timeline visualizations and a video.