## Flip.getState

### Flip.getState( targets:String | Element | Array, vars:Object ) : Object

Captures information about the current state of the `targets` so that they can be Flipped later. By default, this information includes the dimensions, rotation, skew, opacity, and the position of the targets in the viewport. Other properties can be captured by configuring the `vars` parameter.

#### Parameters

-   #### **targets**: String | Element | Array
    
    The targets that you want to Flip. This can be selector text like `".my-class"` or an Element or an Array of Elements or an Array of selector text.
    
-   #### **vars**: Object
    
    (optional) A configuration object that contain properties like `props`, `simple`, `kill`, or `batch`.
    

Captures information about the current state of the targets so that they can be Flipped later. By default, this information includes the dimensions, rotation, skew, opacity, and the position of the targets in the viewport. If there are any in-progress flip animations that affect any of the targets, they will be forced to completion so that the final inline styles are recorded properly. But other than completing any in-progress flip animations, `getState()` doesn't alter anything; it's purely for reading/saving state-related information.

```perl
// capture stateconst state = Flip.getState(".details, .full-screen");// now alter the state by toggling a class:detailsElement.classList.toggle("active");// now do a "Flip" animation from the previous state to the new one:Flip.from(state, {  duration: 1,  ease: "power1.inOut",  absolute: true,});
```

The `Flip.getState()` vars object (2nd parameter) can contain any of the following optional properties:

```bash
// capture stateconst state = Flip.getState(".details, .full-screen", {  props: "backgroundColor,color",  simple: true,});
```