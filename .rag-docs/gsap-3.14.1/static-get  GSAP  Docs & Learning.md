-   [ScrollSmoother](https://gsap.com/docs/v3/Plugins/ScrollSmoother/)
-   methods
-   ScrollSmoother.get()

## ScrollSmoother.get

### ScrollSmoother.get( ) : ScrollSmoother

Returns the ScrollSmoother instance (if one has been created). There can only be one instance at any given time.

### Details[](https://gsap.com/docs/v3/Plugins/ScrollSmoother/static.get()/#details "Direct link to Details")

Returns the ScrollSmoother instance (if one has been created). There can only be one instance at any given time.

```csharp
let smoother = ScrollSmoother.create({...});// then later, you can get that instance (perhaps in another file) like this:let previouslyCreatedSmoother = ScrollSmoother.get();
```

[

Previous

ScrollSmoother.create()

](https://gsap.com/docs/v3/Plugins/ScrollSmoother/static.create())[

Next

.wrapper()

](https://gsap.com/docs/v3/Plugins/ScrollSmoother/wrapper())