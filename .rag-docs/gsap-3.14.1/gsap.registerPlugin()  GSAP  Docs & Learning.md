Registering a plugin with the GSAP core ensures that the two work seamlessly together and also prevents tree shaking issues in build tools/bundlers. You only need to register a plugin once **before** using it, like:

```python
//list as many as you'd likegsap.registerPlugin(MotionPathPlugin, TextPlugin);
```

There is no harm in registering the same plugin multiple times (but it doesn't help either).

The non ES module versions of GSAP plugins (like the minified files on the CDN) attempt to automatically register themselves upon load and that typically works great in the browser as long as they're loaded AFTER the core GSAP engine, but it's still a good habit to register plugins because in build environments (outside the browser), tree shaking can bite you.

Keep in mind that this is **not** a replacement for loading or importing the plugins themselves. This method is to be used after you have loaded the plugin simply to make GSAP's core aware of the plugin and to prevent tree shaking from occurring when using a build tool.

A [plugin](https://gsap.com/docs/v3/Plugins) adds extra capabilities to GSAP's core. Some plugins make it easier to work with certain rendering libraries (like PIXI.js or EaselJS) while other plugins add the ability to do special things like [morphing](https://gsap.com/docs/v3/Plugins/MorphSVGPlugin) SVG, adding [drag and drop](https://gsap.com/docs/v3/Plugins/Draggable) functionality, etc.). This allows the GSAP core to remain relatively small and lets you add features when you need them.