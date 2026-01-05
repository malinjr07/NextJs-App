Utilities for controlling the wrapping of content around an element.

## [Examples](https://tailwindcss.com/docs/clear#examples)

### [Clearing left](https://tailwindcss.com/docs/clear#clearing-left)

Use the `clear-left` utility to position an element below any preceding left-floated elements:

```php-template
<article>  <img class="float-left ..." src="/img/snow-mountains.jpg" />  <img class="float-right ..." src="/img/green-mountains.jpg" />  <p class="clear-left ...">Maybe we can live without libraries...</p></article>
```

### [Clearing right](https://tailwindcss.com/docs/clear#clearing-right)

Use the `clear-right` utility to position an element below any preceding right-floated elements:

```php-template
<article>  <img class="float-left ..." src="/img/green-mountains.jpg" />  <img class="float-right ..." src="/img/snow-mountains.jpg" />  <p class="clear-right ...">Maybe we can live without libraries...</p></article>
```

### [Clearing all](https://tailwindcss.com/docs/clear#clearing-all)

Use the `clear-both` utility to position an element below all preceding floated elements:

```php-template
<article>  <img class="float-left ..." src="/img/snow-mountains.jpg" />  <img class="float-right ..." src="/img/green-mountains.jpg" />  <p class="clear-both ...">Maybe we can live without libraries...</p></article>
```

### [Using logical properties](https://tailwindcss.com/docs/clear#using-logical-properties)

Use the `clear-start` and `clear-end` utilities, which use [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts) to map to either the left or right side based on the text direction:

```php-template
<article dir="rtl">  <img class="float-left ..." src="/img/green-mountains.jpg" />  <img class="float-right ..." src="/img/green-mountains.jpg" />  <p class="clear-end ...">...ربما يمكننا العيش بدون مكتبات،</p></article>
```

### [Disabling clears](https://tailwindcss.com/docs/clear#disabling-clears)

Use the `clear-none` utility to reset any clears that are applied to an element:

```php-template
<article>  <img class="float-left ..." src="/img/green-mountains.jpg" />  <img class="float-right ..." src="/img/snow-mountains.jpg" />  <p class="clear-none ...">Maybe we can live without libraries...</p></article>
```

### [Responsive design](https://tailwindcss.com/docs/clear#responsive-design)

Prefix a `clear` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<p class="clear-left md:clear-none ...">  Lorem ipsum dolor sit amet...</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).