Typography

Utilities for controlling the color of text decorations.

## [Examples](https://tailwindcss.com/docs/text-decoration-color#examples)

### [Basic example](https://tailwindcss.com/docs/text-decoration-color#basic-example)

Use utilities like `decoration-sky-500` and `decoration-pink-500` to change the [text decoration](https://tailwindcss.com/docs/text-decoration-line) color of an element:

```php-template
<p>  I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings  at <a class="underline decoration-sky-500">My Company, Inc</a>. Outside  of work, I like to <a class="underline decoration-pink-500">watch pod-racing</a>  and have <a class="underline decoration-indigo-500">light-saber</a> fights.</p>
```

### [Changing the opacity](https://tailwindcss.com/docs/text-decoration-color#changing-the-opacity)

Use the color opacity modifier to control the text decoration color opacity of an element:

```php-template
<p>  I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings  at <a class="underline decoration-sky-500/30">My Company, Inc</a>. Outside  of work, I like to <a class="underline decoration-pink-500/30">watch pod-racing</a>  and have <a class="underline decoration-indigo-500/30">light-saber</a> fights.</p>
```

### [Using a custom value](https://tailwindcss.com/docs/text-decoration-color#using-a-custom-value)

Use the `decoration-[<value>]` syntax to set the text decoration color based on a completely custom value:

```php-template
<p class="decoration-[#50d71e] ...">  Lorem ipsum dolor sit amet...</p>
```

For CSS variables, you can also use the `decoration-(<custom-property>)` syntax:

```php-template
<p class="decoration-(--my-color) ...">  Lorem ipsum dolor sit amet...</p>
```

This is just a shorthand for `decoration-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Applying on hover](https://tailwindcss.com/docs/text-decoration-color#applying-on-hover)

Prefix a `text-decoration-color` utility with a variant like `hover:*` to only apply the utility in that state:

Hover over the text to see the expected behavior

```php-template
<p>The <a href="..." class="underline hover:decoration-pink-500 ...">quick brown fox</a> jumps over the lazy dog.</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

### [Responsive design](https://tailwindcss.com/docs/text-decoration-color#responsive-design)

Prefix a `text-decoration-color` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<p class="underline decoration-sky-600 md:decoration-blue-400 ...">  Lorem ipsum dolor sit amet...</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/text-decoration-color#customizing-your-theme)

Use the `--color-*` theme variables to customize the color utilities in your project:

```css
@theme {  --color-regal-blue: #243c5a; }
```

Now the `decoration-regal-blue` utility can be used in your markup:

```php-template
<p class="decoration-regal-blue">  Lorem ipsum dolor sit amet...</p>
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).