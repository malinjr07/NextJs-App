Quick Start

#### CDN Link

```scss
gsap.registerPlugin(MorphSVGPlugin)
```

#### Minimal usage

```php
gsap.to("#circle", { duration: 1, morphSVG: "#lightning" });
```

Detailed walkthrough

<iframe width="560" height="315" src="https://www.youtube.com/embed/Uxa9sdaeyKM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>

## Description[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#description "Direct link to Description")

MorphSVG morphs an SVG `<path>` by animating the data inside the `d` attribute. For example, you can morph a diamond into a lightning bolt with a single line of code:

```php
gsap.to("#diamond", { duration: 1, morphSVG: "#lightning" });
```

#### loading...

How does it work?

In this example, MorphSVG finds the path with the ID of "diamond" and the path with the ID of "lightning" and automatically figures out how to add enough points to the diamond to get a super smooth morph. It rips through all that ugly path data, converts everything to cubic beziers, and dynamically subdivides them when necessary, adding anchor points so that the beginning and ending quantities match (but visually it looks identical). It's all done seamlessly under the hood.

## Features[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#features "Direct link to Features")

Feature Highlights

-   Morph `<path>` data **even if the number (and type) of points don't match** between the start and end shapes!
-   **Perfect shape fidelity**. Most other morphing tools use a lossy approximation of your artwork that falls apart in complex shapes, or they require matching point quantities in the start/end shapes. MorphSVG is both **super flexible** and **super accurate**.
-   **Natural point mapping** that avoids strange twisting in other libraries caused by misaligned artwork point sequencing.
-   Optionally **draw the resulting shape to a `<canvas>`** (see [`MorphSVGPlugin.defaultRender`](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/static.defaultRender)).

**read more...**

-   Morph a `<polyline>` or `<polygon>` to a different set of points.
-   Turn primitive elements like `<circle>`, `<rect>`, `<ellipse>`, `<polygon>`, `<polyline>`, and `<line>` into the equivalent `<path>` with [`MorphSVGPlugin.convertToPath()`](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/static.convertToPath) so you can then morph it.
-   Not happy with the morph? There are plenty of **configuration options** to improve it, like setting `smooth: true` or `curveMode: true` or defining a `shapeIndex` or using a `rotational` type.
-   Morph to raw path data (like `"M490.1,280.649c0,44.459-36.041,80..."`) or to a particular `<path>` element (using selector text like `"#diamond"` or even a direct reference to the element like `diamondEl`), making workflow easy.

## Simple Examples[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#simple-examples "Direct link to Simple Examples")

In its simplest form, you can just morph to another element or raw path data directly:

```wasm
// selector string (grabs the data from the corresponding element's "d" attribute)gsap.to("#diamond", { morphSVG: "#lightning" });// an SVG elementconst endShape = document.getElementById("lightning");gsap.to("#diamond", { morphSVG: endShape });// raw path data (string)gsap.to("#diamond", { morphSVG: "M47.1,0.8 73.3,0.8 61.9,37.2 77.1,37.2 30.7,99.4 45.8,51.9 29,51.9z" });// points for polygon or polyline elements:gsap.to("#polygon", { morphSVG: "240,220 240,70 70,70 70,220" });
```

note

If the shape you pass in is a `<circle>`, `<rect>`, `<ellipse>`, `<polygon>`, `<polyline>`, or `<line>`, MorphSVG will internally create path data from those shapes.

## Configuration[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#configuration "Direct link to Configuration")

To configure the morph, use the object `{...}` syntax instead. `shape` is the only required property:

```php
gsap.to("#diamond", {duration: 1,ease: "power2.inOut",morphSVG: {shape: "#lightning",smooth: { points: 80, redraw: true }}});
```

Here are the various configuration options:

-   #### curveMode[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#curveMode)
    
    boolean _(new in 3.14.0)_
    
    Forces smooth anchors (on curves) to avoid kinks mid-morph by interpolating the angle and length of control point handles instead of their raw x/y coordinates. Normally you do **not** need to enable `curveMode`
    
    View More details
    
    In the example below, notice how `curveMode: true` prevents the kink mid-morph. However, `curveMode` can actually cause certain morphs to look slightly worse, especially if anchor points are close together, so it's wise to experiment and determine which look you prefer.
    
-   #### map[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#map)
    
    "size" | "position" | "complexity"
    
    If the sub-segments inside your path aren't matching up the way you hoped between the start and end shapes, you can use `map` to tell MorphSVG which algorithm to prioritize (see details below)
    
    View More details
    
    -   `"size"` (the default) - Attempts to match segments based on their overall size. If multiple segments are close in size, it'll use positional data to match them. This mode typically gives the most intuitive morphs.
    -   `"position"` - Matches mostly based on position (proximity).
    -   `"complexity"` - Matches purely based on the quantity of anchor points. This is the fastest algorithm and it can be used to "trick" things to match up by manually adding anchors in your SVG authoring tool so that the pieces that you want matched up contain the same number of anchors (though that's completely optional).
    
    ```php
    gsap.to("#id", {  duration: 1,  morphSVG: { shape: "#otherID", map: "complexity" },});
    ```
    
    #### Notes
    
    -   `map` is completely optional. Typically the default mode works great.
    -   If none of the map modes get the segments to match up the way you want, it's probably best to just split your path into multiple paths and morph each one. That way you get total control.
    
-   #### origin[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#origin)
    
    string
    
    Sets the origin of rotation. The default is `50% 50%`. The format is either a string of two percentage values, or a string or four values if there are different values for the start and end shapes.
    
    To set your own origin:
    
    ```php
    gsap.to("#shape1", {  duration: 2,  morphSVG: {    shape: "#shape2",    type: "rotational",    origin: "20% 60%", //or "20% 60%,35% 90%" if there are different values for the start and end shapes.  },});
    ```
    
    sometimes the rotations around a point look odd, In cases like this, it's best to experiment and set your own custom origin to improve things even more. We created a `findMorphOrigin()` utility function to help with this...
    
    View More details
    
    `findMorphOrigin()` allows you to simply feed in a start and end shape and then it'll superimpose an origin that you can drag around and see exactly how it affects the morph! In the demo below, go into the JS panel and un-comment the `findMorphOrigin()` line and you'll see exactly how this works. Drag the origin around and watch how it affects things.
    
-   #### precision[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#precision)
    
    number
    
    By default, MorphSVG will round values in the resulting `d` string to 2 decimal places in order to maximize performance and reduce string length but you can set `precision` to your preferred number of decimal places. For example, `precision: 5` would round to 5 decimal places:
    
    ```php
    gsap.to("#id", { morphSVG: { shape: "#other-id", precision: 5 } });
    ```
    
-   #### precompile[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#precompile)
    
    Array
    
    Only for very advanced use cases where you're running into performance issues on the initial render, which is rare.
    
    Tell MorphSVG to run all of its initial calculations and return an array with the transformed strings, logging them to the console where you can copy and paste them back into your tween. That way, when the tween begins it can just grab all the values directly instead of doing expensive calculations.
    
    For more information see [precompile](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#precompile)
    
-   #### render[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#render)
    
    function
    
    Define a render function that'll be called every time the path updates, typically for drawing to `<canvas>`. See [Rendering to canvas](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#rendering-to-canvas)
    
-   #### shape[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#shape)
    
    string | element
    
    The shape to morph to. You can use selector text like `"#diamond"` or a direct reference to the element like `diamondEl` or even raw path data like `"M490.1,280.649c0,44.459-36.041,80..."`
    
-   #### shapeIndex[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#shapeIndex)
    
    number
    
    The `shapeIndex` property controls how the points in the start shape are mapped to the ones in the end shape. Every closed path is drawn from a particular point on the path. For example, if you were drawing a circle with a pencil, you could start anywhere (1 o'clock, 9 o'clock, etc.). So if the starting shape begins its sequence of points in its upper left corner and it's mapped to an end shape whose points begin in the lower right corner (matching first with first, second with second, etc.) will result in the shape crossing over itself (visually inverting halfway through). Think of `shapeIndex` like an offset, so `shapeIndex: 3` would match up the 3rd point from the start shape with the first point in the end shape:
    
    ```php
    gsap.to("#square", {  duration: 1,  morphSVG: { shape: "#star", shapeIndex: 3 },});
    ```
    
    For help finding the best `shapeIndex`, see the [findShapeIndex() function](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#findshapeindex-utility)
    
    View More details
    
    **Notes**
    
    -   `shapeIndex` only works on closed paths.
    -   If you supply a negative `shapeIndex` the start path will be completely reversed (which can be quite useful
    
-   #### smooth[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#smooth)
    
    number | "auto" | object _(new in 3.14.0)_
    
    Adds extra "smoothing" anchor points to the artwork. Think of it like increasing the resolution, inserting points to pull on during the morph. **Normally this is not necessary**, but if your original artwork has awkwardly-placed anchor points it can help make the morph look more natural.
    
    You can define a specific number of points, like `smooth: 80` would redraw the path using 80 evenly-spaced anchor points (replacing all existing anchor points). Or `smooth: "auto"` would automatically choose a number of points based on the surface area. By default, smoothing the path will **redraw** it which is like tracing it at a certain resolution in order to distribute the anchor points evenly, so it loses some fidelity to the original artwork. You can use the object syntax to set `redraw: false` to avoid this (see details below). Keep in mind that if you use too many points, it could affect performance.
    
    View More details
    
    Use the object `{...}` syntax for more options:
    
    -   `points` (number | "auto") - the number of points to use for redrawing the path. Or if `redraw` is `false`, this is the number of points to **add** to the existing anchor points. `"auto"` (the default) automatically chooses a number based on the surface area of the path.
    -   `redraw` (boolean) - By default, the path will be completely redrawn with new fabricated anchor points that are equally-spaced which entails a loss of fidelity to the original path since the original anchors are eliminated to prioritize equal spacing. To maintain **PERFECT fidelity** to the original artwork, set `redraw: false` and it will keep the original anchor points and intersperse the new smoothing points between those as evenly-spaced as possible. Redrawing almost always results in more evenly-spaced anchor points but it sacrifices some level of fidelity (more points delivers more fidelity). `redraw: false` delivers **perfect** fidelity but sacrifices equal spacing.
    -   `persist` (boolean) - by default, the redrawn shape will persist at the end of the animation in order to avoid any visual jump back to the original artwork (from the loss in fidelity), but you can set `persist: false` to have it return to the original artwork at the end of the animation, eliminating the extra smoothing points that were added.
    
    ```php
    gsap.to("#diamond", {  duration: 1,  morphSVG: {    shape: "#lightning",    smooth: {      points: 40, // add 40 smoothing points      redraw: false, // perfect shape fidelity, but less even spacing       persist: false // remove smoothing points when animation completes    }  }});
    ```
    
-   #### type[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#type)
    
    "linear" | "rotational"
    
    By default, all of the anchors and control points in the shape are interpolated linearly (`type: "linear"`) which is usually great but you can set `type: "rotational"` to make MorphSVG use rotation and length data for interpolation instead which can produce more natural morphs in some cases. It also eliminates kinks that may form in otherwise smooth anchors mid-tween (like `curveMode: true`). To tap into this alternative style of morphing, just set type: "rotational" in the object:
    
    ```php
    gsap.to("#shape1", { duration: 2,  morphSVG:{  shape: "#shape2",  type: "rotational" }})
    ```
    
    The concept is best understood visually, so here are some videos and demos...
    
    View More details
    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/C-qo_aEAPp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
    
    ### Interactive comparison of linear and rotational morphs
    

## Tips[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#tips "Direct link to Tips")

note

MorphSVG also stores the original path data on the target so that you can easily tween back to the original shape. (like `data-original="M490.1,280.649c0,44.459-36.041,80..."`)

### Morph into multiple shapes[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#morph-into-multiple-shapes "Direct link to Morph into multiple shapes")

Sequencing multiple morphs is a breeze with GSAP. Watch how easy it is to make that diamond morph into various other shapes and back again:

```php
tl.to("#diamond", { duration: 1, morphSVG: "#shape2" }, "+=1")  .to("#diamond", { duration: 1, morphSVG: "#shape3" }, "+=1")  .to("#diamond", { duration: 1, morphSVG: "#shape4" }, "+=1")  .to("#diamond", { duration: 1, morphSVG: "#diamond" }, "+=1"); // back to the original
```

#### loading...

### Converting SVG shapes to paths[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#converting-svg-shapes-to-paths "Direct link to Converting SVG shapes to paths")

Feature runthrough

<iframe width="560" height="315" src="https://www.youtube.com/embed/jcq9kEyJNMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>

Technically it's only feasible to morph `<path>` elements or `<polyline>`/`<polygon>` elements, but what if you want to morph a `<circle>`, `<rect>`, `<ellipse>`, or `<line>`? No problem - just tap into the utility method and have the plugin do the conversion for you:

```bash
MorphSVGPlugin.convertToPath("#elementID");
```

You can pass in an element or selector text, so you could also have it convert ALL of those elements with one line:

```css
MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");
```

This literally swaps in a for each one directly in the DOM, and it should look absolutely identical. It'll keep the attributes, like the "id" attribute. So after the conversion, you should be able to target the elements pretty easily, just as you would previously.

```php-template
// an svg <rect> Like this:<rect id="square" width="100" height="100" fill="red"/>// becomes<path id="square" fill="red" d="M100,0 v100 h-100 v-100 h100z"></path>
```

### findShapeIndex() utility[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#findshapeindex-utility "Direct link to findShapeIndex() utility")

Experimenting with `shapeIndex` can be a bit of a guessing game. To make things easier we have created a stand-alone utility function called `findShapeIndex()` that you can use just during development to find the right number to plug into the final animation. This function provides an interactive user interface to help you visualize where the start point is, change it, and preview the animation.

You can load `findShapeIndex()` from [this download link](https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/findShapeIndex.js).

Once it's loaded you simply tell it which shapes to use.

```bash
findShapeIndex("#square", "#star");
```

Or pass in raw data:

```bash
findShapeIndex(  "#square",  "M10 315 L 110 215 A 30 50 0 0 1 162.55 162.45 L 172.55 152.45 A 30 50 -45 0 1 215.1 109.9 L 315 10");
```

tip

The best way to get started is to drop your SVG into the pen and alter the IDs to match your svg.

#### loading...

## Maximizing performance[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#maximizing-performance "Direct link to Maximizing performance")

### Define a shapeIndex in advance[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#define-a-shapeindex-in-advance "Direct link to Define a shapeIndex in advance")

Performance tip: define a `shapeIndex` in advance

MorphSVGPlugin's default `shapeIndex: "auto"` does a bunch of calculations to reorganize the points so that they match up in a natural way but if you define a numeric `shapeIndex` (like `shapeIndex: 5`) it skips those calculations. Each segment inside a path needs a `shapeIndex`, so multiple values are passed in an array like `shapeIndex:[5, 1, -8, 2]`. But how would you know what numbers to pass in? The `findShapeIndex()` tool helps for single-segment paths, what about multi-segment paths? It's a pretty complex thing to provide a GUI for.

**read more about shapeIndex...**

Typically the default `"auto"` mode works great but the goal here is to avoid the calculations, so there is a `"log"` value that will act just like `"auto"` but it will also `console.log()` the `shapeIndex` value(s). That way, you can run the tween in the browser once and look in your console and see the numbers that `"auto"` mode would produce. Then it's simply a matter of copying and pasting that value into your tween where `"log"` was previously.

For example:

```yaml
// logs a value like "shapeIndex:[3]"gsap.to("#id", {  duration: 1,  morphSVG: { shape: "#otherID", shapeIndex: "log" },});// now you can grab the value from the console and drop it in...gsap.to("#id", {  duration: 1,  morphSVG: { shape: "#otherID", shapeIndex: [3] },});
```

### Precompile[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#precompile "Direct link to Precompile")

While precompiling isn't usually necessary, it can really improve performance for very complex morphs. Precompiling involves having MorphSVG run all of its initial calculations and then spit out an array with the transformed strings, logging them to the console where you can copy and paste them back into your tween. That way, when the tween begins it can just grab all the values directly and skip the expensive startup calculations.

**show precompiling example...**

```css
// logs a value like precompile:["M0,0 C100,200 120,500 300,145 34,245 560,46","M0,0 C200,300 100,400 230,400 100,456 400,300"]gsap.to("#id", {  duration: 1,  morphSVG: { shape: "#otherID", precompile: "log" },});// now you can grab the value from the console and drop it in...gsap.to("#id", {  duration: 1,  morphSVG: {    shape: "#otherID",    precompile: [      "M0,0 C100,200 120,500 300,145 34,245 560,46",      "M0,0 C200,300 100,400 230,400 100,456 400,300",    ],  },});
```

As an example, here's [a really cool CodePen](https://codepen.io/davatron5000/pen/meNOqK/) by Dave Rupert before it was precompiled. Notice the very first time you click the toggle button, it may seem to jerk a bit because the entire brain is one path with many segments, and it must get matched up with all the letters and figure out the `shapeIndex` for each (which is expensive). By contrast, [here's a fork](https://codepen.io/GreenSock/pen/MKevzM) of that pen that has precompile enabled. You may noticed that it starts more smoothly.

#### Notes[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#notes "Direct link to Notes")

-   `precompile` is only available on `<path>` elements (not `<polyline>`/`<polygon>`). You can easily convert things using `MorphSVGPlugin.convertToPath("polygon, polyline");`
    
-   Precompiling only improves the performance of the first (most expensive) render. If your entire morph is janky throughout the tween, it most likely has nothing to do with GSAP; your SVG may be too complex for the browser to render fast enough. In other words, the bottleneck is probably the browser's graphics rendering routines. Unfortunately, there's nothing GSAP can do about that and you'll need to simplify your SVG artwork and/or reduce the size at which it is displayed.
    
-   The precompiled values are inclusive of `shapeIndex` adjustments. In other words, `shapeIndex` gets baked in.
    
-   In most cases, you probably don't need to precompile; it's intended to be an advanced technique for squeezing every ounce of performance out of a very complex morph.
    
-   If you alter the original start or end shape/artwork, make sure you precompile again so that the values reflect your changes.
    

### Rendering to canvas[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#rendering-to-canvas "Direct link to Rendering to canvas")

SVG is fantastic, but sometimes developers prefer a canvas-based animation (often for rendering performance reasons). The MorphSVG plugin allows you to define a `render` function that'll be called every time the path updates.

#### loading...

**read more about canvas rendering...**

The render function will receive two parameters:

1.  **`rawPath`** \[array\]: A RawPath is essentially an array containing an array for each contiguous segment with alternating x, y, x, y cubic bezier data. It's like an SVG `<path>` where there's one segment (array) for each `M` command. That segment (array) contains all of the cubic bezier coordinates in alternating x/y format (just like SVG path data) in raw numeric form which is nice because that way you don't have to parse a long string and convert things.
    
    For example, this SVG `<path>` has two separate segments because there are two `M` commands: `<path d="M0,0 C10,20,15,30,5,18 M0,100 C50,120,80,110,100,100"></path>` So the resulting **RawPath** would be:
    
    ```css
    [  [0, 0, 10, 20, 15, 30, 5, 18],  [0, 100, 50, 120, 80, 110, 100, 100],];
    ```
    
    For simplicity, the example above only has one cubic bezier in each segment, but there could be an unlimited quantity inside each segment. No matter what path commands are in the original`<path>` data string (cubic, quadratic, arc, lines, whatever), the resulting RawPath will **ALWAYS** be cubic beziers.
    
2.  **`target`** \[object\]: The target of the tween (usually a `<path>`)
    

This means you can even render morphs to super high-performance engines like [PixiJS](https://pixijs.com/) or anything that'll allow you to draw cubic beziers!

Here's an example of a tween and a render function that'd draw the morphing shape to canvas:

```javascript
let canvas = document.querySelector("canvas"),  ctx = canvas.getContext("2d"),  vw = (canvas.width = window.innerWidth),  vh = (canvas.height = window.innerHeight);ctx.fillStyle = "#ccc";gsap.to("#hippo", {  duration: 2,  morphSVG: {    shape: "#circle",    render: draw,  },});function draw(rawPath, target) {  let l, segment, j, i;  ctx.clearRect(0, 0, vw, vh);  ctx.beginPath();  for (j = 0; j < rawPath.length; j++) {    segment = rawPath[j];    l = segment.length;    ctx.moveTo(segment[0], segment[1]);    for (i = 2; i < l; i += 6) {      ctx.bezierCurveTo(        segment[i],        segment[i + 1],        segment[i + 2],        segment[i + 3],        segment[i + 4],        segment[i + 5]      );    }    if (segment.closed) {      ctx.closePath();    }  }  ctx.fill("evenodd");}
```

To set a default render method for all tweens:

```ini
MorphSVGPlugin.defaultRender = yourFunction;
```

#### updateTarget: false[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#updatetarget-false "Direct link to updateTarget: false")

By default, MorphSVG will update the original target of the tween (typically an SVG `<path>` element), but if you're only drawing to canvas you can tell MorphSVG to skip updating the target like this:

```php
gsap.to("#diamond", {  duration: 2,  morphSVG: {    shape: "#lightning",    render: draw,    updateTarget: false,  },});
```

To set the default `updateTarget` value for all tweens (so that you don't have to add it to every tween):

```ini
MorphSVGPlugin.defaultUpdateTarget = false;
```

## **Properties**[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#properties "Direct link to properties")

|   #### .defaultRender : Function    |                     Sets the default function that should be called whenever a morphSVG tween updates. This is useful if you're rendering to `<canvas>`.                      |
|-------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     #### .defaultType : String      |                          Sets the default `"type"` for all MorphSVG animations. The default `type` is `"linear"` but you can change it to `"rotational"`.                           |
| #### .defaultUpdateTarget : Boolean | Sets the default `updateTarget` value for all MorphSVG animations; if `true`, the original tween target (typically an SVG `<path>` element) itself gets updated during the tween. |

## **Methods**[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#methods "Direct link to methods")

| #### .convertToPath( shape:\[Element | String\], swap:Boolean ) : Array |                                                                                                             Converts SVG shapes like `<circle>`, `<rect>`, `<ellipse>`, or `<line>` into `<path>`                                                                                                             |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|             #### .rawPathToString( rawPath:Array ) : String             |                                                                     Converts a RawPath (array) into a string of path data, like `"M0,0 C100,20 300,50 400,0..."` which is what's typically found in the `d` attribute of a `<path>`.                                                                      |
|             #### .stringToRawPath( data:String ) : RawPath              | Takes a string of path data (like `"M0,0 C100,20 300,50 400,0..."`, what's typically found in the `d` attribute of a `<path>`), parses it, converts it into cubic beziers, and returns it as a RawPath which is just an array containing an array for each segment (each `M` command starts a new segment). |

## **Demos**[](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin/#demos "Direct link to demos")

Check out the full collection of [How-to demos](https://codepen.io/collection/noQGjq) and our favourite [inspiring community demos](https://codepen.io/collection/naMaNQ) on CodePen.