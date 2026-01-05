## ScrollTrigger.update

### ScrollTrigger.update( )

Checks where the scrollbar is and updates all ScrollTrigger instances' `progress` and `direction` values accordingly, controls the animation (if necessary) and fires the appropriate callbacks.

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.update()/#details "Direct link to Details")

Performs the following actions for **ALL** ScrollTrigger instances:

-   Checks the location of the scrollbar and updates each ScrollTrigger's `progress` and `direction` values accordingly.
-   Controls the linked animation (if necessary).
-   Fires the appropriate callbacks like onEnter, onToggle, onUpdate, etc.

**`ScrollTrigger.update()` does NOT recalculate the start/end positions according to any DOM changes you've made.** That's what [ScrollTrigger.refresh()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()) is for.

Almost _never_. The only time it's useful is if you need to **force** the ScrollTriggers to update their progress/animations but that typically happens **automatically** with every "scroll" event. If you're running into problems with things getting triggered at the wrong places due to DOM changes/resizes, see [ScrollTrigger.refresh()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh())