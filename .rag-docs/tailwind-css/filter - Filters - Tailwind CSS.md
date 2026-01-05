Filters

Utilities for applying filters to an element.

## [Examples](https://tailwindcss.com/docs/filter#examples)

### [Basic example](https://tailwindcss.com/docs/filter#basic-example)

Use utilities like `blur-xs` and `grayscale` to apply filters to an element:

```cpp
<img class="blur-xs" src="/img/mountains.jpg" /><img class="grayscale" src="/img/mountains.jpg" /><img class="blur-xs grayscale" src="/img/mountains.jpg" />
```

You can combine the following filter utilities: [blur](https://tailwindcss.com/docs/filter-blur), [brightness](https://tailwindcss.com/docs/filter-brightness), [contrast](https://tailwindcss.com/docs/filter-contrast), [drop-shadow](https://tailwindcss.com/docs/filter-drop-shadow), [grayscale](https://tailwindcss.com/docs/filter-grayscale), [hue-rotate](https://tailwindcss.com/docs/filter-hue-rotate), [invert](https://tailwindcss.com/docs/filter-invert), [saturate](https://tailwindcss.com/docs/filter-saturate), and [sepia](https://tailwindcss.com/docs/filter-sepia).

### [Removing filters](https://tailwindcss.com/docs/filter#removing-filters)

Use the `filter-none` utility to remove all of the filters applied to an element:

```cpp
<img class="blur-md brightness-150 invert md:filter-none" src="/img/mountains.jpg" />
```

### [Using a custom value](https://tailwindcss.com/docs/filter#using-a-custom-value)

Use the `filter-[<value>]` syntax to set the filter based on a completely custom value:

```cpp
<img class="filter-[url('filters.svg#filter-id')] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `filter-(<custom-property>)` syntax:

```cpp
<img class="filter-(--my-filter) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `filter-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Applying on hover](https://tailwindcss.com/docs/filter#applying-on-hover)

Prefix a `filter` utility with a variant like `hover:*` to only apply the utility in that state:

```cpp
<img class="blur-sm hover:filter-none ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).

### [Responsive design](https://tailwindcss.com/docs/filter#responsive-design)

Prefix a `filter` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```cpp
<img class="blur-sm md:filter-none ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).