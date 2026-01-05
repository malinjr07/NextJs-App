Most easing equations give a smooth, gradual transition between the start and end values, but `RoughEase` provides an easy way to get a rough, jagged effect instead, or you can also get an evenly-spaced back-and-forth movement if you prefer. `RoughEase` is in the EasePack file. Configure the `RoughEase` with any of these optional properties:

```yaml
//use the default valuesgsap.from(element, {duration: 1, opacity: 0, ease: "rough"});//or customize the configurationgsap.to(element, {duration: 2, y: 300, ease: "rough({strength: 3, points: 50, template: strong.inOut, taper: both, randomize: false})" });
```