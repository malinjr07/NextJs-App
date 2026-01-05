Quick Start

#### CDN Link

```scss
gsap.registerPlugin(CustomEase)
```

#### Minimal usage

```css
CustomEase.create(  "hop",  "M0,0 C0,0 0.056,0.442 0.175,0.442 0.294,0.442 0.332,0 0.332,0 0.332,0 0.414,1 0.671,1 0.991,1 1,0 1,0");//now you can reference the ease by ID (as a string):gsap.to(element, { duration: 1, y: -100, ease: "hop" });
```

### Description[](https://gsap.com/docs/v3/Eases/CustomEase/#description "Direct link to Description")

CustomEase frees you from the limitations of canned easing options; create literally any easing curve imaginable by simply drawing it in the [Ease Visualizer](https://gsap.com/docs/v3/Eases) or by copying/pasting an SVG path. Zero limitations. Use as many control points as you want.

## Ease Visualizer

gsap.to(target,

{

duration:2.5,

ease: CustomEase.create("custom", "M0,0,C0.126,0.382,0.282,0.674,0.44,0.822,0.632,1.002,0.818,1.001,1,1"),

y: \-500

Creating a Custom Ease

How to use this ease visualizer

-   **Add points** - ATL/OPTION-click anywhere on the curve
-   **Delete points** - Select the point and then press the DELETE key on the keyboard
-   **Toggle smooth/corner** - ALT/OPTION-click on an anchor point. Or, ALT/OPTION-drag a control handle to turn it into a corner (not smooth) point.
-   **Select multiple points** - Hold the SHIFT key while clicking anchor points.
-   **Undo** - Press CTRL-Z
-   **Disable** snapping - Hold SHIFT while dragging

You can edit any of the other eases by selecting them and then hiting "CustomEase".

## Copy/Paste SVG[](https://gsap.com/docs/v3/Eases/CustomEase/#copypaste-svg "Direct link to Copy/Paste SVG")

When in the "custom" mode of the Ease Visualizer, you can select the purple text at the bottom (the CustomEase data string), highlight it all, and then paste in an SVG path (like from Adobe Illustrator) and then click elsewhere and the Ease Visualizer will grab the first `<path>` and convert it into the proper format.

## Using cubic-bezier values[](https://gsap.com/docs/v3/Eases/CustomEase/#using-cubic-bezier-values "Direct link to Using cubic-bezier values")

CustomEase also recognizes standard `cubic-bezier()` strings containing four numbers, like those you can get from [cubic-bezier.com](https://cubic-bezier.com/). For example, `".17,.67,.83,.67"`. Either paste that into the orange text area in the bottom of the Ease Visualizer or feed it directly into the `CustomEase.create()` method, like `CustomEase.create("easeName", ".17,.67,.83,.67");`.

## The code[](https://gsap.com/docs/v3/Eases/CustomEase/#the-code "Direct link to The code")

Instead of using the long data string in each tween, you simply `create()` a CustomEase once (typically as soon as your page/app loads) and assign it a memorable ID (like `"hop"` or `"wiggle"` or whatever you want) that you reference thereafter in any of your tweens, like:

```bash
//define your CustomEase and give it an ID ("hop" in this case)CustomEase.create(  "hop",  "M0,0 C0,0 0.056,0.442 0.175,0.442 0.294,0.442 0.332,0 0.332,0 0.332,0 0.414,1 0.671,1 0.991,1 1,0 1,0");//now you can reference the ease by ID (as a string):gsap.to(element, { duration: 1, y: -100, ease: "hop" });
```

Creating the ease(s) initially ensures maximum performance during animation because there's some overhead involved in calculating all the points internally and optimizing the data for blisteringly fast runtime performance. That only happens once, upon creation.

Typically the path string uses normalized values (0-1), but you can pass in any SVG path data that uses cubic bezier instructions ("M", "C", "S", "L", or "Z" commands) and it'll normalize things internally.

## .getSVGData()[](https://gsap.com/docs/v3/Eases/CustomEase/#getsvgdata "Direct link to .getSVGData()")

CustomEase has a `getSVGData()` method that calculates the SVG `<path>` data string for visualizing any ease graphically at any size that you define, like `{width: 500, height: 400, x: 10, y: 50}`. You can supply a CustomEase or the ID associated with one, or even a standard ease like `"power2"`. Feed in a `path` in the vars object and it'll populate its `d` attribute for you, like:

```lua
//create a CustomEase with an ID of "hop"CustomEase.create(  "hop",  "M0,0 C0,0 0.056,0.445 0.175,0.445 0.294,0.445 0.332,0 0.332,0 0.332,0 0.414,1 0.671,1 0.991,1 1,0 1,0");//draw the ease visually in the SVG  that has an ID of "ease" at 500px by 400px:CustomEase.getSVGData("hop", { width: 500, height: 400, path: "#ease" });
```

## Naming caveat[](https://gsap.com/docs/v3/Eases/CustomEase/#naming-caveat "Direct link to Naming caveat")

It's usually not a good idea to name your ease (the string name you associate with it) the same as one of the standard eases, like "expo" or "power1", etc. because that would essentially overwrite that standard ease and replace it with your CustomEase.

## **Demos**[](https://gsap.com/docs/v3/Eases/CustomEase/#demos "Direct link to demos")

-   [CustomEase demos](https://codepen.io/collection/AQKMdx)

## Videos[](https://gsap.com/docs/v3/Eases/CustomEase/#videos "Direct link to Videos")

Overview

<iframe width="560" height="315" src="https://www.youtube.com/embed/A9ROywSFFiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>

Using CustomEase in a project

<iframe width="560" height="315" src="https://www.youtube.com/embed/rJRrUHds7fc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>

## FAQ[](https://gsap.com/docs/v3/Eases/CustomEase/#faq "Direct link to FAQ")

#### How do I include undefined in my project?

See the [installation page](https://gsap.com/docs/v3/Installation) for all the options (CDN, NPM, download, etc.) where there's even an interactive helper that provides the necessary code. Easy peasy. Don't forget to [register undefined](https://gsap.com/docs/v3/GSAP/gsap.registerPlugin()) like this in your project:

```javascript
gsap.registerPlugin(undefined)
```

#### Is this included in the GSAP core?

No, you must load/import it separately

#### It works fine during development, but suddenly stops working in the production build! What do I do?

Your build tool is probably dropping the plugin when [tree shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) and you forgot to [register undefined](https://gsap.com/docs/v3/GSAP/gsap.registerPlugin()) (which protects it from tree shaking). Just register the plugin like this:

```javascript
gsap.registerPlugin(undefined)
```

#### Is it bad to register a plugin multiple times?

No, it's perfectly fine. It doesn't help anything, nor does it hurt.