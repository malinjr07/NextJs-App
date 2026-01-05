Utilities for applying contrast filters to an element.

## [Examples](https://tailwindcss.com/docs/filter-contrast#examples)

### [Basic example](https://tailwindcss.com/docs/filter-contrast#basic-example)

Use utilities like `contrast-50` and `contrast-100` to control an element's contrast:

```cpp
<img class="contrast-50 ..." src="/img/mountains.jpg" /><img class="contrast-100 ..." src="/img/mountains.jpg" /><img class="contrast-125 ..." src="/img/mountains.jpg" /><img class="contrast-200 ..." src="/img/mountains.jpg" />
```

### [Using a custom value](https://tailwindcss.com/docs/filter-contrast#using-a-custom-value)

Use the `contrast-[<value>]` syntax to set the contrast based on a completely custom value:

```cpp
<img class="contrast-[.25] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `contrast-(<custom-property>)` syntax:

```cpp
<img class="contrast-(--my-contrast) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `contrast-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/filter-contrast#responsive-design)

Prefix a `filter: contrast()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```cpp
<img class="contrast-125 md:contrast-150 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).