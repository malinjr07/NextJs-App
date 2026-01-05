Utilities for controlling how an individual item is justified and aligned at the same time.

## [Examples](https://tailwindcss.com/docs/place-self#examples)

### [Auto](https://tailwindcss.com/docs/place-self#auto)

Use `place-self-auto` to align an item based on the value of the container's `place-items` property:

01

02

03

04

05

06

```php-template
<div class="grid grid-cols-3 gap-4 ...">  <div>01</div>  <div class="place-self-auto ...">02</div>  <div>03</div>  <div>04</div>  <div>05</div>  <div>06</div></div>
```

### [Start](https://tailwindcss.com/docs/place-self#start)

Use `place-self-start` to align an item to the start on both axes:

01

02

03

04

05

06

```php-template
<div class="grid grid-cols-3 gap-4 ...">  <div>01</div>  <div class="place-self-start ...">02</div>  <div>03</div>  <div>04</div>  <div>05</div>  <div>06</div></div>
```

### [Center](https://tailwindcss.com/docs/place-self#center)

Use `place-self-center` to align an item at the center on both axes:

01

02

03

04

05

06

```php-template
<div class="grid grid-cols-3 gap-4 ...">  <div>01</div>  <div class="place-self-center ...">02</div>  <div>03</div>  <div>04</div>  <div>05</div>  <div>06</div></div>
```

### [End](https://tailwindcss.com/docs/place-self#end)

Use `place-self-end` to align an item to the end on both axes:

01

02

03

04

05

06

```php-template
<div class="grid grid-cols-3 gap-4 ...">  <div>01</div>  <div class="place-self-end ...">02</div>  <div>03</div>  <div>04</div>  <div>05</div>  <div>06</div></div>
```

### [Stretch](https://tailwindcss.com/docs/place-self#stretch)

Use `place-self-stretch` to stretch an item on both axes:

01

02

03

04

05

06

```php-template
<div class="grid grid-cols-3 gap-4 ...">  <div>01</div>  <div class="place-self-stretch ...">02</div>  <div>03</div>  <div>04</div>  <div>05</div>  <div>06</div></div>
```

### [Responsive design](https://tailwindcss.com/docs/place-self#responsive-design)

Prefix a `place-self` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="place-self-start md:place-self-end ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).