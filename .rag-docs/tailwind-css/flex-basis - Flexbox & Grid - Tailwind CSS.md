Flexbox & Grid

Utilities for controlling the initial size of flex items.

## [Examples](https://tailwindcss.com/docs/flex-basis#examples)

### [Using the spacing scale](https://tailwindcss.com/docs/flex-basis#using-the-spacing-scale)

Use `basis-<number>` utilities like `basis-64` and `basis-128` to set the initial size of flex items based on the spacing scale:

01

02

03

```php-template
<div class="flex flex-row">  <div class="basis-64">01</div>  <div class="basis-64">02</div>  <div class="basis-128">03</div></div>
```

### [Using the container scale](https://tailwindcss.com/docs/flex-basis#using-the-container-scale)

Use utilities like `basis-xs` and `basis-sm` to set the initial size of flex items based on the container scale:

01

02

03

04

```php-template
<div class="flex flex-row">  <div class="basis-3xs">01</div>  <div class="basis-2xs">02</div>  <div class="basis-xs">03</div>  <div class="basis-sm">04</div></div>
```

### [Using percentages](https://tailwindcss.com/docs/flex-basis#using-percentages)

Use `basis-<fraction>` utilities like `basis-1/2` and `basis-2/3` to set the initial size of flex items:

01

02

```php-template
<div class="flex flex-row">  <div class="basis-1/3">01</div>  <div class="basis-2/3">02</div></div>
```

### [Using a custom value](https://tailwindcss.com/docs/flex-basis#using-a-custom-value)

Use the `basis-[<value>]` syntax to set the basis based on a completely custom value:

```php-template
<div class="basis-[30vw] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `basis-(<custom-property>)` syntax:

```php-template
<div class="basis-(--my-basis) ...">  <!-- ... --></div>
```

This is just a shorthand for `basis-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/flex-basis#responsive-design)

Prefix a `flex-basis` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="flex flex-row">  <div class="basis-1/4 md:basis-1/3">01</div>  <div class="basis-1/4 md:basis-1/3">02</div>  <div class="basis-1/2 md:basis-1/3">03</div></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/flex-basis#customizing-your-theme)

Use the `--container-*` theme variables to customize the fixed-width basis utilities in your project:

```css
@theme {  --container-4xs: 14rem; }
```

Now the `basis-4xs` utility can be used in your markup:

```php-template
<div class="basis-4xs">  <!-- ... --></div>
```

The `basis-<number>` utilities are driven by the `--spacing` theme variable, which you can also customize:

```css
@theme {  --spacing: 1px; }
```

Learn more about customizing the spacing scale in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).