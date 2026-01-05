Utilities for controlling how multiple masks are combined together.

## [Examples](https://tailwindcss.com/docs/mask-composite#examples)

### [Basic example](https://tailwindcss.com/docs/mask-composite#basic-example)

Use utilities like `mask-add` and `mask-intersect` to control how an element's masks are combined together:

mask-add

mask-subtract

mask-intersect

mask-exclude

```php-template
<div class="mask-add mask-[url(/img/circle.png),url(/img/circle.png)] mask-[position:30%_50%,70%_50%] bg-[url(/img/mountains.jpg)]"></div><div class="mask-subtract mask-[url(/img/circle.png),url(/img/circle.png)] mask-[position:30%_50%,70%_50%] bg-[url(/img/mountains.jpg)]"></div><div class="mask-intersect mask-[url(/img/circle.png),url(/img/circle.png)] mask-[position:30%_50%,70%_50%] bg-[url(/img/mountains.jpg)]"></div><div class="mask-exclude mask-[url(/img/circle.png),url(/img/circle.png)] mask-[position:30%_50%,70%_50%] bg-[url(/img/mountains.jpg)]"></div>
```

### [Responsive design](https://tailwindcss.com/docs/mask-composite#responsive-design)

Prefix a `mask-composite` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="mask-add md:mask-subtract ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).