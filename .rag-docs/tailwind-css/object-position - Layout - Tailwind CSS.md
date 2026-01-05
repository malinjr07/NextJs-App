Utilities for controlling how a replaced element's content should be positioned within its container.

## [Examples](https://tailwindcss.com/docs/object-position#examples)

### [Basic example](https://tailwindcss.com/docs/object-position#basic-example)

Use utilities like `object-left` and `object-bottom-right` to specify how a replaced element's content should be positioned within its container:

Hover over examples to see the full image

```javascript
<img class="size-24 object-top-left ..." src="/img/mountains.jpg" /><img class="size-24 object-top ..." src="/img/mountains.jpg" /><img class="size-24 object-top-right ..." src="/img/mountains.jpg" /><img class="size-24 object-left ..." src="/img/mountains.jpg" /><img class="size-24 object-center ..." src="/img/mountains.jpg" /><img class="size-24 object-right ..." src="/img/mountains.jpg" /><img class="size-24 object-bottom-left ..." src="/img/mountains.jpg" /><img class="size-24 object-bottom ..." src="/img/mountains.jpg" /><img class="size-24 object-bottom-right ..." src="/img/mountains.jpg" />
```

### [Using a custom value](https://tailwindcss.com/docs/object-position#using-a-custom-value)

Use the `object-[<value>]` syntax to set the object position based on a completely custom value:

```cpp
<img class="object-[25%_75%] ..." src="/img/mountains.jpg" />
```

For CSS variables, you can also use the `object-(<custom-property>)` syntax:

```cpp
<img class="object-(--my-object) ..." src="/img/mountains.jpg" />
```

This is just a shorthand for `object-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/object-position#responsive-design)

Prefix an `object-position` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```cpp
<img class="object-center md:object-top ..." src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).