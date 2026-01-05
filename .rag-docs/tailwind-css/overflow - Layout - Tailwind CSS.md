Utilities for controlling how an element handles content that is too large for the container.

## [Examples](https://tailwindcss.com/docs/overflow#examples)

### [Showing content that overflows](https://tailwindcss.com/docs/overflow#showing-content-that-overflows)

Use the `overflow-visible` utility to prevent content within an element from being clipped:

![](https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)

**Andrew Alfred**Technical advisor

```php-template
<div class="overflow-visible ...">  <!-- ... --></div>
```

Note that any content that overflows the bounds of the element will then be visible.

### [Hiding content that overflows](https://tailwindcss.com/docs/overflow#hiding-content-that-overflows)

Use the `overflow-hidden` utility to clip any content within an element that overflows the bounds of that element:

```php-template
<div class="overflow-hidden ...">  <!-- ... --></div>
```

### [Scrolling if needed](https://tailwindcss.com/docs/overflow#scrolling-if-needed)

Use the `overflow-auto` utility to add scrollbars to an element in the event that its content overflows the bounds of that element:

![](https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)

**Andrew Alfred**Technical advisor

![](https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)

**Debra Houston**Analyst

![](https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)

**Jane White**Director, Marketing

![](https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)

**Ray Flint**Technical Advisor

```php-template
<div class="overflow-auto ...">  <!-- ... --></div>
```

Unlike `overflow-scroll`, which always shows scrollbars, this utility will only show them if scrolling is necessary.

### [Scrolling horizontally if needed](https://tailwindcss.com/docs/overflow#scrolling-horizontally-if-needed)

Use the `overflow-x-auto` utility to allow horizontal scrolling if needed:

![](https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Andrew**

![](https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Emily**

![](https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Whitney**

![](https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**David**

![](https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Kristin**

![](https://images.unsplash.com/photo-1605405748313-a416a1b84491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)**Sarah**

```php-template
<div class="overflow-x-auto ...">  <!-- ... --></div>
```

### [Scrolling vertically if needed](https://tailwindcss.com/docs/overflow#scrolling-vertically-if-needed)

Use the `overflow-y-auto` utility to allow vertical scrolling if needed:

![](https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)

**Andrew Alfred**Technical advisor

![](https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)

**Debra Houston**Analyst

![](https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)

**Jane White**Director, Marketing

![](https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80)

**Ray Flint**Technical Advisor

```php-template
<div class="h-32 overflow-y-auto ...">  <!-- ... --></div>
```

### [Scrolling horizontally always](https://tailwindcss.com/docs/overflow#scrolling-horizontally-always)

Use the `overflow-x-scroll` utility to allow horizontal scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system:

```php-template
<div class="overflow-x-scroll ...">  <!-- ... --></div>
```

### [Scrolling vertically always](https://tailwindcss.com/docs/overflow#scrolling-vertically-always)

Use the `overflow-y-scroll` utility to allow vertical scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system:

```php-template
<div class="overflow-y-scroll ...">  <!-- ... --></div>
```

### [Scrolling in all directions](https://tailwindcss.com/docs/overflow#scrolling-in-all-directions)

Use the `overflow-scroll` utility to add scrollbars to an element:

Scroll vertically and horizontally

```php-template
<div class="overflow-scroll ...">  <!-- ... --></div>
```

Unlike `overflow-auto`, which only shows scrollbars if they are necessary, this utility always shows them. Note that some operating systems (like macOS) hide unnecessary scrollbars regardless of this setting.

### [Responsive design](https://tailwindcss.com/docs/overflow#responsive-design)

Prefix an `overflow` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="overflow-auto md:overflow-scroll ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).