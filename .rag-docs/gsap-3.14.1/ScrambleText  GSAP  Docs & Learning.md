Quick Start

#### CDN Link

```scss
gsap.registerPlugin(ScrambleTextPlugin)
```

#### Minimal usage

```php
gsap.to(element, {  duration: 1,   scrambleText: "THIS IS NEW TEXT"});
```

#### loading...

Scrambles the text in a DOM element with randomized characters (uppercase by default, but you can define lowercase or a set of custom characters), refreshing new randomized characters at regular intervals while gradually revealing your new text (or the original text) over the course of the tween (left to right by default). Visually it looks like a computer decoding a string of text. Great for rollovers.

You can simply pass a string of text directly as the `scrambleText` and it'll use the defaults for revealing it, or you can customize the settings by using a generic object with any of the following properties:

```css
//use the defaultsgsap.to(element, {duration: 1, scrambleText: "THIS IS NEW TEXT"});//or customize things:gsap.to(element, {  duration: 1,   scrambleText: {    text: "THIS IS NEW TEXT",     chars: "XO",     revealDelay: 0.5,     speed: 0.3,     newClass: "myClass"  }});
```