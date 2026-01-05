## ScrollTrigger.saveStyles

### ScrollTrigger.saveStyles( targets:String | Element | Array )

Internally records the current inline CSS styles for the given elements so that when ScrollTrigger reverts (typically for a refresh() or matchMedia() change) those elements will be reverted accordingly even if they had animations that added/changed inline styles. Think of it like taking a snapshot of the inline CSS and telling ScrollTrigger "re-apply these inline styles only and dump all others when you revert internally".

#### Parameters

-   #### **targets**: String | Element | Array
    
    Selector text like `".panel, #logo"` or an element or an Array of elements whose current inline CSS styles should be recorded internally.
    

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.saveStyles()/#details "Direct link to Details")

Internally records the current inline CSS styles for the given elements so that when ScrollTrigger reverts (typically for a [refresh()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.refresh()) or [matchMedia()](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.matchMedia()) change) those elements will be reverted accordingly even if they had animations that added/changed inline styles. Think of it like taking a snapshot of the inline CSS and telling ScrollTrigger _"re-apply these inline styles only and dump all others when you revert internally"_.

Walkthrough

<iframe allow="autoplay; fullscreen" allowfullscreen="" frameborder="0" src="https://player.vimeo.com/video/436997261#t=348s"></iframe>

## Example[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.saveStyles()/#example "Direct link to Example")

```bash
ScrollTrigger.saveStyles(".panel, #logo");
```

ScrollTrigger.saveStyles() was added in GSAP **3.4.0**