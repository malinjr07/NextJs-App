Utilities for controlling the capitalization of text.

## [Examples](https://tailwindcss.com/docs/text-transform#examples)

### [Uppercasing text](https://tailwindcss.com/docs/text-transform#uppercasing-text)

Use the `uppercase` utility to uppercase the text of an element:

The quick brown fox jumps over the lazy dog.

```php-template
<p class="uppercase">The quick brown fox ...</p>
```

### [Lowercasing text](https://tailwindcss.com/docs/text-transform#lowercasing-text)

Use the `lowercase` utility to lowercase the text of an element:

The quick brown fox jumps over the lazy dog.

```php-template
<p class="lowercase">The quick brown fox ...</p>
```

### [Capitalizing text](https://tailwindcss.com/docs/text-transform#capitalizing-text)

Use the `capitalize` utility to capitalize text of an element:

The quick brown fox jumps over the lazy dog.

```php-template
<p class="capitalize">The quick brown fox ...</p>
```

### [Resetting text casing](https://tailwindcss.com/docs/text-transform#resetting-text-casing)

Use the `normal-case` utility to preserve the original text casing of an element—typically used to reset capitalization at different breakpoints:

The quick brown fox jumps over the lazy dog.

```php-template
<p class="normal-case">The quick brown fox ...</p>
```

### [Responsive design](https://tailwindcss.com/docs/text-transform#responsive-design)

Prefix a `text-transform` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<p class="capitalize md:uppercase ...">  Lorem ipsum dolor sit amet...</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).