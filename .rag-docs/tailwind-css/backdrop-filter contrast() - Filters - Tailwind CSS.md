Utilities for applying backdrop contrast filters to an element.

## [Examples](https://tailwindcss.com/docs/backdrop-filter-contrast#examples)

### [Basic example](https://tailwindcss.com/docs/backdrop-filter-contrast#basic-example)

Use utilities like `backdrop-contrast-50` and `backdrop-contrast-100` to control an element's backdrop contrast:

```php-template
<div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-contrast-50 ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-contrast-200 ..."></div></div>
```

### [Using a custom value](https://tailwindcss.com/docs/backdrop-filter-contrast#using-a-custom-value)

Use the `backdrop-contrast-[<value>]` syntax to set the backdrop contrast based on a completely custom value:

```php-template
<div class="backdrop-contrast-[.25] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `backdrop-contrast-(<custom-property>)` syntax:

```php-template
<div class="backdrop-contrast-(--my-backdrop-contrast) ...">  <!-- ... --></div>
```

This is just a shorthand for `backdrop-contrast-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/backdrop-filter-contrast#responsive-design)

Prefix a `backdrop-filter: contrast()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="backdrop-contrast-125 md:backdrop-contrast-150 ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).