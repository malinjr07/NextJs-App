Returns a function to distribute an array of values based on the inputs that you give it.

Distributes an amount across the elements in an array according to various configuration options. Internally, it's what [advanced staggers](https://gsap.com/resources/getting-started/Staggers) use, but you can apply it for any value. It essentially assigns values based on the element's position in the array (or in a grid):

```cpp
// get a function that, when fed an index value, will return a value according to the configuration optionslet distributor = gsap.utils.distribute({  // the base value to start from (default:0)  base: 50,  // total amount to distribute across the targets (this amount gets added to the "base" when returned)  amount: 100,  // position in the targets array to begin from (can be an index number, a keyword like "start", "center",  // "edges", "random", or "end", or an array of ratios along the x-axis and y-axis like [0.25, 0.75]) (default: 0)  from: "center",  // bases distribution on the element's position in a grid [rows, columns] instead of a flat array.  // You can also define the rows and columns in array format like [5, 10]  grid: "auto",  // for grid-based distributing, you can limit measurements to one axis ("x" or "y")  axis: "y",  // distributes based on an ease curve!  ease: "power1.inOut",});// get an array of all the elements with the class ".box" appliedlet targets = gsap.utils.toArray(".box");// Now for any target element, we can just feed in its index from the targets array (along with the target// and array) and it'll do all the calculations and return the appropriate amount:let distributedValue = distributor(2, targets[2], targets);
```

```css
// animate the scale of all ".class" elements so that the ones in the middle are 0.5 and the ones on// the outer edges are 3gsap.to(".class", {  scale: gsap.utils.distribute({    base: 0.5,    amount: 2.5,    from: "center",  }),});
```

And the companion pen used in the video.

#### loading...