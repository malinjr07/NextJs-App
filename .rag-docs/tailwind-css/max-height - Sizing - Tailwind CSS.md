Utilities for setting the maximum height of an element.

## [Examples](https://tailwindcss.com/docs/max-height#examples)

### [Basic example](https://tailwindcss.com/docs/max-height#basic-example)

Use `max-h-<number>` utilities like `max-h-24` and `max-h-64` to set an element to a fixed maximum height based on the spacing scale:

max-h-80

max-h-64

max-h-48

max-h-40

max-h-32

max-h-24

```php-template
<div class="h-96 ...">  <div class="h-full max-h-80 ...">max-h-80</div>  <div class="h-full max-h-64 ...">max-h-64</div>  <div class="h-full max-h-48 ...">max-h-48</div>  <div class="h-full max-h-40 ...">max-h-40</div>  <div class="h-full max-h-32 ...">max-h-32</div>  <div class="h-full max-h-24 ...">max-h-24</div></div>
```

### [Using a percentage](https://tailwindcss.com/docs/max-height#using-a-percentage)

Use `max-h-full` or `max-h-<fraction>` utilities like `max-h-1/2` and `max-h-2/5` to give an element a percentage-based maximum height:

max-h-9/10

max-h-3/4

max-h-1/2

max-h-1/4

max-h-full

```php-template
<div class="h-96 ...">  <div class="h-full max-h-9/10 ...">max-h-9/10</div>  <div class="h-full max-h-3/4 ...">max-h-3/4</div>  <div class="h-full max-h-1/2 ...">max-h-1/2</div>  <div class="h-full max-h-1/4 ...">max-h-1/4</div>  <div class="h-full max-h-full ...">max-h-full</div></div>
```

### [Using a custom value](https://tailwindcss.com/docs/max-height#using-a-custom-value)

Use the `max-h-[<value>]` syntax to set the maximum height based on a completely custom value:

```php-template
<div class="max-h-[220px] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `max-h-(<custom-property>)` syntax:

```php-template
<div class="max-h-(--my-max-height) ...">  <!-- ... --></div>
```

This is just a shorthand for `max-h-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/max-height#responsive-design)

Prefix a `max-height` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="h-48 max-h-full md:max-h-screen ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/max-height#customizing-your-theme)

The `max-h-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {  --spacing: 1px; }
```

Learn more about customizing the spacing scale in the [theme variable documentation](https://tailwindcss.com/docs/theme).