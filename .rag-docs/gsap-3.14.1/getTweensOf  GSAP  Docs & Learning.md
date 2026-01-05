### getTweensOf( target:\[Object | Selector text | Array\], nested:Boolean ) : Array

Returns the tweens of a particular object that are inside this timeline.

#### Parameters

-   #### **target**: \[Object | Selector text | Array\]
    
    The target object of the tweens.
    
-   #### **nested**: Boolean
    
    (default = `true`) - Determines whether or not tweens that are inside nested timelines should be returned. If you only want the "top level" tweens and timelines, set this to `false`.
    

### Returns : Array[](https://gsap.com/docs/v3/GSAP/Timeline/getTweensOf()/#returns--array "Direct link to Returns : Array")

An Array of Tween instances.

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/getTweensOf()/#details "Direct link to Details")

Returns the tweens of a particular target that are inside this timeline. You may pass in multiple targets in an array or selector text.

```sql
// Get all tweens of the timeline with the target of ".myClass"tl.getTweensOf(".myClass");// Get all tweens of the timeline with the target of myElem, including nested timelinestl.getTweensOf(myElem, true);
```