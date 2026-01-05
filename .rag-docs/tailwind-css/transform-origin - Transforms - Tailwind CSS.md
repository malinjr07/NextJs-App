Utilities for specifying the origin for an element's transformations.

## [Examples](https://tailwindcss.com/docs/transform-origin#examples)

### [Basic example](https://tailwindcss.com/docs/transform-origin#basic-example)

Use utilities like `origin-top` and `origin-bottom-left` to set an element's transform origin:

```cpp
<img class="origin-center rotate-45 ..." src="/img/mountains.jpg" /><img class="origin-top-left rotate-12 ..." src="/img/mountains.jpg" /><img class="origin-bottom -rotate-12 ..." src="/img/mountains.jpg" />
```

### [Using a custom value](https://tailwindcss.com/docs/transform-origin#using-a-custom-value)

Use the `origin-[<value>]` syntax to set the transform origin based on a completely custom value:

```cpp
<img class="origin-[33%_75%] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `origin-(<custom-property>)` syntax:

```cpp
<img class="origin-(--my-transform-origin) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `origin-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/transform-origin#responsive-design)

Prefix a `transform-origin` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```cpp
<img class="origin-center md:origin-top ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).