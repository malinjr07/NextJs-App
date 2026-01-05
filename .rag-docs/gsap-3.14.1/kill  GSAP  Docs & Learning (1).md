### kill( ) : Timeline

Immediately kills the timeline and removes it from its parent timeline, stopping its animation.

### Returns : Timeline[](https://gsap.com/docs/v3/GSAP/Timeline/kill()/#returns--timeline "Direct link to Returns : Timeline")

Self (for chaining)

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/kill()/#details "Direct link to Details")

Immediately stops the animation, removing it from its parent timeline, and releasing it for garbage collection. **Note**: don't kill() an animation if you want to use it again later - you could pause() it instead if you want to reuse it.

```cpp
// kill the timelinetl.kill();// set to null so the reference is removedtl = null;
```