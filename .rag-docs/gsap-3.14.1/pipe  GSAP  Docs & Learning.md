`pipe()` basically strings together multiple function calls, passing the result from one to the next. Instead of having to manually chain and pass one's return value to the next's parameter, `pipe()` can do it for you. For example:

```lua
// without pipe()var value1 = func1(input);var value2 = func2(value1);var output = func3(value2);// or multi-level wrapping (awkward)var output = func1(func2(func3(input)));// cleaner with pipe()var transfrom = gsap.utils.pipe(func1, func2, func3);var output = transform(input);
```

Pass as many **functions** as you want to `pipe()` and they'll be called in that order, with the return value of each being passed to the next.

You can [`pipe()`](https://gsap.com/docs/v3/GSAP/UtilityMethods/pipe()) several reusable functions together to perform multiple tasks on an incoming value, like [clamping](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp()), [mapping](https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()) to another range, [snapping](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()), [interpolating](https://gsap.com/docs/v3/GSAP/UtilityMethods/interpolate()), and [more](https://gsap.com/docs/v3/GSAP/UtilityMethods). For example:

```less
// get a clamping function that will always clamp to a range between 0 and 100var transformer = gsap.utils.pipe(  // clamp between 0 and 100  gsap.utils.clamp(0, 100),  // then map to the corresponding position on the width of the screen  gsap.utils.mapRange(0, 100, 0, window.innerWidth),  // then snap to the closest increment of 20  gsap.utils.snap(20));// now we feed one value in and it gets run through ALL those transformations!:transformer(25.874);
```