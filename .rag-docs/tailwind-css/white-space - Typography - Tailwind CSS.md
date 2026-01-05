Utilities for controlling an element's white-space property.

## [Examples](https://tailwindcss.com/docs/white-space#examples)

### [Normal](https://tailwindcss.com/docs/white-space#normal)

Use the `whitespace-normal` utility to cause text to wrap normally within an element. Newlines and spaces will be collapsed:

Hey everyone! It’s almost 2022 and we still don’t know if there are aliens living among us, or do we? Maybe the person writing this is an alien. You will never know.

```kotlin
<p class="whitespace-normal">Hey everyone!It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

### [No Wrap](https://tailwindcss.com/docs/white-space#no-wrap)

Use the `whitespace-nowrap` utility to prevent text from wrapping within an element. Newlines and spaces will be collapsed:

Hey everyone! It’s almost 2022 and we still don’t know if there are aliens living among us, or do we? Maybe the person writing this is an alien. You will never know.

```kotlin
<p class="overflow-auto whitespace-nowrap">Hey everyone!It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

### [Pre](https://tailwindcss.com/docs/white-space#pre)

Use the `whitespace-pre` utility to preserve newlines and spaces within an element. Text will not be wrapped:

Hey everyone! It’s almost 2022 and we still don’t know if there are aliens living among us, or do we? Maybe the person writing this is an alien. You will never know.

```kotlin
<p class="overflow-auto whitespace-pre">Hey everyone!It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

### [Pre Line](https://tailwindcss.com/docs/white-space#pre-line)

Use the `whitespace-pre-line` utility to preserve newlines but not spaces within an element. Text will be wrapped normally:

Hey everyone! It’s almost 2022 and we still don’t know if there are aliens living among us, or do we? Maybe the person writing this is an alien. You will never know.

```kotlin
<p class="whitespace-pre-line">Hey everyone!It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

### [Pre Wrap](https://tailwindcss.com/docs/white-space#pre-wrap)

Use the `whitespace-pre-wrap` utility to preserve newlines and spaces within an element. Text will be wrapped normally:

Hey everyone! It’s almost 2022 and we still don’t know if there are aliens living among us, or do we? Maybe the person writing this is an alien. You will never know.

```kotlin
<p class="whitespace-pre-wrap">Hey everyone!It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

### [Break Spaces](https://tailwindcss.com/docs/white-space#break-spaces)

Use the `whitespace-break-spaces` utility to preserve newlines and spaces within an element. White space at the end of lines will not hang, but will wrap to the next line:

Hey everyone! It’s almost 2022 and we still don’t know if there are aliens living among us, or do we? Maybe the person writing this is an alien. You will never know.

```kotlin
<p class="whitespace-break-spaces">Hey everyone!It's almost 2022       and we still don't know if there             are aliens living among us, or do we? Maybe the person writing this is an alien.You will never know.</p>
```

### [Responsive design](https://tailwindcss.com/docs/white-space#responsive-design)

Prefix a `white-space` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<p class="whitespace-pre md:whitespace-normal ...">  Lorem ipsum dolor sit amet...</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).