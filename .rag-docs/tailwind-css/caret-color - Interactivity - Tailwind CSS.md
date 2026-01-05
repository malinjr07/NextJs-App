Utilities for controlling the color of the text input cursor.

## [Examples](https://tailwindcss.com/docs/caret-color#examples)

### [Basic example](https://tailwindcss.com/docs/caret-color#basic-example)

Use utilities like `caret-rose-500` and `caret-lime-600` to change the color of the text input cursor:

Focus the textarea to see the new caret color

```php-template
<textarea class="caret-pink-500 ..."></textarea>
```

### [Using a custom value](https://tailwindcss.com/docs/caret-color#using-a-custom-value)

Use the `caret-[<value>]` syntax to set the caret color based on a completely custom value:

```php-template
<textarea class="caret-[#50d71e] ..."></textarea>
```

For CSS variables, you can also use the `caret-(<custom-property>)` syntax:

```php-template
<textarea class="caret-(--my-caret-color) ..."></textarea>
```

This is just a shorthand for `caret-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/caret-color#responsive-design)

Prefix a `caret-color` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<textarea class="caret-rose-500 md:caret-lime-600 ..."></textarea>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/caret-color#customizing-your-theme)

Use the `--color-*` theme variables to customize the color utilities in your project:

```css
@theme {  --color-regal-blue: #243c5a; }
```

Now the `caret-regal-blue` utility can be used in your markup:

```php-template
<textarea class="caret-regal-blue"></textarea>
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).