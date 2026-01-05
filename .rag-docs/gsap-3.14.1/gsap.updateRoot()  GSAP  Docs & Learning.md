-   [GSAP](https://gsap.com/docs/v3/GSAP/)
-   methods
-   gsap.updateRoot()

Normally GSAP handles all of its timing internally using a `requestAnimationFrame` loop (or falls back to `setTimeout()` if rAF isn't available), but some game developers requested a way to manually update the root (global) timeline which is exactly what `gsap.updateRoot()` permits. This is only intended for **advanced** users. First, you'd need to unhook GSAP's ticker like this:

```bash
//unhooks the GSAP tickergsap.ticker.remove(gsap.updateRoot);
```

And then you can update it with your own custom time like:

```bash
//sets the root time to 20 seconds manuallygsap.updateRoot(20);
```

[

Previous

gsap.to()

](https://gsap.com/docs/v3/GSAP/gsap.to())[

Next

Attributes

](https://gsap.com/docs/v3/GSAP/CorePlugins/Attributes)