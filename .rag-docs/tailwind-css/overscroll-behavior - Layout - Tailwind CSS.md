Utilities for controlling how the browser behaves when reaching the boundary of a scrolling area.

## [Examples](https://tailwindcss.com/docs/overscroll-behavior#examples)

### [Preventing parent overscrolling](https://tailwindcss.com/docs/overscroll-behavior#preventing-parent-overscrolling)

Use the `overscroll-contain` utility to prevent scrolling in the target area from triggering scrolling in the parent element, but preserve "bounce" effects when scrolling past the end of the container in operating systems that support it:

Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.

Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.

Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?

```vbnet
<div class="overscroll-contain ...">Well, let me tell you something, ...</div>
```

### [Preventing overscroll bouncing](https://tailwindcss.com/docs/overscroll-behavior#preventing-overscroll-bouncing)

Use the `overscroll-none` utility to prevent scrolling in the target area from triggering scrolling in the parent element, and also prevent "bounce" effects when scrolling past the end of the container:

Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.

Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.

Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?

```vbnet
<div class="overscroll-none ...">Well, let me tell you something, ...</div>
```

### [Using the default overscroll behavior](https://tailwindcss.com/docs/overscroll-behavior#using-the-default-overscroll-behavior)

Use the `overscroll-auto` utility to make it possible for the user to continue scrolling a parent scroll area when they reach the boundary of the primary scroll area:

Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New York Public Library"? Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.

Sure, go ahead, laugh if you want to. I've seen your type before: Flashy, making the scene, flaunting convention. Yeah, I know what you're thinking. What's this guy making such a big stink about old library books? Well, let me give you a hint, junior.

Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better?

```vbnet
<div class="overscroll-auto ...">Well, let me tell you something, ...</div>
```

### [Responsive design](https://tailwindcss.com/docs/overscroll-behavior#responsive-design)

Prefix an `overscroll-behavior` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<div class="overscroll-auto md:overscroll-contain ...">  <!-- ... --></div>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).