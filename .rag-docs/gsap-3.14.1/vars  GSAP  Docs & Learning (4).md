-   [SplitText](https://gsap.com/docs/v3/Plugins/SplitText/)
-   properties
-   .vars

### .vars : Object

\[read-only\] The vars configuration object used to create the SplitText instance

### Details[](https://gsap.com/docs/v3/Plugins/SplitText/vars/#details "Direct link to Details")

\[read-only\] The vars configuration object used to create the SplitText instance.

## Example[](https://gsap.com/docs/v3/Plugins/SplitText/vars/#example "Direct link to Example")

```lua
let splitText = SplitText.create({  type: "chars,words",  wordsClass: "word++",});console.log(splitText.vars); // {type: "chars,words",wordsClass: "word++",}
```

You can store arbitrary data in the `vars` object if you want; SplitText will just ignore the properties it doesn't recognize. So, for example, you could add a "group" property so that you could group your Splits and then later to kill() all the SplitText instances from a particular group, you could do:

```css
// helper function (reusable):let getGroup = (group) =>  SplitText.getAll().filter((t) => t.vars.group === group);// then, to kill() anything with a group of "my-group":getGroup("my-group").forEach((t) => t.kill());
```

[

Previous

.masks

](https://gsap.com/docs/v3/Plugins/SplitText/masks)[

Next

.words

](https://gsap.com/docs/v3/Plugins/SplitText/words)