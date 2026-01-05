-   [Timeline](https://gsap.com/docs/v3/GSAP/Timeline)
-   methods
-   .killTweensOf()

### killTweensOf( targets:Selector text | Array | Object, props:String, onlyActive:Boolean ) : Timeline

Kills all of the tweens inside this timeline that affect the provided `targets`. You can optionally specify specific properties that you want killed.

#### Parameters

-   #### **targets**: Selector text | Array | Object
    
    The target object(s) whose tweens should be killed.
    
-   #### **props**: String
    
    A comma-delimited list of property names to kill (optional). If null, all properties will be killed.
    
-   #### **onlyActive**: Boolean
    
    If `true`, only active (in-progress) tweens will be affected.
    

### Returns : Timeline[](https://gsap.com/docs/v3/GSAP/Timeline/killTweensOf()/#returns--timeline "Direct link to Returns : Timeline")

self (for easy chaining)

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/killTweensOf()/#details "Direct link to Details")

Kills all of the tweens inside this timeline that affect the provided `targets`. You can optionally specify specific properties that you want killed. For example:

```perl
// kills all the tweens of elements with the class of "box"tl.killTweensOf(".box");// kills only animations of "x" and "y" properties of elements with the class of "box"tl.killTweensOf(".box", "x,y");
```

[

Previous

.kill()

](https://gsap.com/docs/v3/GSAP/Timeline/kill())[

Next

.nextLabel()

](https://gsap.com/docs/v3/GSAP/Timeline/nextLabel())