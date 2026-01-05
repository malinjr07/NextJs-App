Utilities for controlling the wrapping of content around an element.

## [Examples](https://tailwindcss.com/docs/float#examples)

### [Floating elements to the right](https://tailwindcss.com/docs/float#floating-elements-to-the-right)

Use the `float-right` utility to float an element to the right of its container:

```php-template
<article>  <img class="float-right ..." src="/img/mountains.jpg" />  <p>Maybe we can live without libraries, people like you and me. ...</p></article>
```

### [Floating elements to the left](https://tailwindcss.com/docs/float#floating-elements-to-the-left)

Use the `float-left` utility to float an element to the left of its container:

```php-template
<article>  <img class="float-left ..." src="/img/mountains.jpg" />  <p>Maybe we can live without libraries, people like you and me. ...</p></article>
```

### [Using logical properties](https://tailwindcss.com/docs/float#using-logical-properties)

Use the `float-start` and `float-end` utilities, which use [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts) to map to either the left or right side based on the text direction:

```php-template
<article>  <img class="float-start ..." src="/img/mountains.jpg" />  <p>Maybe we can live without libraries, people like you and me. ...</p></article><article dir="rtl">  <img class="float-start ..." src="/img/mountains.jpg" />  <p>... ربما يمكننا العيش بدون مكتبات، أشخاص مثلي ومثلك. ربما. بالتأكيد</p></article>
```

### [Disabling a float](https://tailwindcss.com/docs/float#disabling-a-float)

Use the `float-none` utility to reset any floats that are applied to an element:

```php-template
<article>  <img class="float-none ..." src="/img/mountains.jpg" />  <p>Maybe we can live without libraries, people like you and me. ...</p></article>
```

### [Responsive design](https://tailwindcss.com/docs/float#responsive-design)

Prefix a `float` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```cpp
<img class="float-right md:float-left" src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).