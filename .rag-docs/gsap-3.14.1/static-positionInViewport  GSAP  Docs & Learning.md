## ScrollTrigger.positionInViewport

### ScrollTrigger.positionInViewport( element:Element | String, referencePoint:String | Number, horizontal:Boolean ) : Number

Returns a normalized value representing the element's position in relation to the viewport where 0 is at the top of the viewport, 0.5 is in the center, and 1 is at the bottom. So, for example, if the top of the element is 80% down from the top of the viewport, the following code would return 0.8: `ScrollTrigger.positionInViewport(element, "top");`

#### Parameters

-   #### **element**: Element | String
    
    The element or selector text
    
-   #### **referencePoint**: String | Number
    
    The reference point on the element from which to measure, like "center" or "top" or "bottom" or you can use a number indicating how many pixels from the top/left, so 20 would mean 20 pixels down from the top of the element.
    
-   #### **horizontal**: Boolean
    
    By default, the vertical position is measured but to change to horizontal mode, set horizontal to `true`
    

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.positionInViewport()/#details "Direct link to Details")

Returns a normalized value representing the element's position in relation to the viewport where 0 is at the top of the viewport, 0.5 is in the center, and 1 is at the bottom.

```scss
ScrollTrigger.positionInViewport(element);
```

By default, it uses the center of the element as a reference point but you can control that with the 2nd parameter. Use keywords like `"center"` (the default), `"top"`, or `"bottom"`. Or you can use a number of pixels from the element's top, so `20` would make the reference point 20 pixels down from the top of the element So, for example, if the top of the element is 80% down from the top of the viewport, the following code would return 0.8:

```bash
ScrollTrigger.positionInViewport(element, "top");
```

For the reference point (2nd parameter), .

By default, vertical measurements are used but to switch to horizontal, you can set the 3rd parameter to `true`:

```bash
// horizontal modeScrollTrigger.positionInViewport(element, "center", true);
```

If you just want to check if the element is in the viewport (a Boolean value), see the [ScrollTrigger.isInViewport()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.isInViewport()) method which is a bit cheaper performance-wise.

## Demo[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.positionInViewport()/#demo "Direct link to Demo")

#### loading...