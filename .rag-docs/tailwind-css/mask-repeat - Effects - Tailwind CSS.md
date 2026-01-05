Utilities for controlling the repetition of an element's mask image.

## [Examples](https://tailwindcss.com/docs/mask-repeat#examples)

### [Basic example](https://tailwindcss.com/docs/mask-repeat#basic-example)

Use the `mask-repeat` utility to repeat the mask image both vertically and horizontally:

```php-template
<div class="mask-repeat mask-[url(/img/circle.png)] mask-size-[50px_50px] bg-[url(/img/mountains.jpg)] ..."></div>
```

### [Repeating horizontally](https://tailwindcss.com/docs/mask-repeat#repeating-horizontally)

Use the `mask-repeat-x` utility to only repeat the mask image horizontally:

```php-template
<div class="mask-repeat-x mask-[url(/img/circle.png)] mask-size-[50px_50px] bg-[url(/img/mountains.jpg)]..."></div>
```

### [Repeating vertically](https://tailwindcss.com/docs/mask-repeat#repeating-vertically)

Use the `mask-repeat-y` utility to only repeat the mask image vertically:

```php-template
<div class="mask-repeat-y mask-[url(/img/circle.png)] mask-size-[50px_50px] bg-[url(/img/mountains.jpg)]..."></div>
```

### [Preventing clipping](https://tailwindcss.com/docs/mask-repeat#preventing-clipping)

Use the `mask-repeat-space` utility to repeat the mask image without clipping:

```php-template
<div class="mask-repeat-space mask-[url(/img/circle.png)] mask-size-[50px_50px] bg-[url(/img/mountains.jpg)] ..."></div>
```

### [Preventing clipping and gaps](https://tailwindcss.com/docs/mask-repeat#preventing-clipping-and-gaps)

Use the `mask-repeat-round` utility to repeat the mask image without clipping, stretching if needed to avoid gaps:

```php-template
<div class="mask-repeat-round mask-[url(/img/circle.png)] mask-size-[50px_50px] bg-[url(/img/mountains.jpg)] ..."></div>
```

### [Disabling repeating](https://tailwindcss.com/docs/mask-repeat#disabling-repeating)

Use the `mask-no-repeat` utility to prevent a mask image from repeating:

```php-template
<div class="mask-no-repeat mask-[url(/img/circle.png)] mask-size-[50px_50px] bg-[url(/img/mountains.jpg)] ..."></div>
```

### [Responsive design](https://tailwindcss.com/docs/mask-repeat#responsive-design)

Prefix a `mask-repeat` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="mask-repeat md:mask-repeat-x ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).