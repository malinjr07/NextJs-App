Flexbox & Grid

Utilities for controlling how elements are sized and placed across grid columns.

## [Examples](https://tailwindcss.com/docs/grid-column#examples)

### [Spanning columns](https://tailwindcss.com/docs/grid-column#spanning-columns)

Use `col-span-<number>` utilities like `col-span-2` and `col-span-4` to make an element span _n_ columns:

01

02

03

04

05

06

07

```php-template
<div class="grid grid-cols-3 gap-4">  <div class="...">01</div>  <div class="...">02</div>  <div class="...">03</div>  <div class="col-span-2 ...">04</div>  <div class="...">05</div>  <div class="...">06</div>  <div class="col-span-2 ...">07</div></div>
```

### [Starting and ending lines](https://tailwindcss.com/docs/grid-column#starting-and-ending-lines)

Use `col-start-<number>` or `col-end-<number>` utilities like `col-start-2` and `col-end-3` to make an element start or end at the _nth_ grid line:

01

02

03

04

```php-template
<div class="grid grid-cols-6 gap-4">  <div class="col-span-4 col-start-2 ...">01</div>  <div class="col-start-1 col-end-3 ...">02</div>  <div class="col-span-2 col-end-7 ...">03</div>  <div class="col-start-1 col-end-7 ...">04</div></div>
```

These can also be combined with the `col-span-<number>` utilities to span a specific number of columns.

### [Using a custom value](https://tailwindcss.com/docs/grid-column#using-a-custom-value)

Use utilities like `col-[<value>]`,`col-span-[<value>]`,`col-start-[<value>]`, and `col-end-[<value>]` to set the grid column size and location based on a completely custom value:

```php-template
<div class="col-[16_/_span_16] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `col-(<custom-property>)` syntax:

```php-template
<div class="col-(--my-columns) ...">  <!-- ... --></div>
```

This is just a shorthand for `col-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/grid-column#responsive-design)

Prefix `grid-column`,`grid-column-start`, and `grid-column-end` utilities with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="col-span-2 md:col-span-6 ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).