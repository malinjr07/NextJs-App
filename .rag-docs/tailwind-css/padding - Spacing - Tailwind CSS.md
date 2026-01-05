Utilities for controlling an element's padding.

## [Examples](https://tailwindcss.com/docs/padding#examples)

### [Basic example](https://tailwindcss.com/docs/padding#basic-example)

Use `p-<number>` utilities like `p-4` and `p-8` to control the padding on all sides of an element:

p-8

```php-template
<div class="p-8 ...">p-8</div>
```

### [Adding padding to one side](https://tailwindcss.com/docs/padding#adding-padding-to-one-side)

Use `pt-<number>`, `pr-<number>`, `pb-<number>`, and `pl-<number>` utilities like `pt-6` and `pr-4` to control the padding on one side of an element:

```php-template
<div class="pt-6 ...">pt-6</div><div class="pr-4 ...">pr-4</div><div class="pb-8 ...">pb-8</div><div class="pl-2 ...">pl-2</div>
```

### [Adding horizontal padding](https://tailwindcss.com/docs/padding#adding-horizontal-padding)

Use `px-<number>` utilities like `px-4` and `px-8` to control the horizontal padding of an element:

```php-template
<div class="px-8 ...">px-8</div>
```

### [Adding vertical padding](https://tailwindcss.com/docs/padding#adding-vertical-padding)

Use `py-<number>` utilities like `py-4` and `py-8` to control the vertical padding of an element:

```php-template
<div class="py-8 ...">py-8</div>
```

### [Using logical properties](https://tailwindcss.com/docs/padding#using-logical-properties)

Use `ps-<number>` or `pe-<number>` utilities like `ps-4` and `pe-8` to set the `padding-inline-start` and `padding-inline-end` logical properties, which map to either the left or right side based on the text direction:

Left-to-right

ps-8

pe-8

Right-to-left

ps-8

pe-8

```php-template
<div>  <div dir="ltr">    <div class="ps-8 ...">ps-8</div>    <div class="pe-8 ...">pe-8</div>  </div>  <div dir="rtl">    <div class="ps-8 ...">ps-8</div>    <div class="pe-8 ...">pe-8</div>  </div></div>
```

For more control, you can also use the [LTR and RTL modifiers](https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support) to conditionally apply specific styles depending on the current text direction.

### [Using a custom value](https://tailwindcss.com/docs/padding#using-a-custom-value)

Use utilities like `p-[<value>]`,`px-[<value>]`, and `pb-[<value>]` to set the padding based on a completely custom value:

```php-template
<div class="p-[5px] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `p-(<custom-property>)` syntax:

```php-template
<div class="p-(--my-padding) ...">  <!-- ... --></div>
```

This is just a shorthand for `p-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/padding#responsive-design)

Prefix a `padding` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="py-4 md:py-8 ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/padding#customizing-your-theme)

The `p-<number>`,`px-<number>`,`py-<number>`,`ps-<number>`,`pe-<number>`,`pt-<number>`,`pr-<number>`,`pb-<number>`, and `pl-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {  --spacing: 1px; }
```

Learn more about customizing the spacing scale in the [theme variable documentation](https://tailwindcss.com/docs/theme).