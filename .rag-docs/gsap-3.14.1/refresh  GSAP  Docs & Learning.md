### .refresh()

Forces the ScrollTrigger instance to re-calculate its start and end values (the scroll positions where it'll be activated).

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/refresh()/#details "Direct link to Details")

Forces the ScrollTrigger instance to re-calculate its `start` and `end` values (the scroll positions where it'll be activated).

note

There's a static [ScrollTrigger.refresh()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()) that forces **ALL** ScrollTriggers to recalculate their positions and it's much more common to call that method to ensure everything is recalculated in the order they were created. That can be critical because ScrollTriggers further down on the page could be affected by pins further up on the page.

Timelines are unique because when you create one with a ScrollTrigger, no animations have been added yet (and those may affect the start/end positions), so ScrollTrigger waits for one tick before calling its `refresh()`. There's no way for it to automatically know when you've added the last animation to the timeline, hence the need for the one-tick delay.

However, if the timeline's ScrollTrigger performs pinning, it could affect all the ScrollTriggers further down on the page. For example, if it pins an element for 500px (assuming `pinSpacing` isn't `false`), all the subsequent ScrollTriggers would need their `start`/`end` values increased by 500px. If you then create ScrollTriggers that aren't in timelines, their `start`/`end` values will be calculated right away (before the previous timeline's scrollTrigger...because of the 1-tick delay), so they won't factor in the pinning offset.

This can easily be solved by either manually calling `refresh()` on the timeline after you're done adding all the animations to it (and **BEFORE** you create subsequent ScrollTriggers further down the page) or simply call the static [ScrollTrigger.refresh()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()) method after you're done creating everything.

You can get the ScrollTrigger instance associated with a particular animation via its `scrollTrigger` property:

```perl
// create a timeline with a ScrollTriggerconst tl = gsap.timeline({ scrollTrigger: {...}});// after adding all animations to that timeline, we can manually force it to calculate its start/end (on just that instance):tl.scrollTrigger.refresh();// or cause ALL ScrollTrigger instances to refresh using the static method:ScrollTrigger.refresh();
```

info

You can pass true to `ScrollTrigger.refresh(true)` to have it do a "safe" refresh, meaning that if the page is in the middle of scrolling, it'll wait until it's done before doing the refresh. That way, it won't kill an in-progress momentum scroll