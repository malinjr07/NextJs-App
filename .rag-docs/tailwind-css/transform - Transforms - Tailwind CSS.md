Utilities for transforming elements.

## [Examples](https://tailwindcss.com/docs/transform#examples)

### [Hardware acceleration](https://tailwindcss.com/docs/transform#hardware-acceleration)

If your transition performs better when rendered by the GPU instead of the CPU, you can force hardware acceleration by adding the `transform-gpu` utility:

```php-template
<div class="scale-150 transform-gpu">  <!-- ... --></div>
```

Use the `transform-cpu` utility to force things back to the CPU if you need to undo this conditionally.

### [Removing transforms](https://tailwindcss.com/docs/transform#removing-transforms)

Use the `transform-none` utility to remove all of the transforms on an element at once:

```php-template
<div class="skew-y-3 md:transform-none">  <!-- ... --></div>
```

### [Using a custom value](https://tailwindcss.com/docs/transform#using-a-custom-value)

Use the `transform-[<value>]` syntax to set the transform based on a completely custom value:

```php-template
<div class="transform-[matrix(1,2,3,4,5,6)] ...">  <!-- ... --></div>
```

For CSS variables, you can also use the `transform-(<custom-property>)` syntax:

```php-template
<div class="transform-(--my-transform) ...">  <!-- ... --></div>
```

This is just a shorthand for `transform-[var(<custom-property>)]` that adds the `var()` function for you automatically.