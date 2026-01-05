Utilities for controlling the style of text decorations.

## [Examples](https://tailwindcss.com/docs/text-decoration-style#examples)

### [Basic example](https://tailwindcss.com/docs/text-decoration-style#basic-example)

Use utilities like `decoration-dotted` and `decoration-dashed` to change the [text decoration](https://tailwindcss.com/docs/text-decoration-line) style of an element:

decoration-solid

The quick brown fox jumps over the lazy dog.

decoration-double

The quick brown fox jumps over the lazy dog.

decoration-dotted

The quick brown fox jumps over the lazy dog.

decoration-dashed

The quick brown fox jumps over the lazy dog.

decoration-wavy

The quick brown fox jumps over the lazy dog.

```php-template
<p class="underline decoration-solid">The quick brown fox...</p><p class="underline decoration-double">The quick brown fox...</p><p class="underline decoration-dotted">The quick brown fox...</p><p class="underline decoration-dashed">The quick brown fox...</p><p class="underline decoration-wavy">The quick brown fox...</p>
```

### [Responsive design](https://tailwindcss.com/docs/text-decoration-style#responsive-design)

Prefix a `text-decoration-style` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<p class="underline md:decoration-dashed ...">  Lorem ipsum dolor sit amet...</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).