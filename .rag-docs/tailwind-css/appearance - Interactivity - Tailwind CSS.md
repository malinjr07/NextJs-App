Utilities for suppressing native form control styling.

|      Class      |      Styles       |
|-----------------|-------------------|
| `appearance-none` | `appearance: none;` |
| `appearance-auto` | `appearance: auto;` |

## [Examples](https://tailwindcss.com/docs/appearance#examples)

### [Removing default appearance](https://tailwindcss.com/docs/appearance#removing-default-appearance)

Use `appearance-none` to reset any browser specific styling on an element:

Default browser styles applied

Remove default browser styles

```php-template
<select>  <option>Yes</option>  <option>No</option>  <option>Maybe</option></select><div class="grid">  <select class="col-start-1 row-start-1 appearance-none bg-gray-50 dark:bg-gray-800 ...">    <option>Yes</option>    <option>No</option>    <option>Maybe</option>  </select>  <svg class="pointer-events-none col-start-1 row-start-1 ...">    <!-- ... -->  </svg></div>
```

This utility is often used when creating custom form components.

### [Restoring default appearance](https://tailwindcss.com/docs/appearance#restoring-default-appearance)

Use `appearance-auto` to restore the default browser specific styling on an element:

Try emulating \`forced-colors: active\` in your developer tools to see the difference

Falls back to default appearance

Keeps custom appearance

```php-template
<label>  <div>    <input type="checkbox" class="appearance-none forced-colors:appearance-auto ..." />    <svg class="invisible peer-checked:visible forced-colors:hidden ...">      <!-- ... -->    </svg>  </div>  Falls back to default appearance</label><label>  <div>    <input type="checkbox" class="appearance-none ..." />    <svg class="invisible peer-checked:visible ...">      <!-- ... -->    </svg>  </div>  Keeps custom appearance</label>
```

This is useful for reverting to the standard browser controls in certain accessibility modes.

### [Responsive design](https://tailwindcss.com/docs/appearance#responsive-design)

Prefix an `appearance` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<select class="appearance-auto md:appearance-none ...">  <!-- ... --></select>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).