### .direction : Number

\[read-only\] Reflects the moment-by-moment direction of scrolling where `1` is forward and `-1` is backward.

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/direction/#details "Direct link to Details")

\[read-only\] Reflects the moment-by-moment direction of scrolling where `1` is forward and `-1` is backward.

## Example[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/direction/#example "Direct link to Example")

```php
ScrollTrigger.create({  trigger: ".trigger",  start: "top center",  end: "+=500",  onUpdate: (self) => console.log("direction:", self.direction),});
```