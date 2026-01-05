Utilities for controlling the color scheme of an element.

## [Examples](https://tailwindcss.com/docs/color-scheme#examples)

### [Basic example](https://tailwindcss.com/docs/color-scheme#basic-example)

Use utilities like `scheme-light` and `scheme-light-dark` to control how element should be rendered:

Try switching your system color scheme to see the difference

scheme-light

scheme-dark

scheme-light-dark

```php-template
<div class="scheme-light ...">  <input type="date" /></div><div class="scheme-dark ...">  <input type="date" /></div><div class="scheme-light-dark ...">  <input type="date" /></div>
```

### [Applying in dark mode](https://tailwindcss.com/docs/color-scheme#applying-in-dark-mode)

Prefix a `color-scheme` utility with a variant like `dark:*` to only apply the utility in that state:

```php-template
<html class="scheme-light dark:scheme-dark ...">  <!-- ... --></html>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).