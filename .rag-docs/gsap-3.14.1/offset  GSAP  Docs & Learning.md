-   [ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)
-   methods
-   .offset()

### .offset( target:String | Element, position:String ) : Number

Calculates the numeric offset (scroll position in pixels) that corresponds to when a particular element reaches the specified position like:

#### Parameters

-   #### **target**: String | Element
    
    The target element
    
-   #### **position**: String
    
    The position in a space-delimited form, like `"center center"` or `"top 100px"` where the first value relates to the target element, and the second value relates to the viewport. So `"top 100px"` means _where the top of the target element hits 100px down from the top of the viewport."_
    

### Returns : Number[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/offset()/#returns--number "Direct link to Returns : Number")

The numeric offset (in pixels)

### Details[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/offset()/#details "Direct link to Details")

Calculates the numeric offset (scroll position in pixels) that corresponds to when a particular element reaches the specified position like:

```sql
// when the top of #box1 hits 100px down from the top of the viewportlet offset = smoother.offset("#box1", "top 100px");
```

And then you can scroll there like:

```css
smoother.scrollTop(offset);
```

Or plug it into a tween:

```php
gsap.to(smoother, {  scrollTop: offset,  duration: 1,});
```

[

Previous

.kill()

](https://gsap.com/docs/v3/Plugins/ScrollSmoother/kill())[

Next

.paused()

](https://gsap.com/docs/v3/Plugins/ScrollSmoother/paused())