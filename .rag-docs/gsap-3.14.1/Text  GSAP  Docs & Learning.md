Quick Start

#### CDN Link

```scss
gsap.registerPlugin(TextPlugin)
```

#### Minimal usage

```cpp
//replaces yourElement's text with "This is the new text" gsap.to(yourElement, {  duration: 2,  text: "This is the new text",  ease: "none",});
```

Replaces the text content of a DOM element one character at a time (or one word at a time if you set `delimiter: " "`). So when the tween is finished, the DOM element's text has been completely replaced. This also means that if you rewind or restart the tween, the text will be reverted.

Here is a simple example of replacing the text in yourElement:

```cpp
//replaces yourElement's text with "This is the new text" over the course of 2 secondsgsap.to(yourElement, {  duration: 2,  text: "This is the new text",  ease: "none",});
```

## **Config Object**[](https://gsap.com/docs/v3/Plugins/TextPlugin/#config-object "Direct link to config-object")

For advanced usage, set `text` to an object (like `text:{...}`) with any of the following properties:

-   #### delimiter[](https://gsap.com/docs/v3/Plugins/TextPlugin/#delimiter)
    
    The character that should be used to split the text up. The default is `""`, so each character is isolated but if you'd prefer to animate in word-by-word instead you can use the space character, like .
    
-   #### newClass[](https://gsap.com/docs/v3/Plugins/TextPlugin/#newClass)
    
    A CSS class that should be applied to the new text via a tag. This makes it easy to have the new text differentiated visually from the old text, like maybe it should be red or bold or something - just create a class in your CSS and pass the name in here like
    
-   #### oldClass[](https://gsap.com/docs/v3/Plugins/TextPlugin/#oldClass)
    
    A CSS class that should be applied to the old text via a tag.
    
-   #### padSpace[](https://gsap.com/docs/v3/Plugins/TextPlugin/#padSpace)
    
    If the new text is shorter than the old text, it can be useful to pad the trailing space with non-breaking space HTML characters so that the old text doesn't collapse. If that's the effect you want, set `padSpace: true` inside the text object.
    
-   #### preserveSpaces[](https://gsap.com/docs/v3/Plugins/TextPlugin/#preserveSpaces)
    
    If `true`, it will force TextPlugin to maintain extra spaces, swapping in to make them show up in HTML.
    
-   #### rtl[](https://gsap.com/docs/v3/Plugins/TextPlugin/#rtl)
    
    if `true`, the text will be introduced from right-to-left (reverse order). See a [demo here](https://codepen.io/GreenSock/pen/wvrpPqv?editors=0010)
    
-   #### speed[](https://gsap.com/docs/v3/Plugins/TextPlugin/#speed)
    
    Automatically adjust the **duration** of the tween according to how many changes there are in the text; a value of `1` is relatively slow, and a value of `20` is very fast. Without this feature, you'd need to specify a duration for the tween and it might be difficult to guess what looks good (animating 10 characters over 2 seconds looks VERY different than animating 500 in the same amount of time). In other words, `speed` lets you think more in terms of "changes per unit of time". Technically the formula is "0.05 / speed \* text\_changes".
    
-   #### type[](https://gsap.com/docs/v3/Plugins/TextPlugin/#type)
    
    If you'd like to only animate the differences in the text (skipping all of the character positions that are identical between the start and end strings), set `type: "diff"` (new in GSAP 3.0.4). If, for example, the first 50 characters are the same it might look like the animation is delayed because it's going character-by-character from the start, so `type: "diff"` solves that by skipping all the identical parts.
    
-   #### value[](https://gsap.com/docs/v3/Plugins/TextPlugin/#value)
    
    The replacement text string, like `"This is the new text"` (**REQUIRED**)
    

Use the object syntax for special properties

If you use any of the special properties above, make sure you put them **inside their own object**, not inside the main vars object, like this:

```css
//GOOD:gsap.to(yourElement, {  duration: 1,  text: {    value: "Your new text",    newClass: "class2",    delimiter: " ",  },});//BAD:gsap.to(yourElement, {  duration: 1,  text: "Your new text",  newClass: "class2",  delimiter: " ",});
```

TextPlugin will recognize simple HTML nodes like `<br>` and honor them (new in GSAP 3.0.4).

## **Demos**[](https://gsap.com/docs/v3/Plugins/TextPlugin/#demos "Direct link to demos")

Check out the full collection of [text animation demos](https://codepen.io/collection/ExBwoK) on CodePen.