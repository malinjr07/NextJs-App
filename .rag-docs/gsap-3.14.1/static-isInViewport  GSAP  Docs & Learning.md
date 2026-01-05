## ScrollTrigger.isInViewport

### ScrollTrigger.isInViewport( Element:Element | String, proportion:Number, horizontal:Boolean ) : Boolean

Returns `true` if the element is in the viewport. You can optionally specify a minimum proportion, like `ScrollTrigger.isInViewport(element, 0.2)` would only return `true` if at least 20% of the element is in the viewport.

#### Parameters

-   #### **Element**: Element | String
    
    The element or selector text
    
-   #### **proportion**: Number
    
    The minimum proportion of the element that must be in the viewport to return `true`, so 0.2 would mean that at least 20% of the element must be in the viewport in order for the method to return `true`
    
-   #### **horizontal**: Boolean
    
    By default, the vertical position is evaluated but to use the horizontal position instead, set the horizontal parameter to `true`
    

Returns `true` if the element is in the viewport.

You can optionally specify a minimum proportion, so 0.2 would only return `true` if at least 20% of the element is in the viewport:

By default, it checks the **vertical** position but if you'd like to check the _horizontal_ position instead, set the 3rd parameter to `true` like:

```bash
// check horizontal instead of verticalif (ScrollTrigger.isInViewport(element, 0.2, true)) {  // do stuff}
```

#### loading...