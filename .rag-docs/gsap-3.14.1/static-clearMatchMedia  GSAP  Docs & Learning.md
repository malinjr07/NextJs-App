Deprecated

Shift to [gsap.matchMedia()](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()) functionality in version 3.11.0+

## ScrollTrigger.clearMatchMedia

### ScrollTrigger.clearMatchMedia( query:String )

#### Parameters

-   #### **query**: String
    
    \[optional\] To clear just one specific break point, provide the media query string here, like `"(min-width: 800px)"`. If none is provided, **ALL** will be cleared.
    

Clears out breakpoints that were previously set via [ScrollTrigger.matchMedia()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.matchMedia()). It doesn't kill the associated ScrollTriggers or animations themselves - it just no longer triggers anything at that break point.