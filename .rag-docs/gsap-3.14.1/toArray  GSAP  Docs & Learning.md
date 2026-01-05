Converts selector text, an Array of objects or selector text, a NodeList, an object, or almost any Array-like object into a flat `Array`. You can optionally define a scope (added in 3.7.0) for the selector text which limits results to descendants of that scope Element.

```sql
// these all return the corresponding elements wrapped in a flat Array:// selector text (returns the raw elements wrapped in an Array)let targets = gsap.utils.toArray(".class");// raw element/objectlet targets = gsap.utils.toArray(myElement);// Array of selector text (same result as ".class1, .class2")let targets = gsap.utils.toArray([".class1", ".class2"]);// Only descendant elements of myElementlet targets = gsap.utils.toArray(".class", myElement);
```