### .previous( ) : ScrollTrigger instance

Returns the previous ScrollTrigger in the refresh order.

### Returns : ScrollTrigger instance[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/previous()/#returns--scrolltrigger-instance "Direct link to Returns : ScrollTrigger instance")

The previous ScrollTrigger in the refresh order

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/previous()/#details "Direct link to Details")

Returns the previous ScrollTrigger in the refresh order. This can be useful in advanced scenarios where you want to base one ScrollTrigger's start/end value on the previous one's:

```lua
ScrollTrigger.create({  start: self => self.previous().end, // start at the end of the previous ScrollTrigger  ...});
```