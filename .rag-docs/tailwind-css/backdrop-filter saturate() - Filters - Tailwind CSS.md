Utilities for applying backdrop saturation filters to an element.

## [Examples](https://tailwindcss.com/docs/backdrop-filter-saturate#examples)

### [Basic example](https://tailwindcss.com/docs/backdrop-filter-saturate#basic-example)

Use utilities like `backdrop-saturate-50` and `backdrop-saturate-100` utilities to control the saturation of an element's backdrop:

```php-template
<div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-saturate-50 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-saturate-125 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-saturate-200 ..."></div></div>
```

### [Using a custom value](https://tailwindcss.com/docs/backdrop-filter-saturate#using-a-custom-value)

Use the `backdrop-saturate-[<value>]` syntax to set the backdrop saturation based on a completely custom value:

```php-template
<div class="backdrop-saturate-[.25] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `backdrop-saturate-(<custom-property>)` syntax:

```php-template
<div class="backdrop-saturate-(--my-backdrop-saturation) ...">  <!-- ... --></div>
```

This is just a shorthand for `backdrop-saturate-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/backdrop-filter-saturate#responsive-design)

Prefix a `backdrop-filter: saturate()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="backdrop-saturate-50 md:backdrop-saturate-150 ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).