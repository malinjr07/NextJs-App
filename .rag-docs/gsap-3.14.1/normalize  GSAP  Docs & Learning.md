Maps a value within a provided range to the corresponding position in the range between 0 and 1. It's the same as [mapRange()](https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()), but with a hard-coded outMin/outMax of 0/1.

___

Choose one of the following method signatures - either get a normalized value immediately or omit the `valueToNormalize` parameter to get a **reusable function** that remembers the initial range so that you can feed in values to normalize accordingly later as many times as you want:

## 1) normalize(minimum, maximum, valueToNormalize)[](https://gsap.com/docs/v3/GSAP/UtilityMethods/normalize()/#1-normalizeminimum-maximum-valuetonormalize "Direct link to 1) normalize(minimum, maximum, valueToNormalize)")

1.  **minimum** : Number - The lower bound of the initial range to map from
2.  **maximum** : Number - The upper bound of the initial range to map from
3.  **valueToNormalize** : Number - The value that should be normalized.

**Returns**: the normalized number

#### Example[](https://gsap.com/docs/v3/GSAP/UtilityMethods/normalize()/#example "Direct link to Example")

```sql
// in the -10 to 10 range, normalize the number 0 (map it to the corresponding position between 0 and 1)gsap.utils.normalize(-10, 10, 0); // 0.5// in the 0 to 100 range, map the number 25gsap.utils.normalize(0, 100, 25); // 0.25
```

## 2) normalize(minimum, maximum)[](https://gsap.com/docs/v3/GSAP/UtilityMethods/normalize()/#2-normalizeminimum-maximum "Direct link to 2) normalize(minimum, maximum)")

1.  **minimum** : Number - The lower bound of the initial range to map from
2.  **maximum** : Number - The upper bound of the initial range to map from

**Returns**: a reusable function that accepts 1 parameter - a value to normalize

If you omit the `valueToNormalize` (3rd) parameter, the utility method will return a **reusable function** that's ready to normalize any value according to the range provided initially. In other words, the returned function remembers the range so that it can very quickly and efficiently do the normalizing later as many times as you want.

#### Example[](https://gsap.com/docs/v3/GSAP/UtilityMethods/normalize()/#example-1 "Direct link to Example")

```cpp
// get a function that will always normalize for a range between 0 and 100var clamper = gsap.utils.normalize(0, 100); // notice we didn't provide a valueToNormalize// now we can reuse the function to normalize any values:console.log(clamper(50)); // 0.5console.log(clamper(10)); // 0.1console.log(clamper(75)); // 0.75
```

## Tip: combine reusable functions for powerful data transformations![](https://gsap.com/docs/v3/GSAP/UtilityMethods/normalize()/#tip-combine-reusable-functions-for-powerful-data-transformations "Direct link to Tip: combine reusable functions for powerful data transformations!")

You can [`pipe()`](https://gsap.com/docs/v3/GSAP/UtilityMethods/pipe()) several reusable functions together to perform multiple tasks on an incoming value, like [clamping](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp()), [mapping](https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()) to another range, [snapping](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()), [interpolating](https://gsap.com/docs/v3/GSAP/UtilityMethods/interpolate()), and [more](https://gsap.com/docs/v3/GSAP/UtilityMethods). For example:

```less
// get a clamping function that will always clamp to a range between 0 and 100var transformer = gsap.utils.pipe(  // clamp between 0 and 100  gsap.utils.clamp(0, 100),  // then map to the corresponding position on the width of the screen  gsap.utils.mapRange(0, 100, 0, window.innerWidth),  // then snap to the closest increment of 20  gsap.utils.snap(20));// now we feed one value in and it gets run through ALL those transformations!:transformer(25.874);
```

### Video demo: combining utility methods[](https://gsap.com/docs/v3/GSAP/UtilityMethods/normalize()/#video-demo-combining-utility-methods "Direct link to Video demo: combining utility methods")

Combining utility Methods

<iframe width="560" height="315" src="https://www.youtube.com/embed/NqiF5xIuMd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>