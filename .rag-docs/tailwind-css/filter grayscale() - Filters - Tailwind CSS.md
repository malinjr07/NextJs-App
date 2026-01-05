Utilities for applying grayscale filters to an element.

## [Examples](https://tailwindcss.com/docs/filter-grayscale#examples)

### [Basic example](https://tailwindcss.com/docs/filter-grayscale#basic-example)

Use utilities like `grayscale` and `grayscale-75` to control the amount of grayscale effect applied to an element:

```cpp
<img class="grayscale-0 ..." src="/img/mountains.jpg" /><img class="grayscale-25 ..." src="/img/mountains.jpg" /><img class="grayscale-50 ..." src="/img/mountains.jpg" /><img class="grayscale ..." src="/img/mountains.jpg" />
```

### [Using a custom value](https://tailwindcss.com/docs/filter-grayscale#using-a-custom-value)

Use the `grayscale-[<value>]` syntax to set the grayscale based on a completely custom value:

```cpp
<img class="grayscale-[0.5] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `grayscale-(<custom-property>)` syntax:

```cpp
<img class="grayscale-(--my-grayscale) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `grayscale-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/filter-grayscale#responsive-design)

Prefix a `filter: grayscale()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```cpp
<img class="grayscale md:grayscale-0 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).