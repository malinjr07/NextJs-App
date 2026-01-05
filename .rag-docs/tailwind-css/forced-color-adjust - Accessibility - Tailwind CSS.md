Utilities for opting in and out of forced colors.

## [Examples](https://tailwindcss.com/docs/forced-color-adjust#examples)

### [Opting out of forced colors](https://tailwindcss.com/docs/forced-color-adjust#opting-out-of-forced-colors)

Use the `forced-color-adjust-none` utility to opt an element out of the colors enforced by forced colors mode. This is useful in situations where enforcing a limited color palette will degrade usability.

Try emulating \`forced-colors: active\` in your developer tools to see the changes

![Two each of gray, white, and black shirts laying flat.](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ft-shirt.2fa4f9c3.jpg&w=3840&q=75)

Basic Tee

$35

```php-template
<form>  <img src="/img/shirt.jpg" />  <div>    <h3>Basic Tee</h3>    <h3>$35</h3>    <fieldset>      <legend class="sr-only">Choose a color</legend>      <div class="forced-color-adjust-none ...">        <label>          <input class="sr-only" type="radio" name="color-choice" value="White" />          <span class="sr-only">White</span>          <span class="size-6 rounded-full border border-black/10 bg-white"></span>        </label>        <!-- ... -->      </div>    </fieldset>  </div></form>
```

You can also use the [forced colors variant](https://tailwindcss.com/docs/hover-focus-and-other-states#forced-colors) to conditionally add styles when the user has enabled a forced color mode.

### [Restoring forced colors](https://tailwindcss.com/docs/forced-color-adjust#restoring-forced-colors)

Use the `forced-color-adjust-auto` utility to make an element adhere to colors enforced by forced colors mode:

```php-template
<form>  <fieldset class="forced-color-adjust-none lg:forced-color-adjust-auto ...">    <legend>Choose a color:</legend>    <select class="hidden lg:block">      <option value="White">White</option>      <option value="Gray">Gray</option>      <option value="Black">Black</option>    </select>    <div class="lg:hidden">      <label>        <input class="sr-only" type="radio" name="color-choice" value="White" />        <!-- ... -->      </label>      <!-- ... -->    </div>  </fieldset></form>
```

This can be useful if you want to undo the `forced-color-adjust-none` utility, for example on a larger screen size.

### [Responsive design](https://tailwindcss.com/docs/forced-color-adjust#responsive-design)

Prefix a `forced-color-adjust` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="forced-color-adjust-none md:forced-color-adjust-auto ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).