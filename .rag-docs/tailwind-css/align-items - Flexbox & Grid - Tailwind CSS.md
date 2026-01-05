Utilities for controlling how flex and grid items are positioned along a container's cross axis.

## [Examples](https://tailwindcss.com/docs/align-items#examples)

### [Stretch](https://tailwindcss.com/docs/align-items#stretch)

Use the `items-stretch` utility to stretch items to fill the container's cross axis:

01

02

03

```php-template
<div class="flex items-stretch ...">  <div class="py-4">01</div>  <div class="py-12">02</div>  <div class="py-8">03</div></div>
```

### [Start](https://tailwindcss.com/docs/align-items#start)

Use the `items-start` utility to align items to the start of the container's cross axis:

01

02

03

```php-template
<div class="flex items-start ...">  <div class="py-4">01</div>  <div class="py-12">02</div>  <div class="py-8">03</div></div>
```

### [Center](https://tailwindcss.com/docs/align-items#center)

Use the `items-center` utility to align items along the center of the container's cross axis:

01

02

03

```php-template
<div class="flex items-center ...">  <div class="py-4">01</div>  <div class="py-12">02</div>  <div class="py-8">03</div></div>
```

### [End](https://tailwindcss.com/docs/align-items#end)

Use the `items-end` utility to align items to the end of the container's cross axis:

01

02

03

```php-template
<div class="flex items-end ...">  <div class="py-4">01</div>  <div class="py-12">02</div>  <div class="py-8">03</div></div>
```

### [Baseline](https://tailwindcss.com/docs/align-items#baseline)

Use the `items-baseline` utility to align items along the container's cross axis such that all of their baselines align:

01

02

03

```php-template
<div class="flex items-baseline ...">  <div class="pt-2 pb-6">01</div>  <div class="pt-8 pb-12">02</div>  <div class="pt-12 pb-4">03</div></div>
```

### [Last baseline](https://tailwindcss.com/docs/align-items#last-baseline)

Use the `items-baseline-last` utility to align items along the container's cross axis such that all of their baselines align with the last baseline in the container:

![](https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.51a13c67.jpg&w=128&q=80)

Spencer Sharp

Working on the future of astronaut recruitment at Space Recruit.

[spacerecruit.com](https://tailwindcss.com/docs/align-items#)

```php-template
<div class="grid grid-cols-[1fr_auto] items-baseline-last">  <div>    <img src="img/spencer-sharp.jpg" />    <h4>Spencer Sharp</h4>    <p>Working on the future of astronaut recruitment at Space Recruit.</p>  </div>  <p>spacerecruit.com</p></div>
```

This is useful for ensuring that text items align with each other, even if they have different heights.

### [Responsive design](https://tailwindcss.com/docs/align-items#responsive-design)

Prefix an `align-items` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="flex items-stretch md:items-center ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).