Utilities for controlling the font smoothing of an element.

## [Examples](https://tailwindcss.com/docs/font-smoothing#examples)

### [Grayscale antialiasing](https://tailwindcss.com/docs/font-smoothing#grayscale-antialiasing)

Use the `antialiased` utility to render text using grayscale antialiasing:

The quick brown fox jumps over the lazy dog.

```php-template
<p class="antialiased ...">The quick brown fox ...</p>
```

### [Subpixel antialiasing](https://tailwindcss.com/docs/font-smoothing#subpixel-antialiasing)

Use the `subpixel-antialiased` utility to render text using subpixel antialiasing:

The quick brown fox jumps over the lazy dog.

```php-template
<p class="subpixel-antialiased ...">The quick brown fox ...</p>
```

### [Responsive design](https://tailwindcss.com/docs/font-smoothing#responsive-design)

Prefix `-webkit-font-smoothing` and `-moz-osx-font-smoothing` utilities with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<p class="antialiased md:subpixel-antialiased ...">  Lorem ipsum dolor sit amet...</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).