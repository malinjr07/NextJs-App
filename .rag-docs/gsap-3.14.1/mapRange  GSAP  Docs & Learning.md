Maps a number's relative placement within one range to the equivalent position in another range. For example, given the range of 0 to 100, **50** would be halfway between so if it were mapped to a range of 0 to 500, it would be **250** (because that's halfway between that range). Think of it like ratios.

Another example would be a range slider that's 200px wide - if you wanted the user to be able to drag the range slider (between 0 and 200) and have it move something across the screen accordingly such that when the range slider is at its max, the object is all the way at the right edge of the screen, and at its minimum it's at the far left edge of the screen, mapRange() is perfect for that. You'd be mapping one range, 0-200, to another range, 0-window.innerWidth.

___

Choose one of the following method signatures - either get a mapped value immediately or omit the `valueToMap` parameter to get a **reusable function** that remembers the ranges so that you can feed in values to map later as many times as you want:

## 1) mapRange(inMin, inMax, outMin, outMax, valueToMap)[](https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()/#1-maprangeinmin-inmax-outmin-outmax-valuetomap "Direct link to 1) mapRange(inMin, inMax, outMin, outMax, valueToMap)")

1.  **inMin** : Number - The lower bound of the initial range to map from
2.  **inMax** : Number - The upper bound of the initial range to map from
3.  **outMin** : Number - The lower bound of the range to map to
4.  **outMax** : Number - The upper bound of the range to map to
5.  **valueToMap** : Number - The value that should be mapped (typically it's between `inMin` and `inMax`).

**Returns**: the mapped number

#### Example[](https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()/#example "Direct link to Example")

```css
//maps 0 in the -10 to 10 range to the same position in the 100 to 200 rangegsap.utils.mapRange(-10, 10, 100, 200, 0); // 150// maps 50 in the range from 0 to 100 to the same position in the range from 0 to 500gsap.utils.mapRange(0, 100, 0, 500, 50); // 250
```

## 2) mapRange(inMin, inMax, outMin, outMax)[](https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()/#2-maprangeinmin-inmax-outmin-outmax "Direct link to 2) mapRange(inMin, inMax, outMin, outMax)")

1.  **inMin** : Number - The lower bound of the initial range to map from
2.  **inMax** : Number - The upper bound of the initial range to map from
3.  **outMin** : Number - The lower bound of the range to map to
4.  **outMax** : Number - The upper bound of the range to map to

**Returns**: a reusable function that accepts 1 parameter - a number to map

If you omit the `valueToMap` (5th) parameter, the utility method will return a **reusable function** that's ready to map any value according to the ranges provided initially. In other words, the returned function remembers the in/out ranges so that it can very quickly and efficiently do the mapping later as many times as you want.

#### Example[](https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()/#example-1 "Direct link to Example")

```cpp
// get a function that will always map between these rangesvar mapper = gsap.utils.mapRange(0, 100, 0, 250); //notice we didn't provide a valueToMap// now we can reuse the function to map any values:console.log(mapper(50)); // 125console.log(mapper(10)); // 25
```

## Tip: combine reusable functions for powerful data transformations![](https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()/#tip-combine-reusable-functions-for-powerful-data-transformations "Direct link to Tip: combine reusable functions for powerful data transformations!")

You can [`pipe()`](https://gsap.com/docs/v3/GSAP/UtilityMethods/pipe()) several reusable functions together to perform multiple tasks on an incoming value, like [clamping](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp()), [mapping](https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()) to another range, [snapping](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()), [interpolating](https://gsap.com/docs/v3/GSAP/UtilityMethods/interpolate()), and [more](https://gsap.com/docs/v3/GSAP/UtilityMethods). For example:

```less
// get a clamping function that will always clamp to a range between 0 and 100var transformer = gsap.utils.pipe(  // clamp between 0 and 100  gsap.utils.clamp(0, 100),  // then map to the corresponding position on the width of the screen  gsap.utils.mapRange(0, 100, 0, window.innerWidth),  // then snap to the closest increment of 20  gsap.utils.snap(20));// now we feed one value in and it gets run through ALL those transformations!:transformer(25.874);
```

### Video demo: combining utility methods[](https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()/#video-demo-combining-utility-methods "Direct link to Video demo: combining utility methods")

Combining utility Methods

<iframe width="560" height="315" src="https://www.youtube.com/embed/NqiF5xIuMd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>