Utilities for styling the fill of SVG elements.

## [Examples](https://tailwindcss.com/docs/fill#examples)

### [Basic example](https://tailwindcss.com/docs/fill#basic-example)

Use utilities like `fill-indigo-500` and `fill-lime-600` to change the fill color of an SVG:

```php-template
<svg class="fill-blue-500 ...">  <!-- ... --></svg>
```

This can be useful for styling icon sets like [Heroicons](https://heroicons.com/).

### [Using the current color](https://tailwindcss.com/docs/fill#using-the-current-color)

Use the `fill-current` utility to set the fill color to the current text color:

Hover over the button to see the fill color change

```php-template
<button class="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white ...">  <svg class="size-5 fill-current ...">    <!-- ... -->  </svg>  Check for updates</button>
```

### [Using a custom value](https://tailwindcss.com/docs/fill#using-a-custom-value)

Use the `fill-[<value>]` syntax to set the fill color based on a completely custom value:

```php-template
<svg class="fill-[#243c5a] ...">  <!-- ... --></svg>
```

For CSS variables, you can also use the `fill-(<custom-property>)` syntax:

```php-template
<svg class="fill-(--my-fill-color) ...">  <!-- ... --></svg>
```

This is just a shorthand for `fill-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/fill#responsive-design)

Prefix a `fill` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<svg class="fill-cyan-500 md:fill-cyan-700 ...">  <!-- ... --></svg>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/fill#customizing-your-theme)

Use the `--color-*` theme variables to customize the color utilities in your project:

```css
@theme {  --color-regal-blue: #243c5a; }
```

Now the `fill-regal-blue` utility can be used in your markup:

```php-template
<svg class="fill-regal-blue">  <!-- ... --></svg>
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).