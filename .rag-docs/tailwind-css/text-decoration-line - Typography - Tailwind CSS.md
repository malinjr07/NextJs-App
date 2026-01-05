Utilities for controlling the decoration of text.

## [Examples](https://tailwindcss.com/docs/text-decoration-line#examples)

### [Underling text](https://tailwindcss.com/docs/text-decoration-line#underling-text)

Use the `underline` utility to add an underline to the text of an element:

The quick brown fox jumps over the lazy dog.

```php-template
<p class="underline">The quick brown fox...</p>
```

### [Adding an overline to text](https://tailwindcss.com/docs/text-decoration-line#adding-an-overline-to-text)

Use the `overline` utility to add an overline to the text of an element:

The quick brown fox jumps over the lazy dog.

```php-template
<p class="overline">The quick brown fox...</p>
```

### [Adding a line through text](https://tailwindcss.com/docs/text-decoration-line#adding-a-line-through-text)

Use the `line-through` utility to add a line through the text of an element:

The quick brown fox jumps over the lazy dog.

```php-template
<p class="line-through">The quick brown fox...</p>
```

### [Removing a line from text](https://tailwindcss.com/docs/text-decoration-line#removing-a-line-from-text)

Use the `no-underline` utility to remove a line from the text of an element:

The quick brown fox jumps over the lazy dog.

```php-template
<p class="no-underline">The quick brown fox...</p>
```

### [Applying on hover](https://tailwindcss.com/docs/text-decoration-line#applying-on-hover)

Prefix a `text-decoration-line` utility with a variant like `hover:*` to only apply the utility in that state:

Hover over the text to see the expected behavior

```php-template
<p>The <a href="..." class="no-underline hover:underline ...">quick brown fox</a> jumps over the lazy dog.</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

### [Responsive design](https://tailwindcss.com/docs/text-decoration-line#responsive-design)

Prefix a `text-decoration-line` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<a class="no-underline md:underline ..." href="...">  <!-- ... --></a>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).