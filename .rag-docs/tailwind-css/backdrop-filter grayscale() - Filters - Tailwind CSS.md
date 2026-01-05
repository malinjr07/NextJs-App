Utilities for applying backdrop grayscale filters to an element.

## [Examples](https://tailwindcss.com/docs/backdrop-filter-grayscale#examples)

### [Basic example](https://tailwindcss.com/docs/backdrop-filter-grayscale#basic-example)

Use utilities like `backdrop-grayscale-50` and `backdrop-grayscale` to control the grayscale effect applied to an element's backdrop:

```php-template
<div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-grayscale-0 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-grayscale-50 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-grayscale-200 ..."></div></div>
```

### [Using a custom value](https://tailwindcss.com/docs/backdrop-filter-grayscale#using-a-custom-value)

Use the `backdrop-grayscale-[<value>]` syntax to set the backdrop grayscale based on a completely custom value:

```php-template
<div class="backdrop-grayscale-[0.5] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `backdrop-grayscale-(<custom-property>)` syntax:

```php-template
<div class="backdrop-grayscale-(--my-backdrop-grayscale) ...">  <!-- ... --></div>
```

This is just a shorthand for `backdrop-grayscale-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/backdrop-filter-grayscale#responsive-design)

Prefix a `backdrop-filter: grayscale()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="backdrop-grayscale md:backdrop-grayscale-0 ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).