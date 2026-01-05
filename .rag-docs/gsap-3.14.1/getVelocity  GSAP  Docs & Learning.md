### .getVelocity( ) : Number

Gets the scroll velocity in pixels-per-second

### Returns : Number[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/getVelocity()/#returns--number "Direct link to Returns : Number")

Velocity in pixels-per-second

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/getVelocity()/#details "Direct link to Details")

Gets the scroll velocity in pixels-per-second

## Example[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/getVelocity()/#example "Direct link to Example")

```php
ScrollTrigger.create({  trigger: ".trigger",  start: "top center",  end: "+=500",  onUpdate: (self) => console.log("velocity:", self.getVelocity()),});
```