Utilities for controlling the duration of CSS transitions.

## [Examples](https://tailwindcss.com/docs/transition-duration#examples)

### [Basic example](https://tailwindcss.com/docs/transition-duration#basic-example)

Use utilities like `duration-150` and `duration-700` to set the transition duration of an element in milliseconds:

Hover each button to see the expected behavior

duration-150

duration-300

duration-700

```php-template
<button class="transition duration-150 ease-in-out ...">Button A</button><button class="transition duration-300 ease-in-out ...">Button B</button><button class="transition duration-700 ease-in-out ...">Button C</button>
```

### [Supporting reduced motion](https://tailwindcss.com/docs/transition-duration#supporting-reduced-motion)

For situations where the user has specified that they prefer reduced motion, you can conditionally apply animations and transitions using the `motion-safe` and `motion-reduce` variants:

```php-template
<button type="button" class="duration-300 motion-reduce:duration-0 ...">  <!-- ... --></button>
```

### [Using a custom value](https://tailwindcss.com/docs/transition-duration#using-a-custom-value)

Use the `duration-[<value>]` syntax to set the transition duration based on a completely custom value:

```php-template
<button class="duration-[1s,15s] ...">  <!-- ... --></button>
```

For CSS variables, you can also use the `duration-(<custom-property>)` syntax:

```php-template
<button class="duration-(--my-duration) ...">  <!-- ... --></button>
```

This is just a shorthand for `duration-[var(<custom-property>)]` that adds the `var()` function for you automatically.

### [Responsive design](https://tailwindcss.com/docs/transition-duration#responsive-design)

Prefix a `transition-duration` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<button class="duration-0 md:duration-150 ...">  <!-- ... --></button>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).