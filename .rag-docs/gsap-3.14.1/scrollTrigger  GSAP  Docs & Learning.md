### scrollTrigger: [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | undefined

A handy way to access the ScrollTrigger associated with a tween. This is only accessible if the tween has a ScrollTrigger.

### Details[](https://gsap.com/docs/v3/GSAP/Tween/scrollTrigger/#details "Direct link to Details")

warning

A "scrollTrigger" property is **only** added to the Timeline or Tween **if** it has a ScrollTrigger.

See the [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) docs for more details

```perl
// add a ScrollTrigger to a Timelinelet tl = gsap.to("#id" {scrollTrigger: {start: "top center"...}});// access the ScrollTrigger to call various methodstl.scrollTrigger.refresh();// ortl.scrollTrigger.kill();
```