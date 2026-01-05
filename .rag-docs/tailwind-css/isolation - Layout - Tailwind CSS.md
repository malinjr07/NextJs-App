Utilities for controlling whether an element should explicitly create a new stacking context.

|     Class      |       Styles        |
|----------------|---------------------|
|    `isolate`     | `isolation: isolate;` |
| `isolation-auto` |  `isolation: auto;`   |

## [Examples](https://tailwindcss.com/docs/isolation#examples)

### [Basic example](https://tailwindcss.com/docs/isolation#basic-example)

Use the `isolate` and `isolation-auto` utilities to control whether an element should explicitly create a new stacking context:

```php-template
<div class="isolate ...">  <!-- ... --></div>
```

### [Responsive design](https://tailwindcss.com/docs/isolation#responsive-design)

Prefix an `isolation` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="isolate md:isolation-auto ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).