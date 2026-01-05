Typography

Utilities for controlling the font size of an element.

## [Examples](https://tailwindcss.com/docs/font-size#examples)

### [Basic example](https://tailwindcss.com/docs/font-size#basic-example)

Use utilities like `text-sm` and `text-lg` to set the font size of an element:

text-sm

The quick brown fox jumps over the lazy dog.

text-base

The quick brown fox jumps over the lazy dog.

text-lg

The quick brown fox jumps over the lazy dog.

text-xl

The quick brown fox jumps over the lazy dog.

text-2xl

The quick brown fox jumps over the lazy dog.

```php-template
<p class="text-sm ...">The quick brown fox ...</p><p class="text-base ...">The quick brown fox ...</p><p class="text-lg ...">The quick brown fox ...</p><p class="text-xl ...">The quick brown fox ...</p><p class="text-2xl ...">The quick brown fox ...</p>
```

### [Setting the line-height](https://tailwindcss.com/docs/font-size#setting-the-line-height)

Use utilities like `text-sm/6` and `text-lg/7` to set the font size and line-height of an element at the same time:

text-sm/6

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

text-sm/7

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

text-sm/8

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

```vbnet
<p class="text-sm/6 ...">So I started to walk into the water...</p><p class="text-sm/7 ...">So I started to walk into the water...</p><p class="text-sm/8 ...">So I started to walk into the water...</p>
```

### [Using a custom value](https://tailwindcss.com/docs/font-size#using-a-custom-value)

Use the `text-[<value>]` syntax to set the font size based on a completely custom value:

```php-template
<p class="text-[14px] ...">  Lorem ipsum dolor sit amet...</p>
```

For CSS variables, you can also use the `text-(length:<custom-property>)` syntax:

```php-template
<p class="text-(length:--my-text-size) ...">  Lorem ipsum dolor sit amet...</p>
```

This is just a shorthand for `text-[length:var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/font-size#responsive-design)

Prefix a `font-size` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<p class="text-sm md:text-base ...">  Lorem ipsum dolor sit amet...</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/font-size#customizing-your-theme)

Use the `--text-*` theme variables to customize the font size utilities in your project:

```css
@theme {  --text-tiny: 0.625rem; }
```

Now the `text-tiny` utility can be used in your markup:

```php-template
<div class="text-tiny">  <!-- ... --></div>
```

You can also provide default `line-height`, `letter-spacing`, and `font-weight` values for a font size:

```css
@theme {  --text-tiny: 0.625rem;  --text-tiny--line-height: 1.5rem;   --text-tiny--letter-spacing: 0.125rem;   --text-tiny--font-weight: 500; }
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).