Utilities for applying backdrop invert filters to an element.

## [Examples](https://tailwindcss.com/docs/backdrop-filter-invert#examples)

### [Basic example](https://tailwindcss.com/docs/backdrop-filter-invert#basic-example)

Use utilities like `backdrop-invert` and `backdrop-invert-65` to control the color inversion of an element's backdrop:

```php-template
<div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-invert-0 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-invert-65 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-invert ..."></div></div>
```

### [Using a custom value](https://tailwindcss.com/docs/backdrop-filter-invert#using-a-custom-value)

Use the `backdrop-invert-[<value>]` syntax to set the backdrop inversion based on a completely custom value:

```php-template
<div class="backdrop-invert-[.25] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `backdrop-invert-(<custom-property>)` syntax:

```php-template
<div class="backdrop-invert-(--my-backdrop-inversion) ...">  <!-- ... --></div>
```

This is just a shorthand for `backdrop-invert-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/backdrop-filter-invert#responsive-design)

Prefix a `backdrop-filter: invert()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="backdrop-invert-0 md:backdrop-invert ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).