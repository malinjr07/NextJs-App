Utilities for scaling elements.

## [Examples](https://tailwindcss.com/docs/scale#examples)

### [Basic example](https://tailwindcss.com/docs/scale#basic-example)

Use `scale-<number>` utilities like `scale-75` and `scale-150` to scale an element by a percentage of its original size:

```cpp
<img class="scale-75 ..." src="/img/mountains.jpg" /><img class="scale-100 ..." src="/img/mountains.jpg" /><img class="scale-125 ..." src="/img/mountains.jpg" />
```

### [Scaling on the x-axis](https://tailwindcss.com/docs/scale#scaling-on-the-x-axis)

Use the `scale-x-<number>` utilities like `scale-x-75` and `-scale-x-150` to scale an element on the x-axis by a percentage of its original width:

```cpp
<img class="scale-x-75 ..." src="/img/mountains.jpg" /><img class="scale-x-100 ..." src="/img/mountains.jpg" /><img class="scale-x-125 ..." src="/img/mountains.jpg" />
```

### [Scaling on the y-axis](https://tailwindcss.com/docs/scale#scaling-on-the-y-axis)

Use the `scale-y-<number>` utilities like `scale-y-75` and `scale-y-150` to scale an element on the y-axis by a percentage of its original height:

```cpp
<img class="scale-y-75 ..." src="/img/mountains.jpg" /><img class="scale-y-100 ..." src="/img/mountains.jpg" /><img class="scale-y-125 ..." src="/img/mountains.jpg" />
```

### [Using negative values](https://tailwindcss.com/docs/scale#using-negative-values)

Use `-scale-<number>`, `-scale-x-<number>` or `-scale-y-<number>` utilities like `-scale-x-75` and `-scale-125` to mirror and scale down an element by a percentage of its original size:

```cpp
<img class="-scale-x-75 ..." src="/img/mountains.jpg" /><img class="-scale-100 ..." src="/img/mountains.jpg" /><img class="-scale-y-125 ..." src="/img/mountains.jpg" />
```

### [Using a custom value](https://tailwindcss.com/docs/scale#using-a-custom-value)

Use the `scale-[<value>]` syntax to set the scale based on a completely custom value:

```cpp
<img class="scale-[1.7] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `scale-(<custom-property>)` syntax:

```cpp
<img class="scale-(--my-scale) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `scale-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Applying on hover](https://tailwindcss.com/docs/scale#applying-on-hover)

Prefix a `scale` utility with a variant like `hover:*` to only apply the utility in that state:

```cpp
<img class="scale-95 hover:scale-120 ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).