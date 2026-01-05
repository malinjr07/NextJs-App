Utilities for applying blur filters to an element.

## [Examples](https://tailwindcss.com/docs/filter-blur#examples)

### [Basic example](https://tailwindcss.com/docs/filter-blur#basic-example)

Use utilities like `blur-sm` and `blur-lg` to blur an element:

```cpp
<img class="blur-none" src="/img/mountains.jpg" /><img class="blur-sm" src="/img/mountains.jpg" /><img class="blur-lg" src="/img/mountains.jpg" /><img class="blur-2xl" src="/img/mountains.jpg" />
```

### [Using a custom value](https://tailwindcss.com/docs/filter-blur#using-a-custom-value)

Use the `blur-[<value>]` syntax to set the blur based on a completely custom value:

```cpp
<img class="blur-[2px] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `blur-(<custom-property>)` syntax:

```cpp
<img class="blur-(--my-blur) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `blur-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/filter-blur#responsive-design)

Prefix a `filter: blur()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```cpp
<img class="blur-none md:blur-lg ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

## [Customizing your theme](https://tailwindcss.com/docs/filter-blur#customizing-your-theme)

Use the `--blur-*` theme variables to customize the blur utilities in your project:

```css
@theme {  --blur-2xs: 2px; }
```

Now the `blur-2xs` utility can be used in your markup:

```cpp
<img class="blur-2xs" src="/img/mountains.jpg" />
```

Learn more about customizing your theme in the [theme documentation](https://tailwindcss.com/docs/theme#customizing-your-theme).