## [Examples](https://tailwindcss.com/docs/border-collapse#examples)

### [Collapsing table borders](https://tailwindcss.com/docs/border-collapse#collapsing-table-borders)

Use the `border-collapse` utility to combine adjacent cell borders into a single border when possible:

|  State   |     City     |
|----------|--------------|
| Indiana  | Indianapolis |
|   Ohio   |   Columbus   |
| Michigan |   Detroit    |

```php-template
<table class="border-collapse border border-gray-400 ...">  <thead>    <tr>      <th class="border border-gray-300 ...">State</th>      <th class="border border-gray-300 ...">City</th>    </tr>  </thead>  <tbody>    <tr>      <td class="border border-gray-300 ...">Indiana</td>      <td class="border border-gray-300 ...">Indianapolis</td>    </tr>    <tr>      <td class="border border-gray-300 ...">Ohio</td>      <td class="border border-gray-300 ...">Columbus</td>    </tr>    <tr>      <td class="border border-gray-300 ...">Michigan</td>      <td class="border border-gray-300 ...">Detroit</td>    </tr>  </tbody></table>
```

Note that this includes collapsing borders on the top-level `<table>` tag.

### [Separating table borders](https://tailwindcss.com/docs/border-collapse#separating-table-borders)

Use the `border-separate` utility to force each cell to display its own separate borders:

|  State   |     City     |
|----------|--------------|
| Indiana  | Indianapolis |
|   Ohio   |   Columbus   |
| Michigan |   Detroit    |

```php-template
<table class="border-separate border border-gray-400 ...">  <thead>    <tr>      <th class="border border-gray-300 ...">State</th>      <th class="border border-gray-300 ...">City</th>    </tr>  </thead>  <tbody>    <tr>      <td class="border border-gray-300 ...">Indiana</td>      <td class="border border-gray-300 ...">Indianapolis</td>    </tr>    <tr>      <td class="border border-gray-300 ...">Ohio</td>      <td class="border border-gray-300 ...">Columbus</td>    </tr>    <tr>      <td class="border border-gray-300 ...">Michigan</td>      <td class="border border-gray-300 ...">Detroit</td>    </tr>  </tbody></table>
```

### [Responsive design](https://tailwindcss.com/docs/border-collapse#responsive-design)

Prefix a `border-collapse` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<table class="border-collapse md:border-separate ...">  <!-- ... --></table>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).