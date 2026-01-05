### scrollTrigger: [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | undefined

A handy way to access the ScrollTrigger associated with a timeline. This is only accessible if the timeline has a ScrollTrigger.

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/scrollTrigger/#details "Direct link to Details")

warning

A `scrollTrigger`property is only added to the Timeline or Tween _if_ it has a ScrollTrigger.

See the [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) docs for more details

```cpp
// add a ScrollTrigger to a Timelinelet tl = gsap.timeline({scrollTrigger: {start: "top center"...}});// access the ScrollTrigger to call various methodstl.scrollTrigger.refresh();// ortl.scrollTrigger.kill();
```