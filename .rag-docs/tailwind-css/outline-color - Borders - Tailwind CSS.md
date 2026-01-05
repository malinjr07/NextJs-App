Utilities for controlling the color of an element's outline.

## [Examples](https://tailwindcss.com/docs/outline-color#examples)

### [Basic example](https://tailwindcss.com/docs/outline-color#basic-example)

Use utilities like `outline-rose-500` and `outline-lime-100` to control the color of an element's outline:

outline-blue-500

outline-cyan-500

outline-pink-500

```php-template
<button class="outline-2 outline-offset-2 outline-blue-500 ...">Button A</button><button class="outline-2 outline-offset-2 outline-cyan-500 ...">Button B</button><button class="outline-2 outline-offset-2 outline-pink-500 ...">Button C</button>
```

### [Changing the opacity](https://tailwindcss.com/docs/outline-color#changing-the-opacity)

Use the color opacity modifier to control the opacity of an element's outline color:

outline-blue-500/100

outline-blue-500/75

outline-blue-500/50

```php-template
<button class="outline-2 outline-blue-500/100 ...">Button A</button><button class="outline-2 outline-blue-500/75 ...">Button B</button><button class="outline-2 outline-blue-500/50 ...">Button C</button>
```

### [Using a custom value](https://tailwindcss.com/docs/outline-color#using-a-custom-value)

Use the `outline-[<value>]` syntax to set the outline color based on a completely custom value:

```php-template
<div class="outline-[#243c5a] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `outline-(<custom-property>)` syntax:

```php-template
<div class="outline-(--my-color) ...">  <!-- ... --></div>
```

This is just a shorthand for `outline-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/outline-color#responsive-design)

Prefix an `outline-color` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="outline md:outline-blue-400 ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/outline-color#customizing-your-theme)

Use the `--color-*` theme variables to customize the color utilities in your project:

```css
@theme {  --color-regal-blue: #243c5a; }
```

Now the `outline-regal-blue` utility can be used in your markup:

```php-template
<div class="outline-regal-blue">  <!-- ... --></div>
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).