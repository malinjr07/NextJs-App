Quick Start

#### CDN Link

```scss
gsap.registerPlugin(ScrollToPlugin)
```

#### Minimal usage

```css
//scroll to 400 pixels down from the top  gsap.to(window, { duration: 2, scrollTo: 400 });
```

tip

If you want to do scroll-driven animations where things get triggered at certain scrollbar positions, use the [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger) plugin.

## Description[](https://gsap.com/docs/v3/Plugins/ScrollToPlugin/#description "Direct link to Description")

Animates the scroll position of the window (like doing `window.scrollTo(x, y)`) or a DOM element (like doing `myDiv.scrollTop = y; myDiv.scrollLeft = x;`).

warning

using alongside `scroll-behavior: smooth` in CSS will cause conflicts

To scroll the window to a particular position, use window as the target of the tween like this:

```css
//scroll to 400 pixels down from the topgsap.to(window, { duration: 2, scrollTo: 400 });//or to scroll to the element with the ID "#someID" (as of GSAP 1.19.0):gsap.to(window, { duration: 2, scrollTo: "#someID" });
```

To tween the content of a div, make sure you've set the `overflow: scroll` on the div and then:

```css
//scroll to 250 pixels down from the top of the content in the divgsap.to(myDiv, { duration: 2, scrollTo: 250 });
```

You can define an x or y value or both (to scroll on both the x and y axis). For example, to scroll to 400 pixels from the top and 200 pixels from the left, do this:

```php
gsap.to(myDiv, { duration: 2, scrollTo: { y: 400, x: 200 }, ease: "power2" });
```

You can also optionally pass offsetX and/or offsetY numeric values if you want to offset the destination from the element.

```css
//scroll #someID into view with 50 pixels from the top (like a margin)gsap.to(window, { duration: 2, scrollTo: { y: "#someID", offsetY: 50 } });
```

The demo below uses the offsetY so that each section scrolls into view just under the navigation. Click the section buttons in the demo below. Check out the JS source.

#### loading...

To have ScrollToPlugin automatically sense if the scroll position was changed outside of itself (like if the user manually started dragging the scrollbar mid-tween) and cancel that portion of the tween, set `autoKill: true`inside the `scrollTo` object, like:

```php
gsap.to(myDiv, {  duration: 2,  scrollTo: { y: 400, autoKill: true },  ease: "power2",});
```

If you would like to detect when autoKill gets triggered you can define an `onAutoKill` callback.

```php
gsap.to(window, {  duration: 2,  scrollTo: { y: 300, autoKill: true, onAutoKill: myAutoKillFunction },});function myAutoKillFunction() {  alert("autoKill");}
```

You can also set autoKill globally via [`ScrollToPlugin.config()`](https://gsap.com/docs/v3/Plugins/ScrollToPlugin/config())

```lua
ScrollToPlugin.config({ autoKill: true })
```

To scroll to the maximum scroll position, use the string `"max"` as the value, like this:

```css
gsap.to(myDiv, { duration: 2, scrollTo: { y: "max" } });
```

If you don't wrap the value in an object, it will assume you want to scroll in the "y" direction, so these two lines are functionally equivalent:

```php
gsap.to(myDiv, { duration: 2, scrollTo: { y: "max" } });gsap.to(myDiv, { duration: 2, scrollTo: "max" });
```

Here's a basic example using anchors:

#### loading...