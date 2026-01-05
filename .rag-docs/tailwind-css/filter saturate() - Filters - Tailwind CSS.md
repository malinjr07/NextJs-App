Utilities for applying saturation filters to an element.

## [Examples](https://tailwindcss.com/docs/filter-saturate#examples)

### [Basic example](https://tailwindcss.com/docs/filter-saturate#basic-example)

Use utilities like `saturate-50` and `saturate-100` to control an element's saturation:

```cpp
<img class="saturate-50 ..." src="/img/mountains.jpg" /><img class="saturate-100 ..." src="/img/mountains.jpg" /><img class="saturate-150 ..." src="/img/mountains.jpg" /><img class="saturate-200 ..." src="/img/mountains.jpg" />
```

### [Using a custom value](https://tailwindcss.com/docs/filter-saturate#using-a-custom-value)

Use the `saturate-[<value>]` syntax to set the saturation based on a completely custom value:

```cpp
<img class="saturate-[.25] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `saturate-(<custom-property>)` syntax:

```cpp
<img class="saturate-(--my-saturation) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `saturate-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/filter-saturate#responsive-design)

Prefix a `filter: saturate()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```cpp
<img class="saturate-50 md:saturate-150 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).