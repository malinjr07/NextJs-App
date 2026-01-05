Utilities for controlling the position of bullets and numbers in lists.

## [Examples](https://tailwindcss.com/docs/list-style-position#examples)

### [Basic example](https://tailwindcss.com/docs/list-style-position#basic-example)

Use utilities like `list-inside` and `list-outside` to control the position of the markers and text indentation in a list:

list-inside

-   5 cups chopped Porcini mushrooms
-   1/2 cup of olive oil
-   3lb of celery

list-outside

-   5 cups chopped Porcini mushrooms
-   1/2 cup of olive oil
-   3lb of celery

```php-template
<ul class="list-inside">  <li>5 cups chopped Porcini mushrooms</li>  <!-- ... --></ul><ul class="list-outside">  <li>5 cups chopped Porcini mushrooms</li>  <!-- ... --></ul>
```

### [Responsive design](https://tailwindcss.com/docs/list-style-position#responsive-design)

Prefix a `list-style-position` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<ul class="list-outside md:list-inside ...">  <!-- ... --></ul>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).