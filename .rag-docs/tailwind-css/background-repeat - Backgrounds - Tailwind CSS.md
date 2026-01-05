Utilities for controlling the repetition of an element's background image.

## [Examples](https://tailwindcss.com/docs/background-repeat#examples)

### [Basic example](https://tailwindcss.com/docs/background-repeat#basic-example)

Use the `bg-repeat` utility to repeat the background image both vertically and horizontally:

```php-template
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat ..."></div>
```

### [Repeating horizontally](https://tailwindcss.com/docs/background-repeat#repeating-horizontally)

Use the `bg-repeat-x` utility to only repeat the background image horizontally:

```php-template
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-x ..."></div>
```

### [Repeating vertically](https://tailwindcss.com/docs/background-repeat#repeating-vertically)

Use the `bg-repeat-y` utility to only repeat the background image vertically:

```php-template
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-y ..."></div>
```

### [Preventing clipping](https://tailwindcss.com/docs/background-repeat#preventing-clipping)

Use the `bg-repeat-space` utility to repeat the background image without clipping:

```php-template
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-space ..."></div>
```

### [Preventing clipping and gaps](https://tailwindcss.com/docs/background-repeat#preventing-clipping-and-gaps)

Use the `bg-repeat-round` utility to repeat the background image without clipping, stretching if needed to avoid gaps:

```php-template
<div class="bg-[url(/img/clouds.svg)] bg-center bg-repeat-round ..."></div>
```

### [Disabling repeating](https://tailwindcss.com/docs/background-repeat#disabling-repeating)

Use the `bg-no-repeat` utility to prevent a background image from repeating:

```php-template
<div class="bg-[url(/img/clouds.svg)] bg-center bg-no-repeat ..."></div>
```

### [Responsive design](https://tailwindcss.com/docs/background-repeat#responsive-design)

Prefix a `background-repeat` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="bg-repeat md:bg-repeat-x ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).