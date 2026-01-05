Sizing

Utilities for setting the minimum width of an element.

## [Examples](https://tailwindcss.com/docs/min-width#examples)

### [Basic example](https://tailwindcss.com/docs/min-width#basic-example)

Use `min-w-<number>` utilities like `min-w-24` and `min-w-64` to set an element to a fixed minimum width based on the spacing scale:

min-w-80

min-w-64

min-w-48

min-w-40

min-w-32

min-w-24

```php-template
<div class="w-20 ...">  <div class="min-w-80 ...">min-w-80</div>  <div class="min-w-64 ...">min-w-64</div>  <div class="min-w-48 ...">min-w-48</div>  <div class="min-w-40 ...">min-w-40</div>  <div class="min-w-32 ...">min-w-32</div>  <div class="min-w-24 ...">min-w-24</div></div>
```

### [Using a percentage](https://tailwindcss.com/docs/min-width#using-a-percentage)

Use `min-w-full` or `min-w-<fraction>` utilities like `min-w-1/2` and `min-w-2/5` to give an element a percentage-based minimum width:

min-w-3/4

w-full

```php-template
<div class="flex ...">  <div class="min-w-3/4 ...">min-w-3/4</div>  <div class="w-full ...">w-full</div></div>
```

### [Using the container scale](https://tailwindcss.com/docs/min-width#using-the-container-scale)

Use utilities like `min-w-sm` and `min-w-xl` to set an element to a fixed minimum width based on the container scale:

min-w-lg

min-w-md

min-w-sm

min-w-xs

min-w-2xs

min-w-3xs

```php-template
<div class="w-40 ...">  <div class="min-w-lg ...">min-w-lg</div>  <div class="min-w-md ...">min-w-md</div>  <div class="min-w-sm ...">min-w-sm</div>  <div class="min-w-xs ...">min-w-xs</div>  <div class="min-w-2xs ...">min-w-2xs</div>  <div class="min-w-3xs ...">min-w-3xs</div></div>
```

### [Using a custom value](https://tailwindcss.com/docs/min-width#using-a-custom-value)

Use the `min-w-[<value>]` syntax to set the minimum width based on a completely custom value:

```php-template
<div class="min-w-[220px] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `min-w-(<custom-property>)` syntax:

```php-template
<div class="min-w-(--my-min-width) ...">  <!-- ... --></div>
```

This is just a shorthand for `min-w-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/min-width#responsive-design)

Prefix a `min-width` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="w-24 min-w-full md:min-w-0 ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/min-width#customizing-your-theme)

The `min-w-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {  --spacing: 1px; }
```

Learn more about customizing the spacing scale in the [theme variable documentation](https://tailwindcss.com/docs/theme).