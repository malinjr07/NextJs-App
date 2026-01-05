Utilities for controlling the background size of an element's background image.

## [Examples](https://tailwindcss.com/docs/background-size#examples)

### [Filling the container](https://tailwindcss.com/docs/background-size#filling-the-container)

Use the `bg-cover` utility to scale the background image until it fills the background layer, cropping the image if needed:

```php-template
<div class="bg-[url(/img/mountains.jpg)] bg-cover bg-center"></div>
```

### [Filling without cropping](https://tailwindcss.com/docs/background-size#filling-without-cropping)

Use the `bg-contain` utility to scale the background image to the outer edges without cropping or stretching:

```php-template
<div class="bg-[url(/img/mountains.jpg)] bg-contain bg-center"></div>
```

### [Using the default size](https://tailwindcss.com/docs/background-size#using-the-default-size)

Use the `bg-auto` utility to display the background image at its default size:

```php-template
<div class="bg-[url(/img/mountains.jpg)] bg-auto bg-center bg-no-repeat"></div>
```

### [Using a custom value](https://tailwindcss.com/docs/background-size#using-a-custom-value)

Use the `bg-size-[<value>]` syntax to set the background size based on a completely custom value:

```php-template
<div class="bg-size-[auto_100px] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `bg-size-(<custom-property>)` syntax:

```php-template
<div class="bg-size-(--my-image-size) ...">  <!-- ... --></div>
```

This is just a shorthand for `bg-size-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/background-size#responsive-design)

Prefix a `background-size` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="bg-auto md:bg-contain ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).