Utilities for controlling the font weight of an element.

## [Examples](https://tailwindcss.com/docs/font-weight#examples)

### [Basic example](https://tailwindcss.com/docs/font-weight#basic-example)

Use utilities like `font-thin` and `font-bold` to set the font weight of an element:

font-light

The quick brown fox jumps over the lazy dog.

font-normal

The quick brown fox jumps over the lazy dog.

font-medium

The quick brown fox jumps over the lazy dog.

font-semibold

The quick brown fox jumps over the lazy dog.

font-bold

The quick brown fox jumps over the lazy dog.

```php-template
<p class="font-light ...">The quick brown fox ...</p><p class="font-normal ...">The quick brown fox ...</p><p class="font-medium ...">The quick brown fox ...</p><p class="font-semibold ...">The quick brown fox ...</p><p class="font-bold ...">The quick brown fox ...</p>
```

### [Using a custom value](https://tailwindcss.com/docs/font-weight#using-a-custom-value)

Use the `font-[<value>]` syntax to set the font weight based on a completely custom value:

```php-template
<p class="font-[1000] ...">  Lorem ipsum dolor sit amet...</p>
```

For CSS variables, you can also use the `font-(weight:<custom-property>)` syntax:

```php-template
<p class="font-(weight:--my-font-weight) ...">  Lorem ipsum dolor sit amet...</p>
```

This is just a shorthand for `font-[weight:var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/font-weight#responsive-design)

Prefix a `font-weight` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<p class="font-normal md:font-bold ...">  Lorem ipsum dolor sit amet...</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/font-weight#customizing-your-theme)

Use the `--font-weight-*` theme variables to customize the font weight utilities in your project:

```css
@theme {  --font-weight-extrablack: 1000; }
```

Now the `font-extrablack` utility can be used in your markup:

```php-template
<div class="font-extrablack">  <!-- ... --></div>
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).