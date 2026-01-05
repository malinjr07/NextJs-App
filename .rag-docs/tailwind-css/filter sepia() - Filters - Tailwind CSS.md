Utilities for applying sepia filters to an element.

## [Examples](https://tailwindcss.com/docs/filter-sepia#examples)

### [Basic example](https://tailwindcss.com/docs/filter-sepia#basic-example)

Use utilities like `sepia` and `sepia-50` to control the sepia effect applied to an element:

```cpp
<img class="sepia-0" src="/img/mountains.jpg" /><img class="sepia-50" src="/img/mountains.jpg" /><img class="sepia" src="/img/mountains.jpg" />
```

### [Using a custom value](https://tailwindcss.com/docs/filter-sepia#using-a-custom-value)

Use the `sepia-[<value>]` syntax to set the sepia amount based on a completely custom value:

```cpp
<img class="sepia-[.25] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `sepia-(<custom-property>)` syntax:

```cpp
<img class="sepia-(--my-sepia) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `sepia-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/filter-sepia#responsive-design)

Prefix a `filter: sepia()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```cpp
<img class="sepia md:sepia-0 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).