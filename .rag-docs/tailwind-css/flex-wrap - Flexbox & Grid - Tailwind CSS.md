Utilities for controlling how flex items wrap.

## [Examples](https://tailwindcss.com/docs/flex-wrap#examples)

### [Don't wrap](https://tailwindcss.com/docs/flex-wrap#dont-wrap)

Use `flex-nowrap` to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary:

01

02

03

```php-template
<div class="flex flex-nowrap">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

### [Wrap normally](https://tailwindcss.com/docs/flex-wrap#wrap-normally)

Use `flex-wrap` to allow flex items to wrap:

01

02

03

```php-template
<div class="flex flex-wrap">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

### [Wrap reversed](https://tailwindcss.com/docs/flex-wrap#wrap-reversed)

Use `flex-wrap-reverse` to wrap flex items in the reverse direction:

01

02

03

```php-template
<div class="flex flex-wrap-reverse">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

### [Responsive design](https://tailwindcss.com/docs/flex-wrap#responsive-design)

Prefix a `flex-wrap` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="flex flex-wrap md:flex-wrap-reverse ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).