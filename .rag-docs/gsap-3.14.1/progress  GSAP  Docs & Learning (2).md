### progress : Number

\[read-only\] The overall progress of the ScrollTrigger instance where 0 is at the start, 0.5 is in the middle, and 1 is at the end.

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/progress/#details "Direct link to Details")

\[read-only\] The overall progress of the ScrollTrigger instance where 0 is at the start, 0.5 is in the middle, and 1 is at the end.

## Example[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/progress/#example "Direct link to Example")

```php
ScrollTrigger.create({  trigger: ".trigger",  start: "top center",  end: "+=500",  onUpdate: (self) => console.log("progress:", self.progress),});
```