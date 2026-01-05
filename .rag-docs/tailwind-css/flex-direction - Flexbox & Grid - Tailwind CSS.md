Utilities for controlling the direction of flex items.

## [Examples](https://tailwindcss.com/docs/flex-direction#examples)

### [Row](https://tailwindcss.com/docs/flex-direction#row)

Use `flex-row` to position flex items horizontally in the same direction as text:

01

02

03

```php-template
<div class="flex flex-row ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

### [Row reversed](https://tailwindcss.com/docs/flex-direction#row-reversed)

Use `flex-row-reverse` to position flex items horizontally in the opposite direction:

01

02

03

```php-template
<div class="flex flex-row-reverse ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

### [Column](https://tailwindcss.com/docs/flex-direction#column)

Use `flex-col` to position flex items vertically:

01

02

03

```php-template
<div class="flex flex-col ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

### [Column reversed](https://tailwindcss.com/docs/flex-direction#column-reversed)

Use `flex-col-reverse` to position flex items vertically in the opposite direction:

01

02

03

```php-template
<div class="flex flex-col-reverse ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

### [Responsive design](https://tailwindcss.com/docs/flex-direction#responsive-design)

Prefix a `flex-direction` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="flex flex-col md:flex-row ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).