Utilities for controlling how an element's background image should blend with its background color.

## [Examples](https://tailwindcss.com/docs/background-blend-mode#examples)

### [Basic example](https://tailwindcss.com/docs/background-blend-mode#basic-example)

Use utilities like `bg-blend-difference` and `bg-blend-saturation` to control how the background image and color of an element are blended:

bg-blend-multiply

bg-blend-soft-light

bg-blend-overlay

```php-template
<div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-multiply ..."></div><div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-soft-light ..."></div><div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-overlay ..."></div>
```

### [Responsive design](https://tailwindcss.com/docs/background-blend-mode#responsive-design)

Prefix a `background-blend-mode` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="bg-blue-500 bg-[url(/img/mountains.jpg)] bg-blend-lighten md:bg-blend-darken ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).