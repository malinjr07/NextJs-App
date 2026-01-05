### .isActive : Boolean

\[read-only\] Only `true` if the scroll position is between the start and end positions of the ScrollTrigger instance.

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/isActive/#details "Direct link to Details")

\[read-only\] Only `true` if the scroll position is between the start and end positions of the ScrollTrigger instance.

## Example[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/isActive/#example "Direct link to Example")

```php
ScrollTrigger.create({  trigger: ".trigger",  start: "top center",  end: "+=500",  onToggle: (self) => console.log("toggled. active?", self.isActive),});
```