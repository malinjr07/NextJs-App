### .getVelocity( ) : Number

Returns the current velocity of the smoothed scroll in pixels-per-second

### Details[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/getVelocity()/#details "Direct link to Details")

Returns the current velocity of the smoothed scroll in pixels-per-second. For example:

```lua
ScrollSmoother.create({  onUpdate: (self) => console.log("velocity:", self.getVelocity()),});
```

Another way to write it would be:

```javascript
let smoother = ScrollSmoother.create({...});button.addEventListener("click", () => {  console.log("velocity:", smoother.getVelocity());});
```