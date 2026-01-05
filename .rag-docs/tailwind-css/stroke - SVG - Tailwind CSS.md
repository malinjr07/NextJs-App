Utilities for styling the stroke of SVG elements.

## [Examples](https://tailwindcss.com/docs/stroke#examples)

### [Basic example](https://tailwindcss.com/docs/stroke#basic-example)

Use utilities like `stroke-indigo-500` and `stroke-lime-600` to change the stroke color of an SVG:

```php-template
<svg class="stroke-cyan-500 ...">  <!-- ... --></svg>
```

This can be useful for styling icon sets like [Heroicons](https://heroicons.com/).

### [Using the current color](https://tailwindcss.com/docs/stroke#using-the-current-color)

Use the `stroke-current` utility to set the stroke color to the current text color:

Hover over the button to see the stroke color change

```php-template
<button class="bg-white text-pink-600 hover:bg-pink-600 hover:text-white ...">  <svg class="size-5 stroke-current ..." fill="none">    <!-- ... -->  </svg>  Download file</button>
```

### [Using a custom value](https://tailwindcss.com/docs/stroke#using-a-custom-value)

Use the `stroke-[<value>]` syntax to set the stroke color based on a completely custom value:

```php-template
<svg class="stroke-[#243c5a] ...">  <!-- ... --></svg>
```

For CSS variables, you can also use the `stroke-(<custom-property>)` syntax:

```php-template
<svg class="stroke-(--my-stroke-color) ...">  <!-- ... --></svg>
```

This is just a shorthand for `stroke-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/stroke#responsive-design)

Prefix a `stroke` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<svg class="stroke-cyan-500 md:stroke-cyan-700 ...">  <!-- ... --></svg>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/stroke#customizing-your-theme)

Use the `--color-*` theme variables to customize the color utilities in your project:

```css
@theme {  --color-regal-blue: #243c5a; }
```

Now the `stroke-regal-blue` utility can be used in your markup:

```php-template
<svg class="stroke-regal-blue">  <!-- ... --></svg>
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).