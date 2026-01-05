### Returns : \*[](https://gsap.com/docs/v3/GSAP/gsap.getProperty()/#returns-- "Direct link to Returns : *")

Returns the value of the property requested as a number (if possible) unless you specify a unit in which case it will be added to the number, making it a string. Returns `null` if it doesn't exist.

```perl
gsap.getProperty("#id", "x"); // 20gsap.getProperty("#id", "x", "px"); // "20px"gsap.getProperty("#id", "backgroundColor"); // "rgb(255, 128, 0)"
```

### Details[](https://gsap.com/docs/v3/GSAP/gsap.getProperty()/#details "Direct link to Details")

`getProperty()` provides an easy way to get the current value of any property and if it's a DOM element, you can even have it convert into a particular unit! For DOM elements, it will check the following properties in this order (and return it as soon as one is found): the element's inline CSS, the element's `.getComputedStyle()` CSS, a property on the element itself like (`element.property`), an attribute on the element (like `element.getAttribute(property)`). Returns `null` if it doesn't exist.

If you omit the unit parameter, it will return a **NUMBER** (at least for simple values where `parseFloat()` returns a number). For example, a "top" or "left" or "x" property that's technically "20px" would be returned as 20 (no unit suffix) because it's so common to need to deal with numbers in animation. In practical use, it would be annoying to get values like "20px" back from getProperty() and have to manually wrap it in `parseFloat()`. But again, if you want the unit included, just pass in that unit like `gsap.getProperty("#element", "x", "px")` and it will return a string accordingly.

### Examples:[](https://gsap.com/docs/v3/GSAP/gsap.getProperty()/#examples "Direct link to Examples:")

```sql
let w = gsap.getProperty("#id", "width"); //you can use selector textlet bgColor = gsap.getProperty(element, "backgroundColor");// convert into a specific unit, like emlet emWidth = gsap.getProperty(element, "width", "em");
```

## Reusable getter function[](https://gsap.com/docs/v3/GSAP/gsap.getProperty()/#reusable-getter-function "Direct link to Reusable getter function")

If you omit the `property` parameter, `gsap.getProperty()` will return a getter function that you can reuse to grab properties of that target object:

```objectivec
let getter = gsap.getProperty("#id");var x = getter("x"),  y = getter("y", "em"); //in em units
```