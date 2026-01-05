## ScrollTrigger.killAll

### ScrollTrigger.killAll( ) ;

Immediately calls `kill()` on **all** ScrollTriggers (except the main ScrollSmoother one if it exists).

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.killAll()/#details "Direct link to Details")

Immediately calls `kill()` on **all** ScrollTriggers (except the main ScrollSmoother one if it exists). This can be useful when routing in frameworks where you need to clear out the current page and then load a new one without refreshing the window.