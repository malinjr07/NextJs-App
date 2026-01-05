Utilities for styling the stroke width of SVG elements.

## [Examples](https://tailwindcss.com/docs/stroke-width#examples)

### [Basic example](https://tailwindcss.com/docs/stroke-width#basic-example)

Use `stroke-<number>` utilities like `stroke-1` and `stroke-2` to set the stroke width of an SVG:

```php-template
<svg class="stroke-1 ..."></svg><svg class="stroke-2 ..."></svg>
```

This can be useful for styling icon sets like [Heroicons](https://heroicons.com/).

### [Using a custom value](https://tailwindcss.com/docs/stroke-width#using-a-custom-value)

Use the `stroke-[<value>]` syntax to set the stroke width based on a completely custom value:

```php-template
<div class="stroke-[1.5] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `stroke-(length:<custom-property>)` syntax:

```php-template
<div class="stroke-(length:--my-stroke-width) ...">  <!-- ... --></div>
```

This is just a shorthand for `stroke-[length:var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/stroke-width#responsive-design)

Prefix a `stroke-width` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="stroke-1 md:stroke-2 ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).