## Flip.to

### Flip.to( state:FlipState, vars:Object ) : Timeline

Identical to [Flip.from()](https://gsap.com/docs/v3/Plugins/Flip/static.from()) except inverted, so this would animate **to** the provided state (from the current one).

#### Parameters

-   #### **state**: FlipState
    
-   #### **vars**: Object
    
    The vars to use for the from animation. You can use any standard tween special property like `ease`, `duration`, `onComplete`, etc.
    

### Returns : Timeline[](https://gsap.com/docs/v3/Plugins/Flip/static.to()/#returns--timeline "Direct link to Returns : Timeline")

A [timeline](https://gsap.com/docs/v3/GSAP/Timeline) animation

### Details[](https://gsap.com/docs/v3/Plugins/Flip/static.to()/#details "Direct link to Details")

Identical to [Flip.from()](https://gsap.com/docs/v3/Plugins/Flip/static.from()) except inverted, so this would animate **to** the provided state. **CAUTION**: it's almost always best to use [Flip.from()](https://gsap.com/docs/v3/Plugins/Flip/static.from()) because at the end of the animation, the inline styles get reverted/removed. Think of it like a `from()` is gradually **removing** offsets that were added initially to make the element(s) appear in the previous state. But a `Flip.to()` is gradually **adding** those offsets, so if they got removed at the end, things would suddenly jump to the pre-flipped state.

See the [Flip.from()](https://gsap.com/docs/v3/Plugins/Flip/static.from()) docs for all the options and usage information. `Flip.to()` is identical except that the direction is inverted.