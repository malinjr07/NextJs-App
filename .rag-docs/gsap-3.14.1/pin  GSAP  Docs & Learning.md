### .pin : Element | undefined

\[read-only\] The pin element (if one was defined). If selector text was used, like ".pin", the `pin` will be the element itself (not selector text)

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/pin/#details "Direct link to Details")

\[read-only\] The pin element (if one was defined). If selector text was used, like ".pin", the `pin` will be the element itself (not selector text)

## Example[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/pin/#example "Direct link to Example")

```php
let st = ScrollTrigger.create({  trigger: ".trigger",  pin: ".pin",  start: "top center",  end: "+=500",});console.log(st.pin); // pin element (not selector text)
```