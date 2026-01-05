Typography

Utilities for controlling the leading, or line height, of an element.

## [Examples](https://tailwindcss.com/docs/line-height#examples)

### [Basic example](https://tailwindcss.com/docs/line-height#basic-example)

Use font size utilities like `text-sm/6` and `text-lg/7` to set the font size and line-height of an element at the same time:

text-sm/6

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

text-sm/7

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

text-sm/8

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

```vbnet
<p class="text-base/6 ...">So I started to walk into the water...</p><p class="text-base/7 ...">So I started to walk into the water...</p><p class="text-base/8 ...">So I started to walk into the water...</p>
```

Each font size utility also sets a default line height when one isn't provided. You can learn more about these values and how to customize them in the [font-size documentation](https://tailwindcss.com/docs/font-size).

### [Setting independently](https://tailwindcss.com/docs/line-height#setting-independently)

Use `leading-<number>` utilities like `leading-6` and `leading-7` to set the line height of an element independent of the font-size:

leading-6

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

leading-7

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

leading-8

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

```vbnet
<p class="text-sm leading-6">So I started to walk into the water...</p><p class="text-sm leading-7">So I started to walk into the water...</p><p class="text-sm leading-8">So I started to walk into the water...</p>
```

### [Removing the leading](https://tailwindcss.com/docs/line-height#removing-the-leading)

Use the `leading-none` utility to set the line height of an element equal to its font size:

The quick brown fox jumps over the lazy dog.

```php-template
<p class="text-2xl leading-none ...">The quick brown fox...</p>
```

### [Using a custom value](https://tailwindcss.com/docs/line-height#using-a-custom-value)

Use the `leading-[<value>]` syntax to set the line height based on a completely custom value:

```php-template
<p class="leading-[1.5] ...">  Lorem ipsum dolor sit amet...</p>
```

For CSS variables, you can also use the `leading-(<custom-property>)` syntax:

```php-template
<p class="leading-(--my-line-height) ...">  Lorem ipsum dolor sit amet...</p>
```

This is just a shorthand for `leading-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/line-height#responsive-design)

Prefix a `line-height` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<p class="leading-5 md:leading-6 ...">  Lorem ipsum dolor sit amet...</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/line-height#customizing-your-theme)

The `leading-<number>` utilities are driven by the `--spacing` theme variable, which can be customized in your own theme:

```css
@theme {  --spacing: 1px; }
```

Learn more about customizing the spacing scale in the [theme variable documentation](https://tailwindcss.com/docs/theme).