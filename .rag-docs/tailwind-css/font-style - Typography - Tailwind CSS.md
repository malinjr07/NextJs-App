Utilities for controlling the style of text.

|   Class    |       Styles        |
|------------|---------------------|
|   `italic`   | `font-style: italic;` |
| `not-italic` | `font-style: normal;` |

## [Examples](https://tailwindcss.com/docs/font-style#examples)

### [Italicizing text](https://tailwindcss.com/docs/font-style#italicizing-text)

Use the `italic` utility to make text italic:

The quick brown fox jumps over the lazy dog.

```php-template
<p class="italic ...">The quick brown fox ...</p>
```

### [Displaying text normally](https://tailwindcss.com/docs/font-style#displaying-text-normally)

Use the `not-italic` utility to display text normally:

The quick brown fox jumps over the lazy dog.

```php-template
<p class="not-italic ...">The quick brown fox ...</p>
```

### [Responsive design](https://tailwindcss.com/docs/font-style#responsive-design)

Prefix a `font-style` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<p class="italic md:not-italic ...">  Lorem ipsum dolor sit amet...</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).