Utilities for controlling how a replaced element's content should be resized.

## [Examples](https://tailwindcss.com/docs/object-fit#examples)

### [Resizing to cover](https://tailwindcss.com/docs/object-fit#resizing-to-cover)

Use the `object-cover` utility to resize an element's content to cover its container:

![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```cpp
<img class="h-48 w-96 object-cover ..." src="/img/mountains.jpg" />
```

### [Containing within](https://tailwindcss.com/docs/object-fit#containing-within)

Use the `object-contain` utility to resize an element's content to stay contained within its container:

![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```cpp
<img class="h-48 w-96 object-contain ..." src="/img/mountains.jpg" />
```

### [Stretching to fit](https://tailwindcss.com/docs/object-fit#stretching-to-fit)

Use the `object-fill` utility to stretch an element's content to fit its container:

![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```cpp
<img class="h-48 w-96 object-fill ..." src="/img/mountains.jpg" />
```

### [Scaling down](https://tailwindcss.com/docs/object-fit#scaling-down)

Use the `object-scale-down` utility to display an element's content at its original size but scale it down to fit its container if necessary:

![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=160&q=80)

```cpp
<img class="h-48 w-96 object-scale-down ..." src="/img/mountains.jpg" />
```

### [Using the original size](https://tailwindcss.com/docs/object-fit#using-the-original-size)

Use the `object-none` utility to display an element's content at its original size ignoring the container size:

![](https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=90)

```cpp
<img class="h-48 w-96 object-none ..." src="/img/mountains.jpg" />
```

### [Responsive design](https://tailwindcss.com/docs/object-fit#responsive-design)

Prefix an `object-fit` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```cpp
<img class="object-contain md:object-cover" src="/img/mountains.jpg" />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).