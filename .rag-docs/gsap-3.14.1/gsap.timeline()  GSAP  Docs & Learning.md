### Returns : [Timeline](https://gsap.com/docs/v3/GSAP/Timeline)[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#returns--timeline "Direct link to returns--timeline")

A [Timeline](https://gsap.com/docs/v3/GSAP/Timeline) is a powerful sequencing tool that acts as a container for tweens and other timelines, making it simple to control them as a whole and precisely manage their timing. Without Timelines, building complex sequences would be far more cumbersome because you'd need to use a `delay` for every animation. For example:

```css
// WITHOUT Timelines (only using delays):gsap.to("#id", { x: 100, duration: 1 });gsap.to("#id", { y: 50, duration: 1, delay: 1 }); //wait 1 secondgsap.to("#id", { opacity: 0, duration: 1, delay: 2 }); //wait 2 seconds
```

What if you wanted to make the first animation longer? You'd need to adjust _every_ delay thereafter. And what if you want to `pause()` the whole sequence or `restart()` it or `reverse()` it on-the-fly or repeat it twice? This could become quite messy, but GSAP's Timelines make it incredibly simple:

```yaml
//WITH Timelines (cleaner, more versatile)var tl = gsap.timeline({repeat: 2, repeatDelay: 1});tl.to("#id", {x: 100, duration: 1});tl.to("#id", {y: 50, duration: 1});tl.to("#id", {opacity: 0, duration: 1});// then we can control the whole thing easily...tl.pause();tl.resume();tl.seek(1.5);tl.reverse();...
```

Now we can adjust the timing without worrying about trickle-down changes to delays! Increase the duration of that first tween and everything automatically adjusts.

## Positioning animations in a timeline[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#positioning-animations-in-a-timeline "Direct link to Positioning animations in a timeline")

The secret to building gorgeous animations with intricate timing is understanding the [position parameter](https://gsap.com/resources/position-parameter) which is used in many various Timeline methods. This one super-flexible parameter controls the placement of your tweens, labels, callbacks, pauses, and even nested timelines. In other words, it tells the timeline exactly where to insert the animation. It typically comes after the **vars** parameter and it has multiple behaviors:

-   Absolute time, like `3` (a number)

```css
//insert exactly 3 seconds from the start of the timelinetl.to(".class", { x: 100 }, 3);
```

-   Relative time, like `"+=1"` or `"-=1"` (relative to the **end** of the timeline)

```lua
//create a gap (insert 1 second after end of timeline)tl.to(".class", { x: 100 }, "+=1");//overlap end by 1 secondtl.to(".class", { y: 100 }, "-=1");
```

-   Label, like `"someLabel"`

```wasm
//insert at the "someLabel" label (if it doesn't exist yet, it gets added to the end of the timeline)tl.to(".class", { x: 100 }, "someLabel");
```

-   Relative to a label, like `"someLabel+=1"`

```bash
//insert 2 seconds after the "someLabel" labeltl.to(".class", { x: 100 }, "someLabel+=2");
```

-   At the **start** of most recently-added animation, `"<"`

```bash
//insert at the START of the most recently added animationtl.to(".class", { x: 100 }, "<");
```

-   At the **end** of the most recently-added animation, `">"`

```bash
//insert at the END of the most recently added animationtl.to(".class", { x: 100 }, ">");
```

-   Relative to the start of the most recently-added animation, like `"<1"`

```bash
//insert 1 second after the START of the most recently added animationtl.to(".class", { x: 100 }, "<1");//insert 2 seconds before the START of the most recently added animation (negative number)tl.to(".class", { y: 100 }, "<-2");
```

-   Relative to the end of the most recently-added animation, like `">1"`

```bash
//insert 1 second after the END of the most recently added animationtl.to(".class", { x: 100, duration: 1 }, ">1");//insert 2 seconds before the END of the most recently added animation (negative number)tl.to(".class", { y: 100, duration: 1 }, ">-2");
```

**Hint**: think of `"<"` and `">"` as pointers to the start or end of the most recently-added animation.

## Special Properties and Callbacks[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#special-properties-and-callbacks "Direct link to Special Properties and Callbacks")

Add any of these to your vars object to give your animation special powers:

```php
gsap.timeline({  onComplete: myFunction,  repeat: 2,  repeatDelay: 1,  yoyo: true,});
```

All of timeline's `vars` properties are described below:

-   #### autoRemoveChildren[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#autoRemoveChildren)
    
    Boolean If `autoRemoveChildren` is set to `true`, as soon as child tweens/timelines complete, they will automatically get killed/removed. This is normally undesireable because it prevents going backwards in time (like if you want to `reverse()` or set the progress lower, etc.). It can, however, improve speed and memory management. The root timelines use `autoRemoveChildren: true`.
    
-   #### callbackScope[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#callbackScope)
    
    Object The scope to be used for all of the callbacks (`onStart`, `onUpdate`, `onComplete`, etc.). The scope is what `this` refers to inside any of the callbacks.
    
-   #### defaults[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#defaults)
    
    Object A simple way to set defaults that get inherited by the child animations. See the "[defaults](https://gsap.com/docs/v3/GSAP/Timeline#setting-defaults)" section for details.
    
-   #### delay[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#delay)
    
    Number Amount of delay in seconds before the animation should begin.
    
-   #### onComplete[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#onComplete)
    
    Function A function that should be called when the animation has completed.
    
-   #### onCompleteParams[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#onCompleteParams)
    
    Array An array of parameters to pass the `onComplete` function. For example, `gsap.timeline({onComplete: myFunction, onCompleteParams: ["param1", "param2"]});`.
    
-   #### onInterrupt[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#onInterrupt)
    
    A function to call when the animation is interrupted min animation. Note that this does not fire if the animation completes normally.
    
-   #### onInterruptParams[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#onInterruptParams)
    
    An Array of parameters to pass the onInterrupt function. For example, `gsap.to(".class", {x:100, onInterrupt:myFunction, onInterruptParams:["param1", "param2"]});`.
    
-   #### onRepeat[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#onRepeat)
    
    Function A function that should be called each time the animation repeats.
    
-   #### onRepeatParams[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#onRepeatParams)
    
    Array An Array of parameters to pass the `onRepeat` function. For example, `gsap.timeline({onRepeat: myFunction, onRepeatParams: ["param1", "param2"]});`.
    
-   #### onReverseComplete[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#onReverseComplete)
    
    Function A function that should be called when the animation has reached its beginning again from the reverse direction. For example, if `reverse()` is called the tween will move back towards its beginning and when its `time` reaches `0`, `onReverseComplete` will be called. This can also happen if the animation is placed in a timeline instance that gets reversed and plays the animation backwards to (or past) the beginning.
    
-   #### onReverseCompleteParams[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#onReverseCompleteParams)
    
    Array An array of parameters to pass the `onReverseComplete` function. For example, `gsap.timeline({onReverseComplete: myFunction, onReverseCompleteParams: ["param1", "param2"]});`.
    
-   #### onStart[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#onStart)
    
    Function A function that should be called when the animation begins (when its `time` changes from `0` to some other value which can happen more than once if the tween is restarted multiple times).
    
-   #### onStartParams[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#onStartParams)
    
    Array An array of parameters to pass the `onStart` function. For example, `gsap.timeline({onStart: myFunction, onStartParams: ["param1", "param2"]});`.
    
-   #### onUpdate[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#onUpdate)
    
    Function A function that should be called every time the animation updates (on every frame while the animation is active).
    
-   #### onUpdateParams[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#onUpdateParams)
    
    Array An array of parameters to pass the `onUpdate` function. For example, `gsap.timeline({onUpdate: myFunction, onUpdateParams: ["param1", "param2"]});`.
    
-   #### paused[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#paused)
    
    Boolean If `true`, the animation will pause itself immediately upon creation.
    
-   #### repeat[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#repeat)
    
    Number Number of times that the animation should repeat after its first iteration. For example, if `repeat` is `1`, the animation will play a total of twice (the initial play plus 1 repeat). To repeat indefinitely, use `-1`. `repeat` should always be an integer.
    
-   #### repeatDelay[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#repeatDelay)
    
    Number Amount of time in seconds between repeats. For example, if `repeat` is `2` and `repeatDelay` is `1`, the animation will play initially, then wait for 1 second before it repeats, then play again, then wait 1 second again before doing its final repeat.
    
-   #### repeatRefresh[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#repeatRefresh)
    
    Setting `repeatRefresh: true` causes a repeating timeline to `invalidate()` all of its child tweens and re-record their starting/ending values internally on each full iteration (not including yoyo's). This is useful when you use dynamic values (relative, random, or function-based). For example, `x: "random(-100, 100)"` would get a new random x value on each repeat. `duration`, `delay`, and `stagger` do **NOT** refresh.
    
-   #### smoothChildTiming[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#smoothChildTiming)
    
    Boolean Controls whether or not child animations are repositioned automatically (changing their `startTime`) in order to maintain smooth playback when timing-related properties are changed on-the-fly. For example, imagine that the timeline’s playhead is on a child tween that is 75% complete, moving element’s left from 0 to 100 and then that tween’s `reverse()` method is called. If `smoothChildTiming` is `false` (the default except for the globalTimeline), the tween would flip in place, keeping its `startTime` consistent. Therefore the playhead of the timeline would now be at the tween’s 25% completion point instead of 75%. See the "[How to timelines work?](https://gsap.com/docs/v3/GSAP/Timeline#mechanics)" section for details.
    
-   #### yoyo[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#yoyo)
    
    Boolean If `true`, every other repeat cycle will run in the opposite direction so that the tween appears to go back and forth (forward then backward). This has no affect on the `reversed` property though. So if `repeat` is `2` and `yoyo` is `false`, it will look like: start - 1 - 2 - 3 - 1 - 2 - 3 - 1 - 2 - 3 - end. But if `yoyo` is `true`, it will look like: start - 1 - 2 - 3 - 3 - 2 - 1 - 1 - 2 - 3 - end.
    

## Setting Defaults[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#setting-defaults "Direct link to Setting Defaults")

Anything in the `defaults` object of a timeline gets inherited by its child animations when they get created, so if you find yourself setting the same `ease` or `duration` (or any value) over and over again, this can help make your code more concise. For example:

```yaml
// WITHOUT defaults (long)var tl = gsap.timeline();tl.to(".class1", { rotation: -270, duration: 1, ease: "elastic" })  .to(".class2", { rotation: -360, duration: 1, ease: "elastic" })  .to(".class3", { rotation: -180, duration: 1, ease: "elastic" });//WITH defaults (shorter)var tl = gsap.timeline({ defaults: { duration: 1, ease: "elastic" } });tl.to(".class1", { rotation: -270 }) //child tweens will inherit the duration and from the parent timeline!  .to(".class2", { rotation: -360 })  .to(".class3", { rotation: -180 });
```

Any defaults you set this way will get pushed into every child tween - it's not limited to a certain subset of properties. Inherited defaults are easily overwritten anytime a property is declared on a child animation.

## Nesting[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#nesting "Direct link to Nesting")

Nest timelines within timelines as deeply as you want. This lets you modularize your code and make it more maintainable. For example, you could build your animation in sections and stitch them together in a master timeline like:

```bash
function intro() {  var tl = gsap.timeline();  //...add animations here...  return tl;}function middle() {  var tl = gsap.timeline();  //...add animations here...  return tl;}function conclusion() {  var tl = gsap.timeline();  //...add animations here...  return tl;}// stitch them together in a master timeline...var master = gsap.timeline();master  .add(intro())  .add(middle(), "+=2") //with a gap of 2 seconds  .add(conclusion(), "-=1"); //overlap by 1 second
```

## Other Timeline Features[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#other-timeline-features "Direct link to Other Timeline Features")

-   Speed up or slow down the entire timeline with its `timeScale()` method. You can even tween it to gradually speed up or slow down the animation smoothly!
    
-   Get or set the progress of the timeline using its `progress()` or `totalProgress()` methods (totalProgress() just includes any repeats). For example, to skip to the halfway point, set `myTimeline.progress(0.5);`.
    
-   Tween the `time()`, `totalTime()`, `progress()`, or `totalProgress()` to fast-forward or rewind the timeline. You could even attach a slider to one of these to give the user the ability to drag forward or backward through the timeline.
    
-   Add `onComplete`, `onStart`, `onUpdate`, `onRepeat` and/or `onReverseComplete` callbacks using the constructor's `vars` object like `var tl = gsap.timeline({onComplete: myFunction});`.
    
-   Kill the tweens of a particular object inside the timeline with `killTweensOf(target)` or get the tweens of an object with `getTweensOf()` or get all the tweens and timelines in the timeline with `getChildren()`.
    
-   Set the timeline to repeat any number of times or indefinitely. You can even set a delay between each repeat cycle and/or cause the repeat cycles to yoyo, appearing to reverse direction every other cycle.
    
-   Get the `currentLabel()` or find labels at various positions in the timeline using `nextLabel()` and `previousLabel()`
    

**Sample code:**

```perl
// create the timeline that repeats 3 times// with 1 second between each repeat and// then call myFunction() when it completesvar tl = gsap.timeline({ repeat: 3, repeatDelay: 1, onComplete: myFunction });// add a tweentl.to(".class", { duration: 1, x: 200, y: 100 });// add another tween 0.5 seconds after the end// of the timeline (makes sequencing easy)tl.to("#id", { duration: 0.8, opacity: 0 }, "+=0.5");// reverse anytimetl.reverse();// Add a "spin" label 3-seconds into the timelinetl.addLabel("spin", 3);// insert a rotation tween at the "spin" label// (you could also define the insertion point as the time instead of a label)tl.to(".class", { duration: 2, rotation: "+=360" }, "spin");// go to the "spin" label and play the timeline from theretl.play("spin");// nest another timeline inside your timeline...var nested = gsap.timeline();nested.to(".class2", { duration: 1, x: 200 });tl.add(nested, "+=3"); //add nested timeline after a 3-second gap
```

## How do timelines work?[](https://gsap.com/docs/v3/GSAP/gsap.timeline()/#mechanics "Direct link to How do timelines work?")

Every animation (Tween and Timeline) is placed on a parent Timeline. In a sense, they all have their own playheads (that's what its "time" refers to, or "totalTime" which is identical except that it includes repeats and repeatDelays) and when the parent's playhead moves to a new position, it updates the childrens' too (unless they're paused).

When a timeline renders at a particular time, it loops through its children and says "okay, you should render as if your playhead is at \_\_\_\_" and if that child is a Timeline with children, it does the same to its children, right on down the line. So the playheads generally remain synchronized.

When you unpause an animation (`resume()` or `play()`), it essentially picks up the playhead and moves it so that its internal playhead is synchronized with wherever the parent's playhead is at that moment, thus things play perfectly smoothly. That is, unless the timeline's `smoothChildTiming` is `false` in which case that child won't move - its `startTime` will remain locked to where it was.

So basically when `smoothChildTiming` is `true`, the engine will rearrange things on the fly to ensure the playheads line up so that playback feels seamless and smooth. The same thing happens when you `reverse()` or alter the `timeScale`, etc. - the animation's startTime shifts automatically. But sometimes you might not want that behavior - that's when `smoothChildTiming: false` is handy on a parent timeline.

One more example: let's say you've got a 10-second tween that's just sitting on the root timeline and you're 2-seconds into the tween. Let's assume it started at exactly 0 on the root to make this easy, and then when it's at 2-seconds, you do `tween.seek(5)`. The playhead of the root isn't affected - it keeps going exactly as it always did, but in order to make that tween jump to 5 seconds and play appropriately, the tween's `startTime` gets changed to -3. That way, the tween's playhead and the root playhead are perfectly aligned.

note

-   You can access GSAP's global timeline via [`gsap.globalTimeline`](https://gsap.com/docs/v3/GSAP/gsap.globalTimeline()) but be careful because if, for example, you pause() or timeScale() it, that affects EVERYTHING including delayedCalls(). You can use [`gsap.exportRoot()`](https://gsap.com/docs/v3/GSAP/gsap.exportRoot()) instead to basically wrap all of the existing animations on the root (optionally excluding delayedCalls) into a new Timeline instance, isolating those from future animations you create. For example, if you have a bunch of animations going on in a game and then the user clicks a button to pop open a modal window that should slow all the game animations to 1/10ths speed...but you want you modal animations to be full-speed, that's the perfect case for exportRoot().