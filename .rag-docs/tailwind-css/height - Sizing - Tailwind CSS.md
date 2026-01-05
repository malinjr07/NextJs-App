Utilities for setting the height of an element.

## [Examples](https://tailwindcss.com/docs/height#examples)

### [Basic example](https://tailwindcss.com/docs/height#basic-example)

Use `h-<number>` utilities like `h-24` and `h-64` to set an element to a fixed height based on the spacing scale:

h-96

h-80

h-64

h-48

h-40

h-32

h-24

```php-template
<div class="h-96 ...">h-96</div><div class="h-80 ...">h-80</div><div class="h-64 ...">h-64</div><div class="h-48 ...">h-48</div><div class="h-40 ...">h-40</div><div class="h-32 ...">h-32</div><div class="h-24 ...">h-24</div>
```

### [Using a percentage](https://tailwindcss.com/docs/height#using-a-percentage)

Use `h-full` or `h-<fraction>` utilities like `h-1/2` and `h-2/5` to give an element a percentage-based height:

h-full

h-9/10

h-3/4

h-1/2

h-1/3

```php-template
<div class="h-full ...">h-full</div><div class="h-9/10 ...">h-9/10</div><div class="h-3/4 ...">h-3/4</div><div class="h-1/2 ...">h-1/2</div><div class="h-1/3 ...">h-1/3</div>
```

### [Matching viewport](https://tailwindcss.com/docs/height#matching-viewport)

Use the `h-screen` utility to make an element span the entire height of the viewport:

```php-template
<div class="h-screen">  <!-- ... --></div>
```

### [Matching dynamic viewport](https://tailwindcss.com/docs/height#matching-dynamic-viewport)

Use the `h-dvh` utility to make an element span the entire height of the viewport, which changes as the browser UI expands or contracts:

Scroll the viewport to see the viewport height change

```php-template
<div class="h-dvh">  <!-- ... --></div>
```

### [Matching large viewport](https://tailwindcss.com/docs/height#matching-large-viewport)

Use the `h-lvh` utility to set an element's height to the largest possible height of the viewport:

Scroll the viewport to see the viewport height change

```php-template
<div class="h-lvh">  <!-- ... --></div>
```

### [Matching small viewport](https://tailwindcss.com/docs/height#matching-small-viewport)

Use the `h-svh` utility to set an element's height to the smallest possible height of the viewport:

Scroll the viewport to see the viewport height change

```php-template
<div class="h-svh">  <!-- ... --></div>
```

### [Setting both width and height](https://tailwindcss.com/docs/height#setting-both-width-and-height)

Use utilities like `size-px`, `size-4`, and `size-full` to set both the width and height of an element at the same time:

size-16

size-20

size-24

size-32

size-40

```php-template
<div class="size-16 ...">size-16</div><div class="size-20 ...">size-20</div><div class="size-24 ...">size-24</div><div class="size-32 ...">size-32</div><div class="size-40 ...">size-40</div>
```

### [Using a custom value](https://tailwindcss.com/docs/height#using-a-custom-value)

Use the `h-[<value>]` syntax to set the height based on a completely custom value:

```php-template
<div class="h-[32rem] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `h-(<custom-property>)` syntax:

```php-template
<div class="h-(--my-height) ...">  <!-- ... --></div>
```

This is just a shorthand for `h-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/height#responsive-design)

Prefix a `height` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="h-1/2 md:h-full ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/height#customizing-your-theme)

The `h-<number>` and `size-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {  --spacing: 1px; }
```

Learn more about customizing the spacing scale in the [theme variable documentation](https://tailwindcss.com/docs/theme).