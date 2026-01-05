Over the years Jack has "whipped together" various GSAP-related helper functions for [community](https://gsap.com/community/) members, so we gathered them into one place for convenience. We'll keep adding relevant helper functions here as we craft them. Enjoy!

#### [Seamlessly loop elements along the x or y axis](https://gsap.com/docs/v3/HelperFunctions/helpers/seamlessLoop)

Like a slider or news ticker, where elements go off one side and then eventually come back around from the other side. This helper function does all the hard work for you

#### [Stop overscroll behavior, even on iOS Safari](https://gsap.com/docs/v3/HelperFunctions/helpers/stopOverscroll)

It should be as simple as setting overscroll-behavior: none in your CSS, but iOS Safari won't cooperate! So here's a function that'll help stop the overscroll behavior:

#### [Hook a Lottie animation up to ScrollTrigger](https://gsap.com/docs/v3/HelperFunctions/helpers/LottieScrollTrigger)

Tie a Lottie animation to the scroll position with this handy function so that as the user scrolls, the animation progresses

#### [addWeightedEases](https://gsap.com/docs/v3/HelperFunctions/helpers/addWeightedEases)

Feed in a ratio between -1 and 1 to any of the standard (non-configurable) eases to make them "weighted" in one direction or the other

#### [Change transformOrigin without a jump](https://gsap.com/docs/v3/HelperFunctions/helpers/alignOrigins)

change transformOrigin dynamically without a jump

#### [anchorsToProgress](https://gsap.com/docs/v3/HelperFunctions/helpers/anchorsToProgress)

Calculate all the progress values for the anchor points on a path so that, for example, you could use DrawSVG to animate point-by-point (requires [MotionPathPlugin](https://gsap.com/docs/v3/Plugins/MotionPathPlugin))

#### [Animating backgroundSize:"cover" or "contain"](https://gsap.com/docs/v3/HelperFunctions/helpers/bgSize)

Animate between \`backgroundSize\` of \`"cover"\` or \`"contain"

#### [blendEases](https://gsap.com/docs/v3/HelperFunctions/helpers/blendEases)

If you need one ease at the start of your animation, and a different one at the end, you can use this function to blend them!

#### [Call a function after viewport resizing stops (debounced)](https://gsap.com/docs/v3/HelperFunctions/helpers/callAfterResize)

"resize" events get dispatched many times while the user is dragging the browser window's edges, so if you run an expensive function on every resize event, it can really bog things down. Here's a function that will wait to call your function until a certain amount of time has elapsed since the user STOPPED resizing the window

#### [Compensated skews](https://gsap.com/docs/v3/HelperFunctions/helpers/compensatedSkew)

This is a special method that you can apply via an onUpdate to make a tween render skews in the old skewType: "compensated" way from GSAP 2. Note that it affects an element's scaleX/scaleY (hence "compensated")! This assumes skews are degree-based, and only works in GSAP 3.

#### [Directional snapping](https://gsap.com/docs/v3/HelperFunctions/helpers/getDirectionalSnapFunc)

Snap to a value in a specified direction - greater or lesser

#### [Estimate where an ease will hit a certain value](https://gsap.com/docs/v3/HelperFunctions/helpers/easeToLinear)

An ease accepts a normalized progress value (0-1) and returns the corresponding eased value, but what if you want to know when that eased value will hit a specific ratio like 0.7? For example, a \`"power2.out"\` ease may hit 0.7 when the linear progress is only around 0.33. This function lets you feed in that 0.7 and get the linear progress value (0.33 in this example)

#### [Simple FLIP](https://gsap.com/docs/v3/HelperFunctions/helpers/FLIP)

If you're shifting things around in the DOM and then you want elements to animate to their new positions, the most full-featured way to handle it is with the [Flip Plugin](https://gsap.com/docs/v3/Plugins/Flip), but if you're only doing basic things you can use this helper function (see the comments at the top to learn how to use it):

#### [Format number with commas and limited decimal places](https://gsap.com/docs/v3/HelperFunctions/helpers/formatNumber)

Take a number like 1000.254145 and format it into a string like "1,000.25".

#### [Find a nested label's time](https://gsap.com/docs/v3/HelperFunctions/helpers/getNestedLabelTime)

Labels are timeline-specific, so you can't tell a timeline to move its playhead to a label that exists in a nested timeline. So here's a helper function that lets you find a nested label and calculate where that lines up on the parent timeline

#### [Get the scroll position associated with an element (ScrollTrigger-aware)](https://gsap.com/docs/v3/HelperFunctions/helpers/getScrollLookup)

This function even takes ScrollTrigger pinning into account in most situations. Feed it your target elements and it'll return a function that you can call later, passing it a specific one of those target elements and it'll return the scroll position. It even adjusts when the viewport resizes (responsive).

#### [Get the scroll position associated with a particular ScrollTriggered animation](https://gsap.com/docs/v3/HelperFunctions/helpers/getScrollPosition)

Perhaps you want to scroll the page to the exact spot where a particular scroll-triggered animation starts (or ends or any progress value) - just feed this helper function your animation (it must have a ScrollTrigger of course) and optionally a progress value (0 is when the animation starts, 0.5 is halfway through, 1 is the end) and it'll return the scroll position which you could feed into a scrollTo tween

#### [Scrub through a canvas image sequence](https://gsap.com/docs/v3/HelperFunctions/helpers/imageSequenceScrub)

Create an Array of image URLs, feed it to this helper function along with a reference to your `<canvas>` object and a ScrollTrigger config object to have it scrub through those, drawing the appropriate one to the canvas.

#### [killChildTweensOf](https://gsap.com/docs/v3/HelperFunctions/helpers/killChildTweensOf)

kill all tweening elements that are children of a given target

#### [SplitText lines in nested elements](https://gsap.com/docs/v3/HelperFunctions/helpers/nestedLinesSplit)

SplitText doesn't natively support splitting nested elements by "lines", but if you really need that we've put together a helper function for it.

#### [pluckRandomFrom](https://gsap.com/docs/v3/HelperFunctions/helpers/pluckRandomFrom)

Randomly pluck values from an array one-by-one until they've all been plucked (almost as if when you pluck one, it's no longer available to be plucked again until ALL of them have been uniquely plucked)

#### [Step-by-step function calls progressively build timeline](https://gsap.com/docs/v3/HelperFunctions/helpers/progressiveBuild)

Maybe you can't pre-build your entire timeline because you need to call individual functions in a sequenced fashion. Perhaps they each change the state of elements, creating an animation that must finish before the next step (function) is called. This helper function lets you organize your code quite easily into a simple sequence of arguments you pass

#### [Change transformOrigin without a jump](https://gsap.com/docs/v3/HelperFunctions/helpers/smoothOriginChange)

change transformOrigin dynamically without a jump by compensating its translation (x/y)

#### [Force GSAP to update while in hidden tab](https://gsap.com/docs/v3/HelperFunctions/helpers/tickGSAPWhileHidden)

Most browsers pause requestAnimationFrame() calls while a browser tab is hidden in order to reduce CPU/battery drain, but if you'd like GSAP to continue to update, you can use this function

#### [Track the playhead direction of any animation](https://gsap.com/docs/v3/HelperFunctions/helpers/trackDirection)

If you find yourself needing an onReverse() callback (which doesn't exist) or a way to get notified when the playhead changes direction, this is a very useful helper function.

#### [Weighted Random](https://gsap.com/docs/v3/HelperFunctions/helpers/weightedRandom)

Have more control over the numbers you pick by providing this function an ease curve of your choice!