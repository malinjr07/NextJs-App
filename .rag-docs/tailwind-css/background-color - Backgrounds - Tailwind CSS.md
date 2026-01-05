Backgrounds

Utilities for controlling an element's background color.

## [Examples](https://tailwindcss.com/docs/background-color#examples)

### [Basic example](https://tailwindcss.com/docs/background-color#basic-example)

Use utilities like `bg-white`, `bg-indigo-500` and `bg-transparent` to control the background color of an element:

bg-blue-500

bg-cyan-500

bg-pink-500

```php-template
<button class="bg-blue-500 ...">Button A</button><button class="bg-cyan-500 ...">Button B</button><button class="bg-pink-500 ...">Button C</button>
```

### [Changing the opacity](https://tailwindcss.com/docs/background-color#changing-the-opacity)

Use the color opacity modifier to control the opacity of an element's background color:

bg-sky-500/100

bg-sky-500/75

bg-sky-500/50

```php-template
<button class="bg-sky-500/100 ..."></button><button class="bg-sky-500/75 ..."></button><button class="bg-sky-500/50 ..."></button>
```

### [Using a custom value](https://tailwindcss.com/docs/background-color#using-a-custom-value)

Use the `bg-[<value>]` syntax to set the background color based on a completely custom value:

```php-template
<div class="bg-[#50d71e] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `bg-(<custom-property>)` syntax:

```php-template
<div class="bg-(--my-color) ...">  <!-- ... --></div>
```

This is just a shorthand for `bg-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Applying on hover](https://tailwindcss.com/docs/background-color#applying-on-hover)

Prefix a `background-color` utility with a variant like `hover:*` to only apply the utility in that state:

```php-template
<button class="bg-indigo-500 hover:bg-fuchsia-500 ...">Save changes</button>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

### [Responsive design](https://tailwindcss.com/docs/background-color#responsive-design)

Prefix a `background-color` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="bg-blue-500 md:bg-green-500 ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/background-color#customizing-your-theme)

Use the `--color-*` theme variables to customize the color utilities in your project:

```css
@theme {  --color-regal-blue: #243c5a; }
```

Now the `bg-regal-blue` utility can be used in your markup:

```php-template
<div class="bg-regal-blue">  <!-- ... --></div>
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).