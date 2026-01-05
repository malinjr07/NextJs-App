### then( callback:Function ) : Promise

Returns a promise so that you can uses promises to track when a tween or timeline is complete.

#### Parameters

-   #### **callback**: Function
    
    The function that you want to handle the Tween's promise that is generated.
    

### Returns : Promise[](https://gsap.com/docs/v3/GSAP/Tween/then()/#returns--promise "Direct link to Returns : Promise")

Returns a promise so that you can uses promises to track when a tween or timeline is complete.

### Details[](https://gsap.com/docs/v3/GSAP/Tween/then()/#details "Direct link to Details")

Some people prefer to use a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) instead of an `onComplete` callback - that's exactly what `then()` is for. It returns a `Promise` that will get resolved when the animation completes.

```php
gsap.to(".class", {duration: 1, x: 100}).then(yourFunction).then(...);
```