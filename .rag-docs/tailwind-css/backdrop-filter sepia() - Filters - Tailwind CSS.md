Utilities for applying backdrop sepia filters to an element.

## [Examples](https://tailwindcss.com/docs/backdrop-filter-sepia#examples)

### [Basic example](https://tailwindcss.com/docs/backdrop-filter-sepia#basic-example)

Use utilities like `backdrop-sepia` and `backdrop-sepia-50` to control the sepia effect applied to an element's backdrop:

```php-template
<div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-sepia-0 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-sepia-50 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-sepia ..."></div></div>
```

### [Using a custom value](https://tailwindcss.com/docs/backdrop-filter-sepia#using-a-custom-value)

Use the `backdrop-sepia-[<value>]` syntax to set the backdrop sepia based on a completely custom value:

```php-template
<div class="backdrop-sepia-[.25] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `backdrop-sepia-(<custom-property>)` syntax:

```php-template
<div class="backdrop-sepia-(--my-backdrop-sepia) ...">  <!-- ... --></div>
```

This is just a shorthand for `backdrop-sepia-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/backdrop-filter-sepia#responsive-design)

Prefix a `backdrop-filter: sepia()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="backdrop-sepia md:backdrop-sepia-0 ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).