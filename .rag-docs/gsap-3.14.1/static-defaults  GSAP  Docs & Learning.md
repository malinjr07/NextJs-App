-   [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
-   methods
-   ScrollTrigger.defaults()

## ScrollTrigger.defaults

### ScrollTrigger.defaults( config:Object ) : null

Allows you to set the default values that apply to every ScrollTrigger upon creation, like `toggleActions`, `markers`, etc.

#### Parameters

-   #### **config**: Object
    
    An object with any default values you'd like to set, like `{toggleActions: "restart pause resume none", markers: true}`
    

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.defaults()/#details "Direct link to Details")

Allows you to set the default values that apply to every ScrollTrigger upon creation, like `toggleActions`, `markers`, etc. These will only be applied when no corresponding value is defined in a ScrollTrigger vars configuration object.

## Example[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.defaults()/#example "Direct link to Example")

```php
ScrollTrigger.defaults({  toggleActions: "restart pause resume none",  markers: {    startColor: "white",    endColor: "white",    fontSize: "18px",    indent: 10,  },});
```

[

Previous

ScrollTrigger.create()

](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.create())[

Next

ScrollTrigger.getAll()

](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.getAll())