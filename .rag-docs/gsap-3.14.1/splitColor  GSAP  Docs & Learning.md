Converts a string-based color value into an array consisting of \[red, green, blue\] (or if an alpha value is required, it'll be in the last spot of a 4-element array). For example, `[255, 0 128, 1]`. You can optionally request HSLA (hue, saturation, lightness, and alpha) values instead by using the 2nd parameter.

`splitColor()` will work with `"rgb()"`, `"rgba()"`, `"hsl()"`, `"hsla()"`, hexadecimal values, or any of the basic named colors like "red", "blue", etc.

An example of a returned value would be `[255, 128, 0]` or \[`255, 102, 153, 0.5]`. Or if you prefer to get HSL-based values, just pass in `true` as the 2nd parameter.

```perl
gsap.utils.splitColor("red"); // [255, 0, 0]gsap.utils.splitColor("#6fb936"); // [111, 185, 54]gsap.utils.splitColor("rgba(204, 153, 51, 0.5)"); // [204, 153, 51, 0.5]// the 2nd parameter indicates we want an HSL value back instead of RGB:gsap.utils.splitColor("#6fb936", true); // [94, 55, 47]
```