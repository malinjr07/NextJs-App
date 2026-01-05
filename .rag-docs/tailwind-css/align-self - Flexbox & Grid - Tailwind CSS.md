Flexbox & Grid

Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.

## [Examples](https://tailwindcss.com/docs/align-self#examples)

### [Auto](https://tailwindcss.com/docs/align-self#auto)

Use the `self-auto` utility to align an item based on the value of the container's `align-items` property:

01

02

03

```php-template
<div class="flex items-stretch ...">  <div>01</div>  <div class="self-auto ...">02</div>  <div>03</div></div>
```

### [Start](https://tailwindcss.com/docs/align-self#start)

Use the `self-start` utility to align an item to the start of the container's cross axis, despite the container's `align-items` value:

01

02

03

```php-template
<div class="flex items-stretch ...">  <div>01</div>  <div class="self-start ...">02</div>  <div>03</div></div>
```

### [Center](https://tailwindcss.com/docs/align-self#center)

Use the `self-center` utility to align an item along the center of the container's cross axis, despite the container's `align-items` value:

01

02

03

```php-template
<div class="flex items-stretch ...">  <div>01</div>  <div class="self-center ...">02</div>  <div>03</div></div>
```

### [End](https://tailwindcss.com/docs/align-self#end)

Use the `self-end` utility to align an item to the end of the container's cross axis, despite the container's `align-items` value:

01

02

03

```php-template
<div class="flex items-stretch ...">  <div>01</div>  <div class="self-end ...">02</div>  <div>03</div></div>
```

### [Stretch](https://tailwindcss.com/docs/align-self#stretch)

Use the `self-stretch` utility to stretch an item to fill the container's cross axis, despite the container's `align-items` value:

01

02

03

```php-template
<div class="flex items-stretch ...">  <div>01</div>  <div class="self-stretch ...">02</div>  <div>03</div></div>
```

### [Baseline](https://tailwindcss.com/docs/align-self#baseline)

Use the `self-baseline` utility to align an item such that its baseline aligns with the baseline of the flex container's cross axis:

01

02

03

```php-template
<div class="flex ...">  <div class="self-baseline pt-2 pb-6">01</div>  <div class="self-baseline pt-8 pb-12">02</div>  <div class="self-baseline pt-12 pb-4">03</div></div>
```

### [Last baseline](https://tailwindcss.com/docs/align-self#last-baseline)

Use the `self-baseline-last` utility to align an item along the container's cross axis such that its baseline aligns with the last baseline in the container:

![](https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=128&q=80)

Spencer Sharp

Working on the future of astronaut recruitment at Space Recruit.

[spacerecruit.com](https://tailwindcss.com/docs/align-self#)

```php-template
<div class="grid grid-cols-[1fr_auto]">  <div>    <img src="img/spencer-sharp.jpg" />    <h4>Spencer Sharp</h4>    <p class="self-baseline-last">Working on the future of astronaut recruitment at Space Recruit.</p>  </div>  <p class="self-baseline-last">spacerecruit.com</p></div>
```

This is useful for ensuring that text items align with each other, even if they have different heights.

### [Responsive design](https://tailwindcss.com/docs/align-self#responsive-design)

Prefix an `align-self` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="self-auto md:self-end ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).