-   [ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)
-   methods
-   .scrollTop()

### .scrollTop( position:Number ) : Number | void

Immediately gets/sets the scroll position (in pixels).

#### Parameters

-   #### **position**: Number
    
    The scroll position (in pixels)
    

### Returns : Number | void[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTop()/#returns--number--void "Direct link to Returns : Number | void")

The scrollTop position in pixels (if getter) or void (if setter)

### Details[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTop()/#details "Direct link to Details")

Immediately gets/sets the scroll position (in pixels). If you'd like to scroll to a particular element or position smoothly, see [scrollTo()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTo())

### Getter[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTop()/#getter "Direct link to Getter")

```bash
let scroll = smoother.scrollTop();
```

### Setter[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTop()/#setter "Direct link to Setter")

```css
// go to a scroll position of 500smoother.scrollTop(500);
```

You can use the [offset()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/offset()) method to ascertain the position associated with a particular target element.

When you set the scroll position in this way, it will work even if [paused()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/paused()) is `true`.

[

Previous

.scrollTo()

](https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTo())[

Next

.smooth()

](https://gsap.com/docs/v3/Plugins/ScrollSmoother/smooth())