\[read-only\] The vars configuration object used to create the ScrollTrigger instance.

```lua
let st = ScrollTrigger.create({  trigger: ".trigger",  start: "top center",  end: "+=500",});console.log(st.vars); // {trigger: ".trigger", start: "top center", end: "+=500"}
```

You can store arbitrary data in the `vars` object if you want; ScrollTrigger will just ignore the properties it doesn't recognize. So, for example, you could add a "group" property so that you could group your ScrollTriggers and then later to kill() all the ScrollTrigger instances from a particular group, you could do: