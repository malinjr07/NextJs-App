Utilities for controlling whether the user can select text in an element.

## [Examples](https://tailwindcss.com/docs/user-select#examples)

### [Disabling text selection](https://tailwindcss.com/docs/user-select#disabling-text-selection)

Use the `select-none` utility to prevent selecting text in an element and its children:

Try selecting the text to see the expected behavior

The quick brown fox jumps over the lazy dog.

```php-template
<div class="select-none ...">The quick brown fox jumps over the lazy dog.</div>
```

### [Allowing text selection](https://tailwindcss.com/docs/user-select#allowing-text-selection)

Use the `select-text` utility to allow selecting text in an element and its children:

Try selecting the text to see the expected behavior

The quick brown fox jumps over the lazy dog.

```php-template
<div class="select-text ...">The quick brown fox jumps over the lazy dog.</div>
```

### [Selecting all text in one click](https://tailwindcss.com/docs/user-select#selecting-all-text-in-one-click)

Use the `select-all` utility to automatically select all the text in an element when a user clicks:

Try clicking the text to see the expected behavior

The quick brown fox jumps over the lazy dog.

```php-template
<div class="select-all ...">The quick brown fox jumps over the lazy dog.</div>
```

### [Using auto select behavior](https://tailwindcss.com/docs/user-select#using-auto-select-behavior)

Use the `select-auto` utility to use the default browser behavior for selecting text:

Try selecting the text to see the expected behavior

The quick brown fox jumps over the lazy dog.

```php-template
<div class="select-auto ...">The quick brown fox jumps over the lazy dog.</div>
```

### [Responsive design](https://tailwindcss.com/docs/user-select#responsive-design)

Prefix an `user-select` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="select-none md:select-all ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).