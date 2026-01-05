## ScrollSmoother.create

### ScrollSmoother.create( ) ;

### Details[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/static.create()/#details "Direct link to Details")

Creates (and returns) a new ScrollSmoother instance. There can only be one, of course, at any given time because it's controlling the scroll of the root page. If a ScrollSmoother instance already exists, its [kill()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/kill()) method will be called before creating the new one in the `ScrollSmoother.create()` call. If you want to get a reference to the ScrollSmoother that was already created, use the [ScrollSmoother.get()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/static.get()) method.

## Setup[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/static.create()/#setup "Direct link to Setup")

Your HTML content should reside in a single `content` element (usually a`<div>`but it doesn't really matter) - that's what gets moved around when the user scrolls. That `content` element is wrapped in a `wrapper` element that serves as the viewport. The actual scrollbar remains on the `<body>`, so your setup would look like:

```php-template
<body>  <div id="smooth-wrapper">    <div id="smooth-content">      <!--- ALL YOUR CONTENT HERE --->    </div>  </div></body>
```

Under the hood, everything flows through [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger) which watches the page's native scroll position and then ScrollSmoother applies transforms to the `content` to gradually catch up with that scroll position. So if you suddenly drag the native scrollbar 500px, ScrollSmoother will gradually move the content to that spot using inline CSS transforms (`matrix3d()`) on the `content`. Since ScrollSmoother is built on top of ScrollTrigger, don't forget to register them both:

```scss
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
```

## Usage & special properties[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/static.create()/#usage--special-properties "Direct link to Usage & special properties")

The configuration object can have any of the following optional properties:

## Speed (parallax)[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/static.create()/#speed-parallax "Direct link to Speed (parallax)")

When you set `effects: true`, ScrollSmoother finds all elements that have a `data-speed` attribute and applies a parallax effect accordingly so that they move at the designated speed. For example:

```php-template
<div data-speed="0.5"></div> <!-- half-speed of scroll --><div data-speed="2"></div> <!-- double-speed of scroll --><div data-speed="1"></div> <!-- normal speed of scroll --><div data-speed="auto"></div> <!-- auto-calculated based on how far it can move inside its container -->
```

### "auto" speed[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/static.create()/#auto-speed "Direct link to "auto" speed")

When you set the speed to `"auto"`, it will calculate how far it can move inside its **parent container** in the direction of the largest gap (up or down). So it's perfect for parallax effects - just make the child larger than its parent, align it where you want it (typically its top edge at the top of the container, or the bottom edge at the bottom of the container) and let ScrollSmoother do its magic. Obviously set `overflow: hidden` on the parent so it clips the child.

### clamp() speed effects[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/static.create()/#clamp-speed-effects "Direct link to clamp() speed effects")

Have you ever had an element that you natively placed toward the very top of your page but when you apply a `data-speed`, it starts out shifted from its native position? That's because by default, speed effects cause elements to reach their "native" position when **centered vertically** in the viewport, so they'll likely start out offset. Starting in version 3.12, you can wrap your speed value in `"clamp()"` to make them start out in their native position if they're "above the fold" (inside the viewport when scrolled to the very top). Under the hood, `data-speed` effects are driven by ScrollTrigger instances, so this a way to employ ScrollTrigger's clamp() feature that prevents the start/end values from "leaking" outside the page bounds (never less than 0 and never more than the maximum scroll position). For example:

```php-template
<div data-speed="clamp(0.5)"></div> <!-- clamped half-speed -->
```

Walkthrough

<iframe allow="autoplay; fullscreen" allowfullscreen="" frameborder="0" src="https://player.vimeo.com/video/828003354"></iframe>

You can also use the [effects()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/effects()) method to dynamically apply speed or lag effects to targets (including function-based ones). _Note: effects **should not be nested**._

```php
let scroller = ScrollSmoother.create({...});scroller.effects(".box", {speed: 0.5, lag: 0.1});
```

Keep in mind that the elements will hit their "natural" position in the **CENTER** of the viewport. Here's a visual demo from [@snorkltv](https://www.creativecodingclub.com/courses/FreeGSAP3Express?ref=44f484):

#### loading...

## Lag (the delightful kind)[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/static.create()/#lag-the-delightful-kind "Direct link to Lag (the delightful kind)")

Think of a "lag" like making the element lazy, allowing it to drift from its normal scroll position, taking a certain amount of time to "catch up". You can assign slightly different lags to elements in close proximity to give them a staggered effect when scrolling that's quite pleasing to the eye. If you set `effects: true` on the ScrollSmoother.create() config, it'll automatically find any elements with the `data-lag` attribute and apply that effect:

```php-template
<div data-lag="0.5"></div> <!-- takes 0.5 seconds to "catch up" --><div data-lag="0.8"></div> <!-- takes 0.8 seconds to "catch up" -->
```

You can also use the [effects()](https://gsap.com/docs/v3/Plugins/ScrollSmoother/effects()) method to dynamically apply speed or lag effects to targets (including function-based ones) via JavaScript.

```php
let scroller = ScrollSmoother.create({...});scroller.effects(".box", {lag: 0.5, speed: 1});
```