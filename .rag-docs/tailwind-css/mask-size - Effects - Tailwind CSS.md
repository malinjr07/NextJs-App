Utilities for controlling the size of an element's mask image.

## [Examples](https://tailwindcss.com/docs/mask-size#examples)

### [Filling the container](https://tailwindcss.com/docs/mask-size#filling-the-container)

Use the `mask-cover` utility to scale the mask image until it fills the mask layer, cropping the image if needed:

```php-template
<div class="mask-cover mask-[url(/img/scribble.png)] bg-[url(/img/mountains.jpg)] ..."></div>
```

### [Filling without cropping](https://tailwindcss.com/docs/mask-size#filling-without-cropping)

Use the `mask-contain` utility to scale the mask image to the outer edges without cropping or stretching:

```php-template
<div class="mask-contain mask-[url(/img/scribble.png)] bg-[url(/img/mountains.jpg)] ..."></div>
```

### [Using the default size](https://tailwindcss.com/docs/mask-size#using-the-default-size)

Use the `mask-auto` utility to display the mask image at its default size:

```php-template
<div class="mask-auto mask-[url(/img/scribble.png)] bg-[url(/img/mountains.jpg)] ..."></div>
```

### [Using a custom value](https://tailwindcss.com/docs/mask-size#using-a-custom-value)

Use the `mask-size-[<value>]` syntax to set the mask image size based on a completely custom value:

```php-template
<div class="mask-size-[auto_100px] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `mask-size-(<custom-property>)` syntax:

```php-template
<div class="mask-size-(--my-mask-size) ...">  <!-- ... --></div>
```

This is just a shorthand for `mask-size-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/mask-size#responsive-design)

Prefix a `mask-size` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="mask-auto md:mask-contain ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).