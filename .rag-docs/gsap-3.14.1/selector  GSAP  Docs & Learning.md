### Returns : Function[](https://gsap.com/docs/v3/GSAP/UtilityMethods/selector()/#returns--function "Direct link to Returns : Function")

___

Returns a **selector function** that's scoped to a particular Element, meaning it'll only find **descendants** of that Element.

This is great for components because you can create a scoped selector for that component's main container element and then use that to select descendants. It's similar to calling `.querySelectorAll()` on that element – rather than on the document – except with a few added benefits:

-   It returns an **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** rather than a [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList), so you get access to convenient array methods like `.filter()` and `.map()`.
-   You can pass a [React ref](https://reactjs.org/docs/refs-and-the-dom.html) or [Angular ElementRef](https://angular.io/api/core/ElementRef) to [gsap.utils.selector()](https://gsap.com/docs/v3/GSAP/UtilityMethods/selector()). Then when you use the resulting function, it will automatically check for the `.current`/`.nativeElement` in case it was re-rendered since creation.

```perl
// Vanillalet q = gsap.utils.selector(myElement); // or use selector text like ".class"let boxes = q(".box"); // finds only elements with the class "box" that are INSIDE myElement// or plug directly into animationsgsap.to(q(".circle"), { x: 100 });
```

```perl
// Reactlet el = useRef();let q = gsap.utils.selector(el);useEffect(() => {  // uses el.current.querySelectorAll() internally  gsap.to(q(".box"), { x: 100 });}, []);
```

```perl
// Angular@Component({ ... })class MyComponent implements OnInit {  constructor(private el: ElementRef) {    this.q = gsap.utils.selector(el);  }  ngOnInit() {    // uses this.el.nativeElement.querySelectorAll() internally    gsap.to(this.q(".box"), { x: 100 });  }}
```

```perl
// Vue{  mounted() {    this.$nextTick(() => this.animate());  },  methods: {    animate() {      let q = gsap.utils.selector(this.$el);      // uses this.$el.querySelectorAll() internally      gsap.to(q(".box"), { x: 100 });    }  }}
```

A common pattern in React is to declare a ref for every element you want to animate, but that can make your code very verbose and hard to read.

#### loading...

By using a scoped selector, we only need to use a **single** ref. Then we can simply select the descendants.

#### loading...

## Why not just use document.querySelectorAll(".class")?[](https://gsap.com/docs/v3/GSAP/UtilityMethods/selector()/#why-not-just-use-documentqueryselectorallclass "Direct link to Why not just use document.querySelectorAll(".class")?")

Let's say you build a component that ends up rendering on a page like:

```php-template
<div class="my-component">  <div class="box"></div>  <div class="box"></div>  <div class="box"></div></div>
```

And then you use that component 3 times on a page...

```perl
<my-component><my-component><my-component>
```

Which then renders like:

```php-template
<div class="my-component">  <div class="box"></div>  <div class="box"></div>  <div class="box"></div></div><div class="my-component">  <div class="box"></div>  <div class="box"></div>  <div class="box"></div></div><div class="my-component">  <div class="box"></div>  <div class="box"></div>  <div class="box"></div></div>
```

Now think about what would happen if you wrote an animation like this so that when you click on an individual component, it animates its boxes:

```less
myComponent.addEventListener("click", () =>  gsap.to(".my-component .box", { x: 100, stagger: 0.1 }));
```

That would end up making **ALL** the boxes on the entire page animate instead of just the ones inside that component. See the issue? We need a way to scope it to just the one component. Of course you could do `myComponentRef.current.querySelectorAll(".box")` as your tween's target but it just seems cleaner to have a selector() that's already scoped and you can just reuse that over and over again to select things by class name (but only in that component).

## Parameters[](https://gsap.com/docs/v3/GSAP/UtilityMethods/selector()/#parameters "Direct link to Parameters")

1.  **scope** : \[Element | String | Object\] (optional) - The Element (or selector text or React Ref or Angular ElementRef) to which the selector text scope should be limited, like calling `scopeElement.querySelectorAll([selector-text])` rather than `document.querySelectorAll()`. In other words, it will only return **descendant** Elements of the scope Element. Remember, `gsap.utils.selector()` returns a reusable **selector function**, not the results of the selection.