Quick Start

or via a package manager like npm

```javascript
import { gsap } from "gsap"
```

#### Minimal usage

```yaml
// This is a Tweengsap.to(".box", { rotation: 27, x: 100, duration: 1 });// And this is a Timeline, containing three sequenced tweenslet tl = gsap.timeline();tl.to("#green", {duration: 1, x: 786})  .to("#blue", {duration: 2, x: 786})  .to("#orange", {duration: 1, x: 786})
```

The `gsap` object serves as the access point for most of GSAP's functionality. It's just a generic object with various methods and properties that create and control [Tweens](https://gsap.com/docs/v3/GSAP/Tween) and [Timelines](https://gsap.com/docs/v3/GSAP/Timeline), two of the most important concepts to understand.

Quick Overview

For a quick overview of the GSAP object, check out this video from the ["GSAP 3 Express" course](https://courses.snorkl.tv/courses/gsap-3-express?ref=44f484) by Snorkl.tv - one of the best ways to learn the basics.

<iframe allow="autoplay; fullscreen" allowfullscreen="" frameborder="0" src="https://player.vimeo.com/video/374705626?byline=0&amp;title=0&amp;portrait=0"></iframe>

To get the most out of GSAP, it's crucial that you understand what Tweens and Timelines are:

### What's a Tween?[](https://gsap.com/docs/v3/GSAP/#whats-a-tween "Direct link to What's a Tween?")

A [Tween](https://gsap.com/docs/v3/GSAP/Tween) is what does all the animation work - think of it like a **high-performance property setter**. You feed in targets (the objects you want to animate), a duration, and any properties you want it to animate and then when the Tween's playhead moves to a new position, figures out what the property values should be at that point applies them accordingly.

#### Common methods for creating a Tween:[](https://gsap.com/docs/v3/GSAP/#common-methods-for-creating-a-tween "Direct link to Common methods for creating a Tween:")

-   [gsap.to()](https://gsap.com/docs/v3/GSAP/gsap.to())
-   [gsap.from()](https://gsap.com/docs/v3/GSAP/gsap.from())
-   [gsap.fromTo()](https://gsap.com/docs/v3/GSAP/gsap.fromTo())

For simple animations (no fancy sequencing), the methods above are all you need! For example:

```css
//rotate and move elements with a class of "box" ("x" is a shortcut for a translateX() transform) over the course of 1 second.gsap.to(".box", { rotation: 27, x: 100, duration: 1 });
```

#### loading...

You can do basic sequencing by using the `delay` special property, but Timelines make sequencing and complex choreography much, much easier.

### What's a Timeline?[](https://gsap.com/docs/v3/GSAP/#whats-a-timeline "Direct link to What's a Timeline?")

A [Timeline](https://gsap.com/docs/v3/GSAP/Timeline) is a **container for Tweens.** It's the ultimate sequencing tool that lets you position animations in time wherever you want and then control the whole sequence easily with methods like [pause()](https://gsap.com/docs/v3/GSAP/Timeline/pause()), [play()](https://gsap.com/docs/v3/GSAP/Timeline/play()), [progress()](https://gsap.com/docs/v3/GSAP/Timeline/progress()), [reverse()](https://gsap.com/docs/v3/GSAP/Timeline/reverse()), [timeScale()](https://gsap.com/docs/v3/GSAP/Timeline/timeScale()), etc.

Create as many Timelines as you want. You can even **nest them** which is fantastic for modularizing your animation code! Every animation (Tween and Timeline) gets placed onto a parent timeline (the [globalTimeline](https://gsap.com/docs/v3/GSAP/gsap.globalTimeline()) by default). Moving a Timeline's playhead cascades down through its children so that the playheads stay aligned. A Timeline is purely about grouping things and coordinating time/playheads - it never actually sets properties on targets (Tweens handle that).

```yaml
//all tweens run in direct successionlet tl = gsap.timeline();tl.to("#green", {duration: 1, x: 854})  .to("#blue", {duration: 2, x: 854})  .to("#orange", {duration: 1, x: 854})
```

#### Method for creating a Timeline:[](https://gsap.com/docs/v3/GSAP/#method-for-creating-a-timeline "Direct link to Method for creating a Timeline:")

-   [gsap.timeline()](https://gsap.com/docs/v3/GSAP/gsap.timeline())

GSAP's API lets you control virtually anything on-the-fly, such as the playhead position, the [startTime](https://gsap.com/docs/v3/GSAP/Tween/startTime()) of any child, even play/pause/reverse the timeline or alter the timeScale itself.

## Sequencing[](https://gsap.com/docs/v3/GSAP/#sequencing "Direct link to Sequencing")

First, create a Timeline:

```csharp
var tl = gsap.timeline();
```

Then add a tween using one of the convenience methods - [to()](https://gsap.com/docs/v3/GSAP/Timeline/to()), [from()](https://gsap.com/docs/v3/GSAP/Timeline/from()), or [fromTo()](https://gsap.com/docs/v3/GSAP/Timeline/fromTo()):

```php
tl.to(".box", { duration: 2, x: 100, opacity: 0.5 });
```

Do that as many times as you want. Notice we're calling `.to()` **on the timeline instance** (the variable `tl` in this case), not the `gsap` object. This creates a tween and immediately puts it into that particular Timeline. `gsap.to()`, on the other hand, creates a standalone tween. By default, the animations will be sequenced one-after-the-other. You can even use method chaining to simplify your code like this:

```yaml
//sequenced one-after-the-othertl.to(".box1", { duration: 2, x: 100 }) //notice that there's no semicolon!  .to(".box2", { duration: 1, y: 200 })  .to(".box3", { duration: 3, rotation: 360 });
```

#### loading...

info

The whole GSAP platform is object-oriented and you could create individual tween instances with [gsap.to()](https://gsap.com/docs/v3/GSAP/gsap.to()), for example, and then [timeline.add()](https://gsap.com/docs/v3/GSAP/Timeline/add()) each one but it's just easier to call .to(), .from(), or .fromTo() directly on the Timeline instance to do the same thing in fewer steps.

## Positioning[](https://gsap.com/docs/v3/GSAP/#positioning "Direct link to Positioning")

Define **exactly** where you want your animations to be placed into the timeline by using the optional [position parameter](https://gsap.com/resources/position-parameter/). A number indicates an absolute time (in seconds), or a string with a `"+="` or `"-="` prefix indicates an offset relative to the END of the timeline. For example, `"+=2"` would be 2 seconds after the end, creating a 2-second gap. `"-=2"` would create a 2-second overlap.

```bash
//starts at EXACTLY .5 seconds from the start of the Timeline:let tl = gsap.timeline();tl.to("#green", {duration: 1, x: 854}, .5)  .to("#blue", {duration: 1, x: 854}, "-=0.75") //overlaps by 0.75 seconds  .to("#orange", {duration: 1, x: 854}, "+=1") //adds a 1-second gap before
```

### Labels[](https://gsap.com/docs/v3/GSAP/#labels "Direct link to Labels")

Use labels to mark certain spots on the timeline so that you can place animations there or navigate there during playback.

```wasm
//tweens are inserted at and relative to a label's positionlet tl = gsap.timeline();tl.to("#green", {duration: 1, x: 854})  //add blueSpin label 1 second after end of timeline  .add("blueSpin", "+=1")  //add tween at blueSpin label  .to("#blue", {duration: 1, x: 854, rotation: 360}, "blueSpin")  //insert tween 0.5 seconds after blueSpin label  .to("#orange", {duration: 1, x: 854, rotation: 360}, "blueSpin+=0.5");
```

```css
//add a label at exactly 3 secondstl.addLabel("step2", 3)//then later, we can seek() to that spot:tl.seek("step2");
```

## Control methods[](https://gsap.com/docs/v3/GSAP/#control-methods "Direct link to Control methods")

[Tween](https://gsap.com/docs/v3/GSAP/Tween) and [Timeline](https://gsap.com/docs/v3/GSAP/Timeline) both extend an Animation class that exposes a myriad of useful methods and properties. Here are some of the most frequently used:

```scss
pause()play()progress()restart()resume()reverse()seek()time()duration()timeScale()kill()
```

#### loading...

Reference the Tween or Timeline instance with a variable, and then control it whenever you want:

```bash
//you only need to create a variable if you want to control it later...var tween = gsap.to(...);var tl = gsap.timeline(); //"tl" short for timelinetl.to(...).to(...); //add animations.//now we can control them...tween.pause();tween.timeScale(2); //double speedtl.seek(3); //jump to 3 seconds intl.progress(0.5); //halfway through...
```