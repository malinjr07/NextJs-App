## Flip.fit

### Flip.fit( targetToResize:String | Element, destinationTargetOrState:String | Element | FlipState, vars:Object ) ;

Repositions/resizes one element so that it appears to fit exactly into the same area as another element. Using the `fitChild` special property, you can even scale/reposition an element so that one if its _child_ elements is used for the fitting calculations instead! By default it alters the transforms (x, y, rotation, and skewX) as well as the width and height of the element, but if you set `scale: true` it will use scaleX and scaleY instead of width and height.

#### Parameters

-   #### **targetToResize**: String | Element
    
    The DOM element that should be resized/moved. Can be selector text like `".my-class"` or a reference to the Element itself.
    
-   #### **destinationTargetOrState**: String | Element | FlipState
    
    The DOM element or FlipState that should be fit into.
    
-   #### **vars**: Object
    
    The vars to use for the fit. This can contain standard tweening properties like `ease`, `duration`, `onComplete`, etc. as well as special settings like `absolute`, `fitChild`, `scale`, etc.
    

### Details[](https://gsap.com/docs/v3/Plugins/Flip/static.fit()/#details "Direct link to Details")

Repositions/resizes one element so that it appears to fit exactly into the same area as another element. Using the `fitChild` special property, you can even scale/reposition an element so that one if its _child_ elements is used for the fitting calculations instead! By default it alters the transforms (x, y, rotation, and skewX) as well as the width and height of the element, but if you set `scale: true` it will use scaleX and scaleY instead of width and height.

Fitting will occur instantly unless you set a `duration` in the `vars` object in which case it will return a [gsap.to()](https://gsap.com/docs/v3/GSAP/gsap.to()) tween. In fact, you can define almost any standard GSAP tween property there like `onComplete`, `delay`, `ease`, etc. For example:

```css
// fit ".box1" into the same area in the viewport as ".box2" immediately:Flip.fit('.box1', '.box2');// or animate there instead:Flip.fit('.box1', '.box2', {duration: 1,ease: 'power1.inOut',onComplete: () => console.log('done!')});
```

You can even use a previously-recorded state object from [Flip.getState()](https://gsap.com/docs/v3/Plugins/Flip/static.getState()) as the destination so that the target fits into the same position/size it was at that time!

```cpp
// capture stateconst state = Flip.getState(box1Element);// change state, like we'll put it into a different container:newParent.appendChild(box1Element);// now fit it into where it was previously:Flip.fit(box1Element, state);
```

How cool is that?

The `vars` object (3rd parameter) can define any of the following \[optional\] configuration properties **in addition to any standard tween properties like `duration`, `ease`, `onComplete`, etc.** which are described [elsewhere](https://gsap.com/docs/v3/GSAP/gsap.to()):

| Property |                                                                                                                                                                                                             Description                                                                                                                                                                                                              |
|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| absolute |                                                                                                                                     Boolean - if `true`, the target will have its `position` CSS property set to `absolute`. This can solve layout challenges with flex and grid layouts, for example.                                                                                                                                     |
| fitChild | String | Element - to scale the element so that one of its _child_ elements fits instead, define that child like `fitChild: ".child-class"` (or reference the child Element itself).

#### loading... |
| getVars  | Boolean - if `true`, no fitting will occur, but only a vars object will be returned that contains the necessary information for the proper fitting so that it could be passed, for example, to a tween or used separately. For example, if you just want to figure out what the x, y, scaleX, scaleY, rotation, and skewX would be to properly fit, you could do: `let vars = Flip.fit(".box1", ".box2", {scale: true, getVars: true});` |
|  props   |                                                                                                      String - A comma delimited list of CSS properties (beyond the the standard ones that control position, dimensions, rotation, and skew) that should be changed to match the target's. For example, `"backgroundColor,color"`                                                                                                       |
|  scale   |                                     Boolean - by default, Flip.fit() will affect the `width` and `height` CSS properties to alter the size, but if you'd rather scale the element instead (typically better performance), set `scale: true`. The only exception to this behavior is if you define a `fitChild` in which case it will _always_ behave as if `scale: true` was defined (even if you omit it).                                      |
|  simple  |   Boolean - if `true`, Flip will skip the extra calculations that would be necessary to accommodate rotation/scale/skew in determining positions. It's like telling Flip _"I promise that there aren't any rotated/scaled/skewed containers for the Flipping elements"_ which makes things **faster**. In most cases, the performance difference isn't noticeable, but if you're fitting a _lot_ of elements it can help keep things snappy.   |