-   [ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)
-   methods
-   .paused()

### .paused( pause:Boolean ) : Boolean | self

Gets/Sets the paused state - if `true`, nothing will scroll (except via [scrollTop()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTop()) or [scrollTo()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTo()) on this instance).

#### Parameters

-   #### **pause**: Boolean
    
    If `true`, it will immediately stop scrolling. If `false`, it will resume.
    

### Details[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/paused()/#details "Direct link to Details")

Gets/Sets the paused state - if `true`, nothing will scroll (except via [scrollTop()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTop()) or [scrollTo()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTo()) on this instance).

Pausing immediately stops movement and prevents the user from even moving the scrollbar.

```perl
// settersmoother.paused(true);// getterif (!smoother.paused()) {  // do stuff...}
```

You could toggle, for example, like this:

```javascript
document.querySelector("#toggle").addEventListener("click", () => {  // toggle!  smoother.paused(!smoother.paused());});
```

[

Previous

.offset()

](https://gsap.com/docs/v3/Plugins/ScrollSmoother/offset())[

Next

.scrollTo()

](https://gsap.com/docs/v3/Plugins/ScrollSmoother/scrollTo())