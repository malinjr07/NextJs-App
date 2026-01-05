If true, there is a ScrollTrigger-related scroller that's in the process of scrolling

Indicates whether or not any ScrollTrigger-related scroller is in the process of scrolling. Due to the fact that it's impossible to know EXACTLY when scrolling ends ("scroll" events get dispatched frequently), ScrollTrigger looks for when there hasn't been any "scroll" events fired for about 200ms AND the pointer/mouse isn't pressed on the document/scrollbar.

```less
if (ScrollTrigger.isScrolling()) {  // do something if scrolling}
```