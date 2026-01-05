Utilities for controlling how an element's background is positioned relative to borders, padding, and content.

## [Examples](https://tailwindcss.com/docs/background-origin#examples)

### [Basic example](https://tailwindcss.com/docs/background-origin#basic-example)

Use the `bg-origin-border`, `bg-origin-padding`, and `bg-origin-content` utilities to control where an element's background is rendered:

```php-template
<div class="border-4 bg-[url(/img/mountains.jpg)] bg-origin-border p-3 ..."></div><div class="border-4 bg-[url(/img/mountains.jpg)] bg-origin-padding p-3 ..."></div><div class="border-4 bg-[url(/img/mountains.jpg)] bg-origin-content p-3 ..."></div>
```

### [Responsive design](https://tailwindcss.com/docs/background-origin#responsive-design)

Prefix a `background-origin` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="bg-origin-border md:bg-origin-padding ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).