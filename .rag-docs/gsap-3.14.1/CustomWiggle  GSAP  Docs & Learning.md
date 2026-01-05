CustomWiggle extends [CustomEase](https://gsap.com/docs/v3/Eases/CustomEase) (which you must include in your project as well), and it lets you set a wiggle amount and type.

#### loading...

How do you control the strength of the wiggle (or how far it goes)? Simply by setting the tween property values themselves. For example, a wiggle to `rotation:30` would be stronger than `rotation:10`. Remember that an ease just controls the ratio of movement toward whatever value you supply for each property in your tween.

```perl
gsap.registerPlugin(CustomEase, CustomWiggle); // register//Create a wiggle with 6 oscillations (default type:"easeOut")CustomWiggle.create("myWiggle", {wiggles: 6});//now use it in an ease. "rotation" will wiggle to 30 and back just as much in the opposite direction, ending where it began.gsap.to(".class", {duration: 2, rotation: 30, ease: "myWiggle"});//Create a 10-wiggle anticipation ease:CustomWiggle.create("funWiggle", {wiggles: 10, type: "anticipate"});gsap.to(".class", {duration: 2, rotation: 30, ease: "funWiggle"});//Alternatively, make sure CustomWiggle is loaded and use GSAP's string ease formatease: "wiggle(15)" //<-- easy!ease: "wiggle({type:anticipate, wiggles:8})" //advanced
```

Wiggling isn't just for "rotation"; you can use it for any property. For example, you could create a swarm effect by using just 2 randomized wiggle tweens on "x" and "y", as [demonstrated here](https://codepen.io/GreenSock/pen/wzkBYZ).