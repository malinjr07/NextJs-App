Quick Start

#### CDN Link

```scss
gsap.registerPlugin(CustomEase, CustomBounce)
```

#### Minimal usage

```css
//Create a custom bounce ease:CustomBounce.create("myBounce", {  strength: 0.6,  squash: 3,  squashID: "myBounce-squash",});//do the bounce by affecting the "y" property.gsap.from(".class", { duration: 2, y: -200, ease: "myBounce" });//and do the squash/stretch at the same time:gsap.to(".class", {  duration: 2,  scaleX: 1.4,  scaleY: 0.6,  ease: "myBounce-squash",  transformOrigin: "center bottom",});
```

#### loading...

### Description[](https://gsap.com/docs/v3/Eases/CustomBounce/#description "Direct link to Description")

GSAP always has the tried-and-true `"bounce"` ease, but there is no built-in way to customize how "bouncy" it is, nor could you easily get a synchronized squash and stretch effect during the bounce because:

-   The "bounce" ease needs to stick to the ground momentarily at the point of the bounce while the squashing occurs. `"bounce"` offers no such customization.
-   There was no way to create the corresponding \[synchronized\] scaleX/scaleY ease for the squashing/stretching. [CustomEase](https://gsap.com/docs/v3/Eases/CustomEase) solves this now, but it'd still be very difficult to manually draw that ease with all the points lined up in the right spots to match up with the bounces.

With CustomBounce, you can set a few parameters and it'll create **BOTH** CustomEases for you (one for the bounce, and one \[optionally\] for the squash/stretch). Think of CustomBounce like a wrapper that creates a CustomEase under the hood based on the variables you pass in.

CustomBounce extends [CustomEase](https://gsap.com/docs/v3/Eases/CustomEase) (which you must include in your project) and it lets you set the bounce and (optionally) a squash and stretch.

Ease walkthrough

<iframe width="560" height="315" src="https://www.youtube.com/embed/iO8J_CiH1fk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>

### Options[](https://gsap.com/docs/v3/Eases/CustomBounce/#options "Direct link to Options")

-   #### strength[](https://gsap.com/docs/v3/Eases/CustomBounce/#strength)
    
    Number - A number between 0 and 1 that determines how “bouncy” the ease is, so 0.9 will have a lot more bounces than 0.3. Default: `0.7`.
    
-   #### endAtStart[](https://gsap.com/docs/v3/Eases/CustomBounce/#endAtStart)
    
    Boolean - If `true`, the ease will end back where it started, allowing you to get an effect like an object sitting on the ground, leaping into the air, and bouncing back down to a stop. Default: `false`.
    
-   #### squash[](https://gsap.com/docs/v3/Eases/CustomBounce/#squash)
    
    Number - Controls how long the squash should last (the gap between bounces, when it appears “stuck”). Typically 2 is a good number, but 4 (as an example) would make the squash longer in relation to the rest of the ease. Default: `0`.
    
-   #### squashID[](https://gsap.com/docs/v3/Eases/CustomBounce/#squashID)
    
    String - The ID that should be assigned to the squash ease. The default is whatever the ID of the bounce is plus “-squash” appended to the end. For example, `CustomBounce.create("hop", {strength: 0.6, squash: 2})` would default to a squash ease ID of `"hop-squash"`.
    

How do you get the bounce and the squash and stretch to work together? You'd use two tweens; one for the position (`y`), and the other for the `scaleX` and `scaleY`, with both running at the same time:

```css
gsap.registerPlugin(CustomEase, CustomBounce); // register//Create a custom bounce ease:CustomBounce.create("myBounce", {  strength: 0.6,  squash: 3,  squashID: "myBounce-squash",});//do the bounce by affecting the "y" property.gsap.from(".class", { duration: 2, y: -200, ease: "myBounce" });//and do the squash/stretch at the same time:gsap.to(".class", {  duration: 2,  scaleX: 1.4,  scaleY: 0.6,  ease: "myBounce-squash",  transformOrigin: "center bottom",});
```

### .getSVGData()[](https://gsap.com/docs/v3/Eases/CustomBounce/#getsvgdata "Direct link to .getSVGData()")

CustomBounce also shares CustomEase's method that calculates the SVG `<path>` data string for visualizing any ease graphically at any size that you define, like `{width: 500, height: 400, x: 10, y: 50}`. You can supply a CustomEase or the ID associated with one, or even a standard ease like `Power2.easeOut`. Feed in a `path` in the vars object and it'll populate its `d` attribute for you, like:

```css
//create a CustomEase with an ID of "hop"CustomBounce.create("myBounce", {  strength: 0.6,  squash: 3,  squashID: "myBounce-squash",});//draw the ease visually in the SVG  that has an ID of "ease" at 500px by 400px:CustomEase.getSVGData("myBounce", { width: 500, height: 400, path: "#ease" });
```

### String format[](https://gsap.com/docs/v3/Eases/CustomBounce/#string-format "Direct link to String format")

You can also use GSAP's condensed string formatting for eases, like:

```css
ease: "bounce(0.5)"; //<-- easy!ease: "bounce({strength:0.5, endAtStart:true})"; //advanced
```

### **Demos**[](https://gsap.com/docs/v3/Eases/CustomBounce/#demos "Direct link to demos")

[CustomBounce demos](https://codepen.io/collection/DqaLzb)