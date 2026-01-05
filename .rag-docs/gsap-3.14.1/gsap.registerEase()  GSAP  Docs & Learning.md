Use `gsap.registerEase()` to register your own easing function with GSAP, giving it a name that can be referenced in any animations. These eases generally return values between 0 and 1 but can go outside of that range (like GSAP's elastic ease).

For example:

```bash
gsap.registerEase("myEaseName", function (progress) {  return progress; //linear});//now we can apply the ease in any tween like:gsap.to(".class", { x: 100, ease: "myEaseName" });
```