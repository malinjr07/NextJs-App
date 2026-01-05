Snap to a certain increment or to the closest value in an Array. You can optionally limit snapping to only occur within a certain radius/distance values in an array, including 2-dimensional points (objects with "x" and "y" properties) and it factors both dimensions into the radius measurement.

___

Choose one of the following method signatures - either get a snapped value immediately or omit the `valueToSnap` parameter to get a **reusable function** that snaps according to any values you feed in later:

## 1) snap(snapIncrement, valueToSnap)[](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()/#1-snapsnapincrement-valuetosnap "Direct link to 1) snap(snapIncrement, valueToSnap)")

1.  **snapIncrement** : Number - The snapping increment. For example, a value of 5 means the `valueToSnap` would snap to the closest increment of 5.
2.  **valueToSnap** : Number - The ending value. This can be almost any data type, as long as it matches the `startValue`

**Returns**: the snapped value.

#### Example[](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()/#example "Direct link to Example")

```cpp
// with a snapping increment of 10, snap the number 23.5gsap.utils.snap(10, 23.5); // 20// with a snapping increment of 2, snap the number 9.3gsap.utils.snap(2, 9.3); // 10
```

## 2) snap(snapIncrement)[](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()/#2-snapsnapincrement "Direct link to 2) snap(snapIncrement)")

1.  **snapIncrement** : Number - The snapping increment. For example, a value of 5 means the `valueToSnap` would snap to the closest increment of 5.

**Returns**: a reusable function that accepts one parameter - a value to snap

If you omit the `valueToSnap` (2nd) parameter, the utility method will return a **reusable function** that's ready to snap any value you provide later. In other words, the returned function remembers the `snapIncrement` so that it can very quickly and efficiently do the snapping later.

#### Example[](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()/#example-1 "Direct link to Example")

```cpp
// get a function that will always snap to the closest increment of 5var snap = gsap.utils.snap(5); //notice we didn't provide a valueToSnap// now we can reuse the function to snap any values:console.log(snap(0.5)); // 0console.log(snap(4)); // 5console.log(snap(21)); // 20
```

## 3) snap(array, valueToSnap)[](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()/#3-snaparray-valuetosnap "Direct link to 3) snap(array, valueToSnap)")

1.  **array** : Array - An array of values to snap to
2.  **valueToSnap** : Number - A value to snap. The closest value in the `array` will be returned

**Returns**: the snapped value (the closest one from the `array`)

#### Example[](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()/#example-2 "Direct link to Example")

```cpp
// find the closest number in the arraygsap.utils.snap([100, 50, 500], 65); // 50gsap.utils.snap([100, 50, 500], 305); // 500
```

## 4) snap(array)[](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()/#4-snaparray "Direct link to 4) snap(array)")

1.  **array** : Array - An array of values to snap to

**Returns**: a reusable function that accepts one parameter - a value to snap to the closest one in the `array`

If you omit the `valueToSnap` (2nd) parameter, the utility method will return a **reusable function** that's ready to snap any value you provide later. In other words, the returned function remembers the `array` so that it can very quickly and efficiently do the snapping (find the closest value in the Array) later.

#### Example[](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()/#example-3 "Direct link to Example")

```cpp
// get a reusable function that will snap to the closest value in the provided arrayvar snap = gsap.utils.snap([100, 50, 500]); //notice we didn't provide a valueToSnap// now we can reuse the function to snap any values:console.log(snap(65)); // 50console.log(snap(415)); // 500
```

## 5) snap(objectWithRadius, valueToSnap)[](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()/#5-snapobjectwithradius-valuetosnap "Direct link to 5) snap(objectWithRadius, valueToSnap)")

1.  **objectWithRadius** : Object - An object with numeric `radius` property and either a `values` Array from which to choose like `{values: [0,20,60], radius: 5}`**or** an `increment` like `{increment: 500, radius: 150}`. If you provide an array, the values can be numbers or objects with "x" and "y" properties, like 2D points.
2.  **valueToSnap** : Number | Object - A value to snap (a number or an object with "x" and "y" properties). If it is close enough to the increment or one of the numbers in the `values` array (within the provided radius), it will be snapped. Otherwise, the value will be returned unchanged.

**Returns**: the snapped value. If it is close enough to the increment or one of the numbers/objects in the `values` Array (within the provided radius) it will be snapped, meaning that number/object from the array is returned. Otherwise, the original value will be returned unchanged.

#### Example[](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()/#example-4 "Direct link to Example")

```yaml
// snapping only occurs when the provided value is within a radius of 20 from one of the values in the arraygsap.utils.snap({ values: [0, 100, 300], radius: 20 }, 30.5); // 30.5 (because it's not within 20 of any values)// this will snap because it's within the radius:gsap.utils.snap({ values: [0, 100, 300], radius: 20 }, 85); // 100// also works with points (objects with "x" and "y" properties):var point = { x: 8, y: 8 };gsap.utils.snap(  {    values: [      { x: 0, y: 0 },      { x: 10, y: 10 },      { x: 20, y: 20 },    ],    radius: 5,  },  point); // {x:10, y:10}// snapping only occurs when the provided value is within a radius of 150 from any increment of 500gsap.utils.snap({ increment: 500, radius: 150 }, 975); // 1000 (because it's within 150 of an increment of 500)
```

## 6) snap(objectWithRadius)[](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()/#6-snapobjectwithradius "Direct link to 6) snap(objectWithRadius)")

1.  **objectWithRadius** : Object - An object with numeric `radius` property and either a `values` Array from which to choose like `{values: [0,20,60], radius: 5}`**or** an `increment` like `{increment: 500, radius: 150}`. If you provide an array, the values can be numbers or objects with "x" and "y" properties, like 2D points.

**Returns**: a reusable function that accepts one parameter - a value to snap to the closest increment or value in the `array`, depending which was provided (it only snaps when it's within the radius provided).

If you omit the `valueToSnap` (2nd) parameter, the utility method will return a **reusable function** that's ready to snap based on any value you provide later. In other words, the returned function remembers the `objectWithRadius` so that it can very quickly and efficiently do the snapping (find the closest value in the Array or increment, within the radius if possible) later.

#### Example[](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()/#example-5 "Direct link to Example")

```yaml
// get a reusable function that will snap only when the provided value is within a radius of 20 from one of the values in the arrayvar snap = gsap.utils.snap({ values: [0, 100, 300], radius: 20 }); // notice we didn't provide a valueToSnap// now we can reuse the function to snap any values:console.log(snap(50)); // 50 (not within radius)console.log(snap(86)); // 100 (within radius)console.log(snap(315)); // 300 (within radius)// also works with points (objects with "x" and "y" properties):var snap = gsap.utils.snap({  values: [    { x: 0, y: 0 },    { x: 10, y: 10 },    { x: 20, y: 20 },  ],  radius: 5,});// now we can reuse the function to snap points:console.log(snap({ x: 8, y: 8 })); // {x:10, y:10} (within radius)console.log(snap({ x: 40, y: 40 })); // {x:40, y:40} (outside radius)console.log(snap({ x: -5, y: -10 })); // {x:-5, y:-10} (outside radius)// or a simple increment:var snap = gsap.utils.snap({ increment: 500, radius: 150 }); // notice we didn't provide a valueToSnap// now we can reuse the function to snap any values:console.log(snap(310)); // 310 (not within radius)console.log(snap(480)); // 500 (within radius)console.log(snap(610)); // 500 (within radius)
```

## Tip: combine reusable functions for powerful data transformations![](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()/#tip-combine-reusable-functions-for-powerful-data-transformations "Direct link to Tip: combine reusable functions for powerful data transformations!")

You can [`pipe()`](https://gsap.com/docs/v3/GSAP/UtilityMethods/pipe()) several reusable functions together to perform multiple tasks on an incoming value, like [clamping](https://gsap.com/docs/v3/GSAP/UtilityMethods/clamp()), [mapping](https://gsap.com/docs/v3/GSAP/UtilityMethods/mapRange()) to another range, [snapping](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()), [interpolating](https://gsap.com/docs/v3/GSAP/UtilityMethods/interpolate()), and [more](https://gsap.com/docs/v3/GSAP/UtilityMethods). For example:

```sql
// get a clamping function that will always clamp to a range between 0 and 100var colorizer = gsap.utils.pipe(  // clamp between 0 and 100  gsap.utils.clamp(0, 100),  // normalize to a value between 0 and 1  gsap.utils.normalize(0, 100),  // then interpolate between red and blue  gsap.utils.interpolate("red", "blue"));// now we feed one value in and it gets run through ALL those transformations!:colorizer(25.874);
```

### Video demo: combining utility methods[](https://gsap.com/docs/v3/GSAP/UtilityMethods/snap()/#video-demo-combining-utility-methods "Direct link to Video demo: combining utility methods")

Combining utility Methods

<iframe width="560" height="315" src="https://www.youtube.com/embed/NqiF5xIuMd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>