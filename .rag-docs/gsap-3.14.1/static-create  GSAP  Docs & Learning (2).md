## SplitText.create

### SplitText.create( target: Element | String | Array, vars:Object ) : SplitText

Creates and returns a standalone SplitText instance

#### Parameters

-   #### **vars**: Object
    
    An object containing all of the configuration details for the SplitText
    

### Returns : SplitText[](https://gsap.com/docs/v3/Plugins/SplitText/static.create()/#returns--splittext "Direct link to Returns : SplitText")

The new SplitText instance

### Details[](https://gsap.com/docs/v3/Plugins/SplitText/static.create()/#details "Direct link to Details")

Creates a new standalone SplitText instance.

## Example[](https://gsap.com/docs/v3/Plugins/SplitText/static.create()/#example "Direct link to Example")

```php
SplitText.create(".headline", {  type: "lines,words",  linesClass: "line",  wordsClass: "word++",  autoSplit: true,  onSplit: (self) => {    return gsap.from(self.lines, {      yPercent: 100,      opacity: 0,      stagger: 0.1    });  }});
```

## Configuration[](https://gsap.com/docs/v3/Plugins/SplitText/static.create()/#configuration "Direct link to Configuration")

[see the main SplitText page.](https://gsap.com/docs/v3/Plugins/SplitText/#config-object)