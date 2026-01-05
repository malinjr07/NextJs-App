Utilities for controlling the size of implicitly-created grid columns.

## [Examples](https://tailwindcss.com/docs/grid-auto-columns#examples)

### [Basic example](https://tailwindcss.com/docs/grid-auto-columns#basic-example)

Use utilities like `auto-cols-min` and `auto-cols-max` to control the size of implicitly-created grid columns:

```php-template
<div class="grid auto-cols-max grid-flow-col">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

### [Using a custom value](https://tailwindcss.com/docs/grid-auto-columns#using-a-custom-value)

Use the `auto-cols-[<value>]` syntax to set the size of implicitly-created grid columns based on a completely custom value:

```php-template
<div class="auto-cols-[minmax(0,2fr)] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `auto-cols-(<custom-property>)` syntax:

```php-template
<div class="auto-cols-(--my-auto-cols) ...">  <!-- ... --></div>
```

This is just a shorthand for `auto-cols-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/grid-auto-columns#responsive-design)

Prefix a `grid-auto-columns` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="grid grid-flow-col auto-cols-max md:auto-cols-min ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).