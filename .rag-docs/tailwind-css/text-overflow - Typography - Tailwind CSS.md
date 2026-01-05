Utilities for controlling how the text of an element overflows.

## [Examples](https://tailwindcss.com/docs/text-overflow#examples)

### [Truncating text](https://tailwindcss.com/docs/text-overflow#truncating-text)

Use the `truncate` utility to prevent text from wrapping and truncate overflowing text with an ellipsis (…) if needed:

The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.

```cpp
<p class="truncate">The longest word in any of the major...</p>
```

### [Adding an ellipsis](https://tailwindcss.com/docs/text-overflow#adding-an-ellipsis)

Use the `text-ellipsis` utility to truncate overflowing text with an ellipsis (…) if needed:

The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.

```cpp
<p class="overflow-hidden text-ellipsis">The longest word in any of the major...</p>
```

### [Clipping text](https://tailwindcss.com/docs/text-overflow#clipping-text)

Use the `text-clip` utility to truncate the text at the limit of the content area:

The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.

```cpp
<p class="overflow-hidden text-clip">The longest word in any of the major...</p>
```

This is the default browser behavior.

### [Responsive design](https://tailwindcss.com/docs/text-overflow#responsive-design)

Prefix a `text-overflow` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<p class="text-ellipsis md:text-clip ...">  Lorem ipsum dolor sit amet...</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).