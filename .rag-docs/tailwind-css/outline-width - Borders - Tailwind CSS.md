Utilities for controlling the width of an element's outline.

## [Examples](https://tailwindcss.com/docs/outline-width#examples)

### [Basic example](https://tailwindcss.com/docs/outline-width#basic-example)

Use `outline` or `outline-<number>` utilities like `outline-2` and `outline-4` to set the width of an element's outline:

outline

outline-2

outline-4

```php-template
<button class="outline outline-offset-2 ...">Button A</button><button class="outline-2 outline-offset-2 ...">Button B</button><button class="outline-4 outline-offset-2 ...">Button C</button>
```

### [Applying on focus](https://tailwindcss.com/docs/outline-width#applying-on-focus)

Prefix an `outline-width` utility with a variant like `focus:*` to only apply the utility in that state:

Focus the button to see the outline added

```php-template
<button class="outline-offset-2 outline-sky-500 focus:outline-2 ...">Save Changes</button>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

### [Using a custom value](https://tailwindcss.com/docs/outline-width#using-a-custom-value)

Use the `outline-[<value>]` syntax to set the outline width based on a completely custom value:

```php-template
<div class="outline-[2vw] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `outline-(length:<custom-property>)` syntax:

```php-template
<div class="outline-(length:--my-outline-width) ...">  <!-- ... --></div>
```

This is just a shorthand for `outline-[length:var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/outline-width#responsive-design)

Prefix an `outline-width` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="outline md:outline-2 ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).