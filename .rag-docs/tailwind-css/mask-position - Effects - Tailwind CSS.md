Utilities for controlling the position of an element's mask image.

## [Examples](https://tailwindcss.com/docs/mask-position#examples)

### [Basic example](https://tailwindcss.com/docs/mask-position#basic-example)

Use utilities like `mask-center`, `mask-right`, and `mask-left-top` to control the position of an element's mask image:

mask-top-left

mask-top

mask-top-right

mask-left

mask-center

mask-right

mask-bottom-left

mask-bottom

mask-bottom-right

```php-template
<div class="mask-top-left mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-top mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-top-right mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-left mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-center mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-right mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-bottom-left mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-bottom mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div><div class="mask-bottom-right mask-[url(/img/circle.png)] mask-size-[50%] bg-[url(/img/mountains.jpg)] ..."></div>
```

### [Using a custom value](https://tailwindcss.com/docs/mask-position#using-a-custom-value)

Use the `mask-position-[<value>]` syntax to set the mask position based on a completely custom value:

```php-template
<div class="mask-position-[center_top_1rem] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `mask-position-(<custom-property>)` syntax:

```php-template
<div class="mask-position-(--my-mask-position) ...">  <!-- ... --></div>
```

This is just a shorthand for `mask-position-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/mask-position#responsive-design)

Prefix a `mask-position` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="mask-center md:mask-top ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).