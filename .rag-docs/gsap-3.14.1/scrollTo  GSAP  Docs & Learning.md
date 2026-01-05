### .scrollTo( target:Number | String | Element, smooth:Boolean, position:String ) ;

Scrolls to a particular position or element

#### Parameters

-   #### **target**: Number | String | Element
    
    The target element, or use a number to specify a particular scroll position (pixels). You can use selector text or the element itself, like `"#box1"`
    
-   #### **smooth**: Boolean
    
    If `true`, the normal smoothing will be applied according to how you configured your ScrollSmoother (e.g. `smooth: 1` would take 1 second). Remember that by default, on mobile there is NO smoothing (like `smoothTouch: 0`). Otherwise, it will immediately jump to the position.
    
-   #### **position**: String
    
    You can optionally define a position in a space-delimited form, like `"center center"` or `"top 100px"` where the first value relates to the target element, and the second value relates to the viewport. So `"top 100px"` means _where the top of the target element hits 100px down from the top of the viewport."_
    

### Details[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTo()/#details "Direct link to Details")

Scrolls to a particular target or position. You can specify whether or not it should immediately jump there or apply smoothing as it goes, and you can even specify a position like `"top 100px"` where the first value relates to the target element, and the second relates to the viewport.

## Examples[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTo()/#examples "Direct link to Examples")

when the button is clicked, smoothly go to the spot where the #box1 element hits 100px down from the top of the viewport:

```javascript
let smoother = ScrollSmoother.create({...});button.addEventListener("click", () => smoother.scrollTo("#box1", true, "top 100px"));
```

Or simply jump to where the element hits the top of the viewport immediately:

```bash
smoother.scrollTo("#box1");
```

Or specify a numeric scroll position (in pixels):

### Want to jump straight to that point without animation?[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTo()/#want-to-jump-straight-to-that-point-without-animation "Direct link to Want to jump straight to that point without animation?")

specify false and it'll jump right down.

```bash
smoother.scrollTo(500, false);
```

### Want to customize the animation to that scroll position?[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTo()/#want-to-customize-the-animation-to-that-scroll-position "Direct link to Want to customize the animation to that scroll position?")

Use the [offset()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/offset()) method to find the correct position, and feed it to a GSAP tween like:

```cpp
gsap.to(smoother, {  // don't let it go beyond the maximum scrollable area  scrollTop: Math.min(    ScrollTrigger.maxScroll(window),    smoother.offset("#box1", "top 100px")  ),  duration: 1,});
```

When you set the scroll position in this way, it will work even if [paused()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/paused()) is `true`.