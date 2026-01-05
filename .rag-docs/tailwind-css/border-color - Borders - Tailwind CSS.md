Utilities for controlling the color of an element's borders.

## [Examples](https://tailwindcss.com/docs/border-color#examples)

### [Basic example](https://tailwindcss.com/docs/border-color#basic-example)

Use utilities like `border-rose-500` and `border-lime-100` to control the border color of an element:

border-indigo-500

border-purple-500

border-sky-500

```php-template
<div class="border-4 border-indigo-500 ..."></div><div class="border-4 border-purple-500 ..."></div><div class="border-4 border-sky-500 ..."></div>
```

### [Changing the opacity](https://tailwindcss.com/docs/border-color#changing-the-opacity)

Use the color opacity modifier to control the opacity of an element's border color:

border-indigo-500/100

border-indigo-500/75

border-indigo-500/50

```php-template
<div class="border-4 border-indigo-500/100 ..."></div><div class="border-4 border-indigo-500/75 ..."></div><div class="border-4 border-indigo-500/50 ..."></div>
```

### [Individual sides](https://tailwindcss.com/docs/border-color#individual-sides)

Use utilities like `border-t-indigo-500` and `border-r-lime-100` to set the border color for one side of an element:

border-t-indigo-500

border-r-indigo-500

border-b-indigo-500

border-l-indigo-500

```php-template
<div class="border-4 border-indigo-200 border-t-indigo-500 ..."></div><div class="border-4 border-indigo-200 border-r-indigo-500 ..."></div><div class="border-4 border-indigo-200 border-b-indigo-500 ..."></div><div class="border-4 border-indigo-200 border-l-indigo-500 ..."></div>
```

### [Horizontal and vertical sides](https://tailwindcss.com/docs/border-color#horizontal-and-vertical-sides)

Use utilities like `border-x-indigo-500` and `border-y-lime-100` to set the border color on two sides of an element at the same time:

border-x-indigo-500

border-y-indigo-500

```php-template
<div class="border-4 border-indigo-200 border-x-indigo-500 ..."></div><div class="border-4 border-indigo-200 border-y-indigo-500 ..."></div>
```

### [Using logical properties](https://tailwindcss.com/docs/border-color#using-logical-properties)

Use utilities like `border-s-indigo-500` and `border-e-lime-100` to set the `border-inline-start-color` and `border-inline-end-color` [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts), which map to either the left or right border based on the text direction:

Left-to-right

Right-to-left

```php-template
<div dir="ltr">  <div class="border-s-indigo-500 ..."></div></div><div dir="rtl">  <div class="border-s-indigo-500 ..."></div></div>
```

### [Divider between children](https://tailwindcss.com/docs/border-color#divider-between-children)

Use utilities like `divide-indigo-500` and `divide-lime-100` to control the border color between child elements:

01

02

03

```php-template
<div class="grid grid-cols-3 divide-x-4 divide-indigo-500">  <div>01</div>  <div>02</div>  <div>03</div></div>
```

### [Using a custom value](https://tailwindcss.com/docs/border-color#using-a-custom-value)

Use the `border-[<value>]` syntax to set the border color based on a completely custom value:

```php-template
<div class="border-[#243c5a] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `border-(<custom-property>)` syntax:

```php-template
<div class="border-(--my-border) ...">  <!-- ... --></div>
```

This is just a shorthand for `border-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Applying on focus](https://tailwindcss.com/docs/border-color#applying-on-focus)

Prefix a `border-color` utility with a variant like `focus:*` to only apply the utility in that state:

Email address

```python
<input class="border-2 border-gray-700 focus:border-pink-600 ..." />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

### [Responsive design](https://tailwindcss.com/docs/border-color#responsive-design)

Prefix a `border-color` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="border-blue-500 md:border-green-500 ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/border-color#customizing-your-theme)

Use the `--color-*` theme variables to customize the color utilities in your project:

```css
@theme {  --color-regal-blue: #243c5a; }
```

Now the `border-regal-blue` utility can be used in your markup:

```php-template
<div class="border-regal-blue">  <!-- ... --></div>
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).