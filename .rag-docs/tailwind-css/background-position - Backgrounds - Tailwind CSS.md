Utilities for controlling the position of an element's background image.

## [Examples](https://tailwindcss.com/docs/background-position#examples)

### [Basic example](https://tailwindcss.com/docs/background-position#basic-example)

Use utilities like `bg-center`, `bg-right`, and `bg-top-left` to control the position of an element's background image:

Hover over these examples to see the full image

```php-template
<div class="bg-[url(/img/mountains.jpg)] bg-top-left"></div><div class="bg-[url(/img/mountains.jpg)] bg-top"></div><div class="bg-[url(/img/mountains.jpg)] bg-top-right"></div><div class="bg-[url(/img/mountains.jpg)] bg-left"></div><div class="bg-[url(/img/mountains.jpg)] bg-center"></div><div class="bg-[url(/img/mountains.jpg)] bg-right"></div><div class="bg-[url(/img/mountains.jpg)] bg-bottom-left"></div><div class="bg-[url(/img/mountains.jpg)] bg-bottom"></div><div class="bg-[url(/img/mountains.jpg)] bg-bottom-right"></div>
```

### [Using a custom value](https://tailwindcss.com/docs/background-position#using-a-custom-value)

Use the `bg-position-[<value>]` syntax to set the background position based on a completely custom value:

```php-template
<div class="bg-position-[center_top_1rem] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `bg-position-(<custom-property>)` syntax:

```php-template
<div class="bg-position-(--my-bg-position) ...">  <!-- ... --></div>
```

This is just a shorthand for `bg-position-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/background-position#responsive-design)

Prefix a `background-position` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="bg-center md:bg-top ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).