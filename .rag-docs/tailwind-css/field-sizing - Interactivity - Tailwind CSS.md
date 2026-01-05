Utilities for controlling the sizing of form controls.

|        Class         |         Styles         |
|----------------------|------------------------|
|  `field-sizing-fixed`  |  `field-sizing: fixed;`  |
| `field-sizing-content` | `field-sizing: content;` |

## [Examples](https://tailwindcss.com/docs/field-sizing#examples)

### [Sizing based on content](https://tailwindcss.com/docs/field-sizing#sizing-based-on-content)

Use the `field-sizing-content` utility to allow a form control to adjust it's size based on the content:

Type in the input below to see the size change

```php-template
<textarea class="field-sizing-content ..." rows="2">  Latex Salesman, Vanderlay Industries</textarea>
```

### [Using a fixed size](https://tailwindcss.com/docs/field-sizing#using-a-fixed-size)

Use the `field-sizing-fixed` utility to make a form control use a fixed size:

Type in the input below to see the size remain the same

```php-template
<textarea class="field-sizing-fixed w-80 ..." rows="2">  Latex Salesman, Vanderlay Industries</textarea>
```

### [Responsive design](https://tailwindcss.com/docs/field-sizing#responsive-design)

Prefix a `field-sizing` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```python
<input class="field-sizing-content md:field-sizing-fixed ..." />
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).