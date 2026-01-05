Utilities for setting the maximum width of an element.

## [Examples](https://tailwindcss.com/docs/max-width#examples)

### [Basic example](https://tailwindcss.com/docs/max-width#basic-example)

Use `max-w-<number>` utilities like `max-w-24` and `max-w-64` to set an element to a fixed maximum width based on the spacing scale:

Resize the example to see the expected behavior

```php-template
<div class="w-full max-w-96 ...">max-w-96</div><div class="w-full max-w-80 ...">max-w-80</div><div class="w-full max-w-64 ...">max-w-64</div><div class="w-full max-w-48 ...">max-w-48</div><div class="w-full max-w-40 ...">max-w-40</div><div class="w-full max-w-32 ...">max-w-32</div><div class="w-full max-w-24 ...">max-w-24</div>
```

### [Using a percentage](https://tailwindcss.com/docs/max-width#using-a-percentage)

Use `max-w-full` or `max-w-<fraction>` utilities like `max-w-1/2` and `max-w-2/5` to give an element a percentage-based maximum width:

Resize the example to see the expected behavior

```php-template
<div class="w-full max-w-9/10 ...">max-w-9/10</div><div class="w-full max-w-3/4 ...">max-w-3/4</div><div class="w-full max-w-1/2 ...">max-w-1/2</div><div class="w-full max-w-1/3 ...">max-w-1/3</div>
```

### [Using the container scale](https://tailwindcss.com/docs/max-width#using-the-container-scale)

Use utilities like `max-w-sm` and `max-w-xl` to set an element to a fixed maximum width based on the container scale:

Resize the example to see the expected behavior

```php-template
<div class="max-w-md ...">  <!-- ... --></div>
```

### [Using breakpoints container](https://tailwindcss.com/docs/max-width#using-breakpoints-container)

Use the `container` utility to set the maximum width of an element to match the `min-width` of the current breakpoint. This is useful if you'd prefer to design for a fixed set of screen sizes instead of trying to accommodate a fully fluid viewport:

```php-template
<div class="container">  <!-- ... --></div>
```

Note that unlike containers you might have used in other frameworks, Tailwind's container does not center itself automatically and does not have any built-in horizontal padding. Use `mx-auto` and the `px-<number>` utilities to add these:

```php-template
<div class="container mx-auto px-4">  <!-- ... --></div>
```

### [Using a custom value](https://tailwindcss.com/docs/max-width#using-a-custom-value)

Use the `max-w-[<value>]` syntax to set the maximum width based on a completely custom value:

```php-template
<div class="max-w-[220px] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `max-w-(<custom-property>)` syntax:

```php-template
<div class="max-w-(--my-max-width) ...">  <!-- ... --></div>
```

This is just a shorthand for `max-w-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/max-width#responsive-design)

Prefix a `max-width` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="max-w-sm md:max-w-lg ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/max-width#customizing-your-theme)

The `max-w-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {  --spacing: 1px; }
```

Learn more about customizing the spacing scale in the [theme variable documentation](https://tailwindcss.com/docs/theme).