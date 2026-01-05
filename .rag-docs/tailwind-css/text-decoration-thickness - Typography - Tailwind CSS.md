Utilities for controlling the thickness of text decorations.

## [Examples](https://tailwindcss.com/docs/text-decoration-thickness#examples)

### [Basic example](https://tailwindcss.com/docs/text-decoration-thickness#basic-example)

Use `decoration-<number>` utilities like `decoration-2` and `decoration-4` to change the [text decoration](https://tailwindcss.com/docs/text-decoration-line) thickness of an element:

decoration-1

The quick brown fox jumps over the lazy dog.

decoration-2

The quick brown fox jumps over the lazy dog.

decoration-4

The quick brown fox jumps over the lazy dog.

```php-template
<p class="underline decoration-1">The quick brown fox...</p><p class="underline decoration-2">The quick brown fox...</p><p class="underline decoration-4">The quick brown fox...</p>
```

### [Using a custom value](https://tailwindcss.com/docs/text-decoration-thickness#using-a-custom-value)

Use the `decoration-[<value>]` syntax to set the text decoration thickness based on a completely custom value:

```php-template
<p class="decoration-[0.25rem] ...">  Lorem ipsum dolor sit amet...</p>
```

For CSS variables, you can also use the `decoration-(length:<custom-property>)` syntax:

```php-template
<p class="decoration-(length:--my-decoration-thickness) ...">  Lorem ipsum dolor sit amet...</p>
```

This is just a shorthand for `decoration-[length:var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/text-decoration-thickness#responsive-design)

Prefix a `text-decoration-thickness` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<p class="underline md:decoration-4 ...">  Lorem ipsum dolor sit amet...</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).