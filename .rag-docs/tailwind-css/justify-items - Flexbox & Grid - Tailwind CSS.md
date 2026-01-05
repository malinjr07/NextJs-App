Utilities for controlling how grid items are aligned along their inline axis.

## [Examples](https://tailwindcss.com/docs/justify-items#examples)

### [Start](https://tailwindcss.com/docs/justify-items#start)

Use the `justify-items-start` utility to justify grid items against the start of their inline axis:

01

02

03

04

05

06

```php-template
<div class="grid justify-items-start ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div>  <div>05</div>  <div>06</div></div>
```

### [End](https://tailwindcss.com/docs/justify-items#end)

Use the `justify-items-end` or `justify-items-end-safe` utilities to justify grid items against the end of their inline axis:

Resize the container to see the alignment behavior

```php-template
<div class="grid grid-flow-col justify-items-end ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

```php-template
<div class="grid grid-flow-col justify-items-end-safe ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

When there is not enough space available, the `justify-items-end-safe` utility will align items to the start of the container instead of the end.

### [Center](https://tailwindcss.com/docs/justify-items#center)

Use the `justify-items-center` or `justify-items-center-safe` utilities to justify grid items against the end of their inline axis:

Resize the container to see the alignment behavior

```php-template
<div class="grid grid-flow-col justify-items-center ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

justify-items-center-safe

```php-template
<div class="grid grid-flow-col justify-items-center-safe ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

When there is not enough space available, the `justify-items-center-safe` utility will align items to the start of the container instead of the center.

### [Stretch](https://tailwindcss.com/docs/justify-items#stretch)

Use the `justify-items-stretch` utility to stretch items along their inline axis:

01

02

03

04

05

06

```php-template
<div class="grid justify-items-stretch ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div>  <div>05</div>  <div>06</div></div>
```

### [Responsive design](https://tailwindcss.com/docs/justify-items#responsive-design)

Prefix a `justify-items` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="grid justify-items-start md:justify-items-center ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).