-   [Flip](https://gsap.com/docs/v3/Plugins/Flip/)
-   methods
-   Flip.killFlipsOf()

## Flip.killFlipsOf

### Flip.killFlipsOf( targets:String | Array | NodeList | Element, complete:boolean ) ;

Immediately kills the Flip animation associated with any of the targets provided.

#### Parameters

-   #### **targets**: String | Array | NodeList | Element
    
    The targets whose Flip animations should be killed. It can be selector text, an Array, Element, or NodeList.
    
-   #### **complete**: boolean
    
    If `false`, the flip animation(s) will be forced to completion rather than just stopped.
    

### Details[](https://gsap.com/docs/v3/Plugins/Flip/static.killFlipsOf()/#details "Direct link to Details")

Immediately kills the Flip animation associated with any of the targets provided. It will also force them to completion unless the 2nd parameter is explicitly set to `false`.

```bash
Flip.killFlipsOf(".box, .container");
```

[

Previous

Flip.isFlipping()

](https://gsap.com/docs/v3/Plugins/Flip/static.isFlipping())[

Next

Flip.makeAbsolute()

](https://gsap.com/docs/v3/Plugins/Flip/static.makeAbsolute())