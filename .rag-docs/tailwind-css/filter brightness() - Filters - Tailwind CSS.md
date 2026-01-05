Utilities for applying brightness filters to an element.

## [Examples](https://tailwindcss.com/docs/filter-brightness#examples)

### [Basic example](https://tailwindcss.com/docs/filter-brightness#basic-example)

Use utilities like `brightness-50` and `brightness-100` to control an element's brightness:

```cpp
<img class="brightness-50 ..." src="/img/mountains.jpg" /><img class="brightness-100 ..." src="/img/mountains.jpg" /><img class="brightness-125 ..." src="/img/mountains.jpg" /><img class="brightness-200 ..." src="/img/mountains.jpg" />
```

### [Using a custom value](https://tailwindcss.com/docs/filter-brightness#using-a-custom-value)

Use the `brightness-[<value>]` syntax to set the brightness based on a completely custom value:

```cpp
<img class="brightness-[1.75] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `brightness-(<custom-property>)` syntax:

```cpp
<img class="brightness-(--my-brightness) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `brightness-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/filter-brightness#responsive-design)

Prefix a `filter: brightness()` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```cpp
<img class="brightness-110 md:brightness-150 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).