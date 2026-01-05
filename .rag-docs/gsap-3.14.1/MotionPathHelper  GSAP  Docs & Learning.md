MotionPathHelper lets you **interactively edit a motion path directly in the browser** by dragging its anchors and control points, adding/deleting them, or dragging the entire path! If you don't have a motion path yet, you can create a new one from scratch. Once you're done editing, simply click the big "COPY MOTION PATH" button at the bottom of the screen to have the path data string copied to your clipboard so that you can then paste it directly into your tween or an SVG `<path>` that you'll use for the motion path animation.

Without MotionPathHelper, you'd need to go back and forth between the browser and an SVG editor like Inkscape or Adobe Illustrator which is time-consuming and frustrating.

You can optionally pass in a `vars` parameter to further configure the motion path helper. It's an object and can include any of the following properties:

```php
MotionPathHelper.create("#elementID", {  path: "#path",  pathWidth: 5,  pathColor: "red",  pathOpacity: 0.6,  selected: true,  start: 0.1,  end: 1,  duration: 5,  ease: "power2.inOut",});
```

#### loading...