Filters

Utilities for applying backdrop filters to an element.

## [Examples](https://tailwindcss.com/docs/backdrop-filter#examples)

### [Basic example](https://tailwindcss.com/docs/backdrop-filter#basic-example)

Use utilities like `backdrop-blur-xs` and `backdrop-grayscale` to apply filters to an element's backdrop:

```php-template
<div class="bg-[url(/img/mountains.jpg)] ...">  <div class="backdrop-blur-xs ..."></div></div><div class="bg-[url(/img/mountains.jpg)] ...">  <div class="backdrop-grayscale ..."></div></div><div class="bg-[url(/img/mountains.jpg)] ...">  <div class="backdrop-blur-xs backdrop-grayscale ..."></div></div>
```

You can combine the following backdrop filter utilities: [blur](https://tailwindcss.com/docs/backdrop-filter-blur), [brightness](https://tailwindcss.com/docs/backdrop-filter-brightness), [contrast](https://tailwindcss.com/docs/backdrop-filter-contrast), [grayscale](https://tailwindcss.com/docs/backdrop-filter-grayscale), [hue-rotate](https://tailwindcss.com/docs/backdrop-filter-hue-rotate), [invert](https://tailwindcss.com/docs/backdrop-filter-invert), [opacity](https://tailwindcss.com/docs/backdrop-filter-opacity), [saturate](https://tailwindcss.com/docs/backdrop-filter-saturate), and [sepia](https://tailwindcss.com/docs/backdrop-filter-sepia).

### [Removing filters](https://tailwindcss.com/docs/backdrop-filter#removing-filters)

Use the `backdrop-filter-none` utility to remove all of the backdrop filters applied to an element:

```php-template
<div class="backdrop-blur-md backdrop-brightness-150 md:backdrop-filter-none"></div>
```

### [Using a custom value](https://tailwindcss.com/docs/backdrop-filter#using-a-custom-value)

Use the `backdrop-filter-[<value>]` syntax to set the backdrop filter based on a completely custom value:

```php-template
<div class="backdrop-filter-[url('filters.svg#filter-id')] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `backdrop-filter-(<custom-property>)` syntax:

```php-template
<div class="backdrop-filter-(--my-backdrop-filter) ...">  <!-- ... --></div>
```

This is just a shorthand for `backdrop-filter-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Applying on hover](https://tailwindcss.com/docs/backdrop-filter#applying-on-hover)

Prefix a `backdrop-filter` utility with a variant like `hover:*` to only apply the utility in that state:

```php-template
<div class="backdrop-blur-sm hover:backdrop-filter-none ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

### [Responsive design](https://tailwindcss.com/docs/backdrop-filter#responsive-design)

Prefix a `backdrop-filter` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="backdrop-blur-sm md:backdrop-filter-none ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).