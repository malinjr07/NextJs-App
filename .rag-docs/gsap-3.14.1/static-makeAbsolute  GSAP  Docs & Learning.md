### Flip.makeAbsolute( targets:String | Element | Array | NodeList | FlipState ) : Array

Sets all of the provided target elements to `position: absolute` while retaining their current positioning.

#### Parameters

-   #### **targets**: String | Element | Array | NodeList | FlipState
    
    The targets to be given an absolute position while retaining their current position. Can be selector text, an Element, an Array of Elements, or a NodeList.
    

### Returns : Array[](https://gsap.com/docs/v3/Plugins/Flip/static.makeAbsolute()/#returns--array "Direct link to Returns : Array")

An Array of the Elements that were affected

### Details[](https://gsap.com/docs/v3/Plugins/Flip/static.makeAbsolute()/#details "Direct link to Details")

Sets all of the provided target elements to `position: absolute` while retaining their current positioning. This functionality is already built into the standard [Flip.from()](https://gsap.com/docs/v3/Plugins/Flip/static.from()) and [Flip.fit()](https://gsap.com/docs/v3/Plugins/Flip/static.fit()) using the `absolute: true` special property, but this method is exposed in case you'd like to use it independently. You could literally make all the elements in the document position: absolute by running `Flip.makeAbsolute("*")` (not that you'd ever need to do that).