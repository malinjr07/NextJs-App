Utilities for applying backdrop blur filters to an element.

## [Examples](https://tailwindcss.com/docs/backdrop-filter-blur#examples)

### [Basic example](https://tailwindcss.com/docs/backdrop-filter-blur#basic-example)

Use utilities like `backdrop-blur-sm` and `backdrop-blur-lg` to control an element’s backdrop blur:

```php-template
<div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-blur-none ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-blur-sm ..."></div></div><div class="bg-[url(/img/mountains.jpg)]">  <div class="bg-white/30 backdrop-blur-md ..."></div></div>
```

### [Using a custom value](https://tailwindcss.com/docs/backdrop-filter-blur#using-a-custom-value)

Use the `backdrop-blur-[<value>]` syntax to set the backdrop blur based on a completely custom value:

```php-template
<div class="backdrop-blur-[2px] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `backdrop-blur-(<custom-property>)` syntax:

```php-template
<div class="backdrop-blur-(--my-backdrop-blur) ...">  <!-- ... --></div>
```

This is just a shorthand for `backdrop-blur-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/backdrop-filter-blur#responsive-design)

Prefix a `backdrop-filter: blur()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="backdrop-blur-none md:backdrop-blur-lg ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/backdrop-filter-blur#customizing-your-theme)

Use the `--blur-*` theme variables to customize the backdrop blur utilities in your project:

```css
@theme {  --blur-2xs: 2px; }
```

Now the `backdrop-blur-2xs` utility can be used in your markup:

```php-template
<div class="backdrop-blur-2xs">  <!-- ... --></div>
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).