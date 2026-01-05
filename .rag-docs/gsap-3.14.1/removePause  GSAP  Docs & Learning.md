### removePause( position:\[Number | Label\] ) : self

Removes pauses that were added to a timeline via its `.addPause()` method.

#### Parameters

-   #### **position**: \[Number | Label\]
    
    The time (or label) where the pause should be removed from.
    

### Returns : self[](https://gsap.com/docs/v3/GSAP/Timeline/removePause()/#returns--self "Direct link to Returns : self")

self (makes chaining easier)

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/removePause()/#details "Direct link to Details")

Removes the pause from a specific position which was added to the timeline via [`addPause()`](https://gsap.com/docs/v3/GSAP/Timeline/addPause()).

```php
var tl = gsap.timeline();tl.to(obj, { duration: 1, x: 100 });//added at time of 1tl.addPause();//another animationtl.to(obj, { duration: 1, opacity: 0 });//later on remove the pausetl.removePause(1);
```