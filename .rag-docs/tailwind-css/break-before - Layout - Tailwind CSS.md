Layout

Utilities for controlling how a column or page should break before an element.

## [Examples](https://tailwindcss.com/docs/break-before#examples)

### [Basic example](https://tailwindcss.com/docs/break-before#basic-example)

Use utilities like `break-before-column` and `break-before-page` to control how a column or page break should behave before an element:

```php-template
<div class="columns-2">  <p>Well, let me tell you something, ...</p>  <p class="break-before-column">Sure, go ahead, laugh...</p>  <p>Maybe we can live without...</p>  <p>Look. If you think this is...</p></div>
```

### [Responsive design](https://tailwindcss.com/docs/break-before#responsive-design)

Prefix a `break-before` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="break-before-column md:break-before-auto ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).