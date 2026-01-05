Utilities for controlling the variant of numbers.

## [Examples](https://tailwindcss.com/docs/font-variant-numeric#examples)

### [Using ordinal glyphs](https://tailwindcss.com/docs/font-variant-numeric#using-ordinal-glyphs)

Use the `ordinal` utility to enable special glyphs for the ordinal markers in fonts that support them:

1st

```php-template
<p class="ordinal ...">1st</p>
```

### [Using slashed zeroes](https://tailwindcss.com/docs/font-variant-numeric#using-slashed-zeroes)

Use the `slashed-zero` utility to force a zero with a slash in fonts that support them:

0

```php-template
<p class="slashed-zero ...">0</p>
```

### [Using lining figures](https://tailwindcss.com/docs/font-variant-numeric#using-lining-figures)

Use the `lining-nums` utility to use numeric glyphs that are aligned by their baseline in fonts that support them:

1234567890

```php-template
<p class="lining-nums ...">1234567890</p>
```

### [Using oldstyle figures](https://tailwindcss.com/docs/font-variant-numeric#using-oldstyle-figures)

Use the `oldstyle-nums` utility to use numeric glyphs where some numbers have descenders in fonts that support them:

1234567890

```php-template
<p class="oldstyle-nums ...">1234567890</p>
```

### [Using proportional figures](https://tailwindcss.com/docs/font-variant-numeric#using-proportional-figures)

Use the `proportional-nums` utility to use numeric glyphs that have proportional widths in fonts that support them:

12121

90909

```php-template
<p class="proportional-nums ...">12121</p><p class="proportional-nums ...">90909</p>
```

### [Using tabular figures](https://tailwindcss.com/docs/font-variant-numeric#using-tabular-figures)

Use the `tabular-nums` utility to use numeric glyphs that have uniform/tabular widths in fonts that support them:

12121

90909

```php-template
<p class="tabular-nums ...">12121</p><p class="tabular-nums ...">90909</p>
```

### [Using diagonal fractions](https://tailwindcss.com/docs/font-variant-numeric#using-diagonal-fractions)

Use the `diagonal-fractions` utility to replace numbers separated by a slash with common diagonal fractions in fonts that support them:

1/2 3/4 5/6

```swift
<p class="diagonal-fractions ...">1/2 3/4 5/6</p>
```

### [Using stacked fractions](https://tailwindcss.com/docs/font-variant-numeric#using-stacked-fractions)

Use the `stacked-fractions` utility to replace numbers separated by a slash with common stacked fractions in fonts that support them:

1/2 3/4 5/6

```swift
<p class="stacked-fractions ...">1/2 3/4 5/6</p>
```

### [Stacking multiple utilities](https://tailwindcss.com/docs/font-variant-numeric#stacking-multiple-utilities)

The `font-variant-numeric` utilities are composable so you can enable multiple variants by combining them:

Subtotal

$100.00

Tax

$14.50

Total

$114.50

```php-template
<dl class="...">  <dt class="...">Subtotal</dt>  <dd class="text-right slashed-zero tabular-nums ...">$100.00</dd>  <dt class="...">Tax</dt>  <dd class="text-right slashed-zero tabular-nums ...">$14.50</dd>  <dt class="...">Total</dt>  <dd class="text-right slashed-zero tabular-nums ...">$114.50</dd></dl>
```

### [Resetting numeric font variants](https://tailwindcss.com/docs/font-variant-numeric#resetting-numeric-font-variants)

Use the `normal-nums` property to reset numeric font variants:

```php-template
<p class="slashed-zero tabular-nums md:normal-nums ...">  <!-- ... --></p>
```

### [Responsive design](https://tailwindcss.com/docs/font-variant-numeric#responsive-design)

Prefix a `font-variant-numeric` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<p class="proportional-nums md:tabular-nums ...">  Lorem ipsum dolor sit amet...</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).