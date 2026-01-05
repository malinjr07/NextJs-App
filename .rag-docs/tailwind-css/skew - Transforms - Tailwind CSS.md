Utilities for skewing elements with transform.

## [Examples](https://tailwindcss.com/docs/skew#examples)

### [Basic example](https://tailwindcss.com/docs/skew#basic-example)

Use `skew-<number>` utilities like `skew-4` and `skew-10` to skew an element on both axes:

```cpp
<img class="skew-3 ..." src="/img/mountains.jpg" /><img class="skew-6 ..." src="/img/mountains.jpg" /><img class="skew-12 ..." src="/img/mountains.jpg" />
```

### [Using negative values](https://tailwindcss.com/docs/skew#using-negative-values)

Use `-skew-<number>` utilities like `-skew-4` and `-skew-10` to skew an element on both axes:

```cpp
<img class="-skew-3 ..." src="/img/mountains.jpg" /><img class="-skew-6 ..." src="/img/mountains.jpg" /><img class="-skew-12 ..." src="/img/mountains.jpg" />
```

### [Skewing on the x-axis](https://tailwindcss.com/docs/skew#skewing-on-the-x-axis)

Use `skew-x-<number>` utilities like `skew-x-4` and `-skew-x-10` to skew an element on the x-axis:

```cpp
<img class="-skew-x-12 ..." src="/img/mountains.jpg" /><img class="skew-x-6 ..." src="/img/mountains.jpg" /><img class="skew-x-12 ..." src="/img/mountains.jpg" />
```

### [Skewing on the y-axis](https://tailwindcss.com/docs/skew#skewing-on-the-y-axis)

Use `skew-y-<number>` utilities like `skew-y-4` and `-skew-y-10` to skew an element on the y-axis:

```cpp
<img class="-skew-y-12 ..." src="/img/mountains.jpg" /><img class="skew-y-6 ..." src="/img/mountains.jpg" /><img class="skew-y-12 ..." src="/img/mountains.jpg" />
```

### [Using a custom value](https://tailwindcss.com/docs/skew#using-a-custom-value)

Use the `skew-[<value>]` syntax to set the skew based on a completely custom value:

```cpp
<img class="skew-[3.142rad] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `skew-(<custom-property>)` syntax:

```cpp
<img class="skew-(--my-skew) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `skew-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/skew#responsive-design)

Prefix `skewX()` and `skewY()` utilities with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```cpp
<img class="skew-3 md:skew-12 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).