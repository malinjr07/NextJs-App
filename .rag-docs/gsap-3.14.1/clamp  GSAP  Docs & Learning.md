Clamps a number between a given minimum and maximum. If the number you provide is less than the minimum, it will return the minimum. If it's greater than the maximum, it returns the maximum. If it's between the minimum and maximum, it returns the number unchanged.

___

#### loading...

Choose one of the following method signatures - either get a clamped value immediately or omit the `valueToClamp` parameter to get a **reusable function** that remembers the minimum/maximum so that you can feed in values to clamp later as many times as you want:

## 1) clamp(minimum, maximum, valueToClamp)[](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp()/#1-clampminimum-maximum-valuetoclamp "Direct link to 1) clamp(minimum, maximum, valueToClamp)")

1.  **minimum** : Number - The minimum value
2.  **maximum** : Number - The maximum value
3.  **valueToClamp** : Number - The value that should be clamped between the first two values.

**Returns**: the clamped number

#### Example[](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp()/#example "Direct link to Example")

```sql
// set the clamping range to between 0 and 100, and clamp 105gsap.utils.clamp(0, 100, 105); // returns 100// in the same range, clamp -50gsap.utils.clamp(0, 100, -50); // returns 0// and clamp 20gsap.utils.clamp(0, 100, 20); // returns 20
```

## 2) clamp(minimum, maximum)[](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp()/#2-clampminimum-maximum "Direct link to 2) clamp(minimum, maximum)")

1.  **minimum** : Number - The minimum value
2.  **maximum** : Number - The maximum value

**Returns**: a reusable function that accepts 1 parameter - a value to clamp

If you omit the `valueToClamp` (3rd) parameter, the utility method will return a **reusable function** that's ready to clamp any value according to the minimum/maximum values provided initially. In other words, the returned function remembers the minimum and maximum values so that it can very quickly and efficiently do the clamping later as many times as you want.

#### Example[](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp()/#example-1 "Direct link to Example")

```cpp
// get a clamping function that will always clamp to a range between 0 and 100var clamper = gsap.utils.clamp(0, 100); // notice we didn't provide a valueToClamp// now we can reuse the function to clamp any values:console.log(clamper(105)); // 100console.log(clamper(-50)); // 0console.log(clamper(20)); // 20
```

## Tip: combine reusable functions for powerful data transformations![](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp()/#tip-combine-reusable-functions-for-powerful-data-transformations "Direct link to Tip: combine reusable functions for powerful data transformations!")

You can [`pipe()`](https://gsap.com/docs/v3/GSAP/UtilityMethods/pipe()) several reusable functions together to perform multiple tasks on an incoming value, like [clamping](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp()), [mapping](https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()) to another range, [snapping](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()), [interpolating](https://gsap.com/docs/v3/GSAP/UtilityMethods/interpolate()), and [more](https://gsap.com/docs/v3/GSAP/UtilityMethods). For example:

```less
// get a clamping function that will always clamp to a range between 0 and 100var transformer = gsap.utils.pipe(  // clamp between 0 and 100  gsap.utils.clamp(0, 100),  // then map to the corresponding position on the width of the screen  gsap.utils.mapRange(0, 100, 0, window.innerWidth),  // then snap to the closest increment of 20  gsap.utils.snap(20));// now we feed one value in and it gets run through ALL those transformations!:transformer(25.874);
```