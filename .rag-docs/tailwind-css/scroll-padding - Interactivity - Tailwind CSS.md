Utilities for controlling an element's scroll offset within a snap container.

## [Examples](https://tailwindcss.com/docs/scroll-padding#examples)

### [Basic example](https://tailwindcss.com/docs/scroll-padding#basic-example)

Use the `scroll-pt-<number>`, `scroll-pr-<number>`, `scroll-pb-<number>`, and `scroll-pl-<number>` utilities like `scroll-pl-4` and `scroll-pt-6` to set the scroll offset of an element within a snap container:

Scroll in the grid of images to see the expected behavior

```php-template
<div class="snap-x scroll-pl-6 ...">  <div class="snap-start ...">    <img src="/img/vacation-01.jpg" />  </div>  <div class="snap-start ...">    <img src="/img/vacation-02.jpg" />  </div>  <div class="snap-start ...">    <img src="/img/vacation-03.jpg" />  </div>  <div class="snap-start ...">    <img src="/img/vacation-04.jpg" />  </div>  <div class="snap-start ...">    <img src="/img/vacation-05.jpg" />  </div></div>
```

### [Using logical properties](https://tailwindcss.com/docs/scroll-padding#using-logical-properties)

Use the `scroll-ps-<number>` and `scroll-pe-<number>` utilities to set the `scroll-padding-inline-start` and `scroll-padding-inline-end` logical properties, which map to either the left or right side based on the text direction:

Scroll in the grid of images to see the expected behavior

Left-to-right

Right-to-left

```php-template
<div dir="ltr">  <div class="snap-x scroll-ps-6 ...">    <!-- ... -->  </div></div><div dir="rtl">  <div class="snap-x scroll-ps-6 ...">    <!-- ... -->  </div></div>
```

### [Using negative values](https://tailwindcss.com/docs/scroll-padding#using-negative-values)

To use a negative scroll padding value, prefix the class name with a dash to convert it to a negative value:

```php-template
<div class="-scroll-ps-6 snap-x ...">  <!-- ... --></div>
```

### [Using a custom value](https://tailwindcss.com/docs/scroll-padding#using-a-custom-value)

Use utilities like `scroll-pl-[<value>]` and `scroll-pe-[<value>]` to set the scroll padding based on a completely custom value:

```php-template
<div class="scroll-pl-[24rem] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `scroll-pl-(<custom-property>)` syntax:

```php-template
<div class="scroll-pl-(--my-scroll-padding) ...">  <!-- ... --></div>
```

This is just a shorthand for `scroll-pl-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/scroll-padding#responsive-design)

Prefix a `scroll-padding` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="scroll-p-8 md:scroll-p-0 ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/scroll-padding#customizing-your-theme)

The `scroll-p-<number>`,`scroll-px-<number>`,`scroll-py-<number>`,`scroll-ps-<number>`,`scroll-pe-<number>`,`scroll-pt-<number>`,`scroll-pr-<number>`,`scroll-pb-<number>`, and `scroll-pl-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {  --spacing: 1px; }
```

Learn more about customizing the spacing scale in the [theme variable documentation](https://tailwindcss.com/docs/theme).