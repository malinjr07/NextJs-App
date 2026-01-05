Utilities for controlling how flex and grid items are positioned along a container's main axis.

## [Examples](https://tailwindcss.com/docs/justify-content#examples)

### [Start](https://tailwindcss.com/docs/justify-content#start)

Use the `justify-start` utility to justify items against the start of the container's main axis:

01

02

03

```php-template
<div class="flex justify-start ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

### [Center](https://tailwindcss.com/docs/justify-content#center)

Use the `justify-center` or `justify-center-safe` utilities to justify items along the center of the container's main axis:

Resize the container to see the alignment behavior

```php-template
<div class="flex justify-center ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div></div>
```

```php-template
<div class="flex justify-center-safe ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>04</div></div>
```

When there is not enough space available, the `justify-center-safe` utility will align items to the start of the container instead of the center.

### [End](https://tailwindcss.com/docs/justify-content#end)

Use the `justify-end` or `justify-end-safe` utilities to justify items against the end of the container's main axis:

Resize the container to see the alignment behavior

```php-template
<div class="flex justify-end ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>03</div></div>
```

```php-template
<div class="flex justify-end-safe ...">  <div>01</div>  <div>02</div>  <div>03</div>  <div>03</div></div>
```

When there is not enough space available, the `justify-end-safe` utility will align items to the start of the container instead of the end.

### [Space between](https://tailwindcss.com/docs/justify-content#space-between)

Use the `justify-between` utility to justify items along the container's main axis such that there is an equal amount of space between each item:

01

02

03

```php-template
<div class="flex justify-between ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

### [Space around](https://tailwindcss.com/docs/justify-content#space-around)

Use the `justify-around` utility to justify items along the container's main axis such that there is an equal amount of space on each side of each item:

01

02

03

```php-template
<div class="flex justify-around ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

### [Space evenly](https://tailwindcss.com/docs/justify-content#space-evenly)

Use the `justify-evenly` utility to justify items along the container's main axis such that there is an equal amount of space around each item, but also accounting for the doubling of space you would normally see between each item when using `justify-around`:

01

02

03

```php-template
<div class="flex justify-evenly ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

### [Stretch](https://tailwindcss.com/docs/justify-content#stretch)

Use the `justify-stretch` utility to allow auto-sized content items to fill the available space along the container's main axis:

01

02

03

```php-template
<div class="grid grid-cols-[4rem_auto_4rem] justify-stretch ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

### [Normal](https://tailwindcss.com/docs/justify-content#normal)

Use the `justify-normal` utility to pack content items in their default position as if no `justify-content` value was set:

01

02

03

```php-template
<div class="flex justify-normal ...">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

### [Responsive design](https://tailwindcss.com/docs/justify-content#responsive-design)

Prefix a `justify-content` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="flex justify-start md:justify-between ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).