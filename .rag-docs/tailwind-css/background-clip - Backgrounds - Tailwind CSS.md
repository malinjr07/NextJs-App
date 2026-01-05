Utilities for controlling the bounding box of an element's background.

## [Examples](https://tailwindcss.com/docs/background-clip#examples)

### [Basic example](https://tailwindcss.com/docs/background-clip#basic-example)

Use the `bg-clip-border`, `bg-clip-padding`, and `bg-clip-content` utilities to control the bounding box of an element's background:

bg-clip-border

bg-clip-padding

bg-clip-content

```php-template
<div class="border-4 bg-indigo-500 bg-clip-border p-3"></div><div class="border-4 bg-indigo-500 bg-clip-padding p-3"></div><div class="border-4 bg-indigo-500 bg-clip-content p-3"></div>
```

### [Cropping to text](https://tailwindcss.com/docs/background-clip#cropping-to-text)

Use the `bg-clip-text` utility to crop an element's background to match the shape of the text:

Hello world

```php-template
<p class="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ...">  Hello world</p>
```

### [Responsive design](https://tailwindcss.com/docs/background-clip#responsive-design)

Prefix a `background-clip` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="bg-clip-border md:bg-clip-padding ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).