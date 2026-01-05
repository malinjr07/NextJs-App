Layout

Utilities for controlling the number of columns within an element.

## [Examples](https://tailwindcss.com/docs/columns#examples)

### [Setting by number](https://tailwindcss.com/docs/columns#setting-by-number)

Use `columns-<number>` utilities like `columns-3` to set the number of columns that should be created for the content within an element:

The column width will automatically adjust to accommodate the specified number of columns.

### [Setting by width](https://tailwindcss.com/docs/columns#setting-by-width)

Use utilities like `columns-xs` and `columns-sm` to set the ideal column width for the content within an element:

```php-template
<div class="columns-3xs ...">  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />  <img class="aspect-square ..." src="/img/mountains-2.jpg" />  <img class="aspect-square ..." src="/img/mountains-3.jpg" />  <!-- ... --></div>
```

When setting the column width, the number of columns automatically adjusts to ensure they don't get too narrow.

### [Setting the column gap](https://tailwindcss.com/docs/columns#setting-the-column-gap)

Use the `gap-<width>` utilities to specify the width between columns:

Learn more about the gap utilities in the [gap documentation](https://tailwindcss.com/docs/gap).

### [Using a custom value](https://tailwindcss.com/docs/columns#using-a-custom-value)

Use the `columns-[<value>]` syntax to set the columns based on a completely custom value:

```php-template
<div class="columns-[30vw] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `columns-(<custom-property>)` syntax:

```php-template
<div class="columns-(--my-columns) ...">  <!-- ... --></div>
```

This is just a shorthand for `columns-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/columns#responsive-design)

Prefix a `columns` utility with a breakpoint variant like `sm:` to only apply the utility at small screen sizes and above:

```php-template
<div class="columns-2 gap-4 sm:columns-3 sm:gap-8 ...">  <img class="aspect-3/2 ..." src="/img/mountains-1.jpg" />  <img class="aspect-square ..." src="/img/mountains-2.jpg" />  <img class="aspect-square ..." src="/img/mountains-3.jpg" />  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/columns#customizing-your-theme)

Use the `--container-*` theme variables to customize the fixed-width column utilities in your project:

```css
@theme {  --container-4xs: 14rem; }
```

Now the `columns-4xs` utility can be used in your markup:

```php-template
<div class="columns-4xs">  <!-- ... --></div>
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).