Utilities for controlling how text wraps within an element.

## [Examples](https://tailwindcss.com/docs/text-wrap#examples)

### [Allowing text to wrap](https://tailwindcss.com/docs/text-wrap#allowing-text-to-wrap)

Use the `text-wrap` utility to wrap overflowing text onto multiple lines at logical points in the text:

Beloved Manhattan soup stand closes

New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.

```php-template
<article class="text-wrap">  <h3>Beloved Manhattan soup stand closes</h3>  <p>New Yorkers are facing the winter chill...</p></article>
```

### [Preventing text from wrapping](https://tailwindcss.com/docs/text-wrap#preventing-text-from-wrapping)

Use the `text-nowrap` utility to prevent text from wrapping, allowing it to overflow if necessary:

```php-template
<article class="text-nowrap">  <h3>Beloved Manhattan soup stand closes</h3>  <p>New Yorkers are facing the winter chill...</p></article>
```

### [Balanced text wrapping](https://tailwindcss.com/docs/text-wrap#balanced-text-wrapping)

Use the `text-balance` utility to distribute the text evenly across each line:

Beloved Manhattan soup stand closes

New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.

```php-template
<article>  <h3 class="text-balance">Beloved Manhattan soup stand closes</h3>  <p>New Yorkers are facing the winter chill...</p></article>
```

For performance reasons browsers limit text balancing to blocks that are ~6 lines or less, making it best suited for headings.

### [Pretty text wrapping](https://tailwindcss.com/docs/text-wrap#pretty-text-wrapping)

Use the `text-pretty` utility to prefer better text wrapping and layout at the expense of speed. Behavior varies across browsers but often involves approaches like preventing orphans (a single word on its own line) at the end of a text block:

Beloved Manhattan soup stand closes

New Yorkers are facing the winter chill with less warmth this year as the city's most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.

```php-template
<article>  <h3 class="text-pretty">Beloved Manhattan soup stand closes</h3>  <p>New Yorkers are facing the winter chill...</p></article>
```

### [Responsive design](https://tailwindcss.com/docs/text-wrap#responsive-design)

Prefix a `text-wrap` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<h1 class="text-pretty md:text-balance ...">  <!-- ... --></h1>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).