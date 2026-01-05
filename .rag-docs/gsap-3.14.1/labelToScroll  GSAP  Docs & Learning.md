-   [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
-   methods
-   .labelToScroll()

### .labelToScroll( label:String ) : Number

Converts a timeline label into the associated scroll position (only applicable to ScrollTriggers whose "animation" is a timeline)

#### Parameters

-   #### **label**: String
    
    The label from the ScrollTrigger's timeline.
    

### Returns : Number[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/labelToScroll()/#returns--number "Direct link to Returns : Number")

The scroll position (in px)

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/labelToScroll()/#details "Direct link to Details")

Converts a timeline label into the associated scroll position (only applicable to ScrollTriggers whose "animation" is a timeline). This can be quite convenient if, for example, you want to allow users to scroll directly to a position on the page associated with that timeline label.

```javascript
btn.addEventListener("click", () => {  gsap.to(window, { scrollTo: tl.scrollTrigger.labelToScroll("myLabel") });});
```

[

Previous

.kill()

](https://gsap.com/docs/v3/Plugins/ScrollTrigger/kill())[

Next

.next()

](https://gsap.com/docs/v3/Plugins/ScrollTrigger/next())