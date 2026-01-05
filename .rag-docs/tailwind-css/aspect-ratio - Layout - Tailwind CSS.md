Utilities for controlling the aspect ratio of an element.

## [Examples](https://tailwindcss.com/docs/aspect-ratio#examples)

### [Basic example](https://tailwindcss.com/docs/aspect-ratio#basic-example)

Use `aspect-<ratio>` utilities like `aspect-3/2` to give an element a specific aspect ratio:

```cpp
<img class="aspect-3/2 object-cover ..." src="/img/villas.jpg" />
```

### [Using a video aspect ratio](https://tailwindcss.com/docs/aspect-ratio#using-a-video-aspect-ratio)

Use the `aspect-video` utility to give a video element a 16 / 9 aspect ratio:

```php-template
<iframe class="aspect-video ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

### [Using a custom value](https://tailwindcss.com/docs/aspect-ratio#using-a-custom-value)

Use the `aspect-[<value>]` syntax to set the aspect ratio based on a completely custom value:

```cpp
<img class="aspect-[calc(4*3+1)/3] ..." src="/img/villas.jpg" />
```

For CSS variables, you can also use the `aspect-(<custom-property>)` syntax:

```cpp
<img class="aspect-(--my-aspect-ratio) ..." src="/img/villas.jpg" />
```

This is just a shorthand for `aspect-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/aspect-ratio#responsive-design)

Prefix an `aspect-ratio` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<iframe class="aspect-video md:aspect-square ..." src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/aspect-ratio#customizing-your-theme)

Use the `--aspect-*` theme variables to customize the aspect ratio utilities in your project:

```css
@theme {  --aspect-retro: 4 / 3; }
```

Now the `aspect-retro` utility can be used in your markup:

```php-template
<iframe class="aspect-retro" src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).