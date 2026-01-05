Utilities for applying backdrop opacity filters to an element.

## [Examples](https://tailwindcss.com/docs/backdrop-filter-opacity#examples)

### [Basic example](https://tailwindcss.com/docs/backdrop-filter-opacity#basic-example)

Use utilities like `backdrop-opacity-50` and `backdrop-opacity-75` to control the opacity of all the backdrop filters applied to an element:

```php-template
<div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-invert backdrop-opacity-10 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-invert backdrop-opacity-60 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-invert backdrop-opacity-95 ..."></div></div>
```

### [Using a custom value](https://tailwindcss.com/docs/backdrop-filter-opacity#using-a-custom-value)

Use the `backdrop-opacity-[<value>]` syntax to set the backdrop filter opacity based on a completely custom value:

```php-template
<div class="backdrop-opacity-[.15] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `backdrop-opacity-(<custom-property>)` syntax:

```php-template
<div class="backdrop-opacity-(--my-backdrop-filter-opacity) ...">  <!-- ... --></div>
```

This is just a shorthand for `backdrop-opacity-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/backdrop-filter-opacity#responsive-design)

Prefix a `backdrop-filter: opacity()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="backdrop-opacity-100 md:backdrop-opacity-60 ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).