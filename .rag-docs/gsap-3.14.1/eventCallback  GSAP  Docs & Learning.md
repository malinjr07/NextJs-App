### eventCallback( type:String, callback:Function, params:Array ) : \[Function | self\]

Gets or sets an event callback like `"onComplete", "onUpdate", "onStart"` or or `"onRepeat"` along with any parameters that should be passed to that callback.

#### Parameters

-   #### **type**: String
    
    The type of event callback, like `"onComplete", "onUpdate", "onStart"` or or `"onRepeat"`. This is case-sensitive.
    
-   #### **callback**: Function
    
    (default = `null`) - The function that should be called when the event occurs.
    
-   #### **params**: Array
    
    (default = `null`) - An array of parameters to pass the callback.
    

### Returns : \[Function | self\][](https://gsap.com/docs/v3/GSAP/Tween/eventCallback()/#returns--function--self "Direct link to Returns : [Function | self]")

Omitting the all but the first parameter returns the current value (getter), whereas defining more than the first parameter sets the callback (setter) and returns the instance itself for easier chaining.

### Details[](https://gsap.com/docs/v3/GSAP/Tween/eventCallback()/#details "Direct link to Details")

Gets or sets an event callback like `"onComplete"`, `"onUpdate"`, `"onStart"`, `"onReverseComplete"`, `"onInterrupt"`, or `"onRepeat"` along with any parameters that should be passed to that callback. This is the same as defining the values directly in the constructor's `vars` parameter initially, so the following two lines are functionally equivalent:

```bash
//the following two lines produce IDENTICAL results for onComplete behavior:gsap.to(obj, {duration: 1,x: 100,onComplete: myFunction,onCompleteParams: ['param1', 'param2']});myAnimation.eventCallback('onComplete', myFunction, ['param1', 'param2']);
```

The benefit of using `eventCallback()` is that it allows you to set callbacks even **after** the animation instance has been created and it also allows you to inspect the callback references or even delete them on-the-fly (use `null` to delete the event callback).

```bash
//deletes the onUpdatemyAnimation.eventCallback('onUpdate', null);
```

Important!

You can only have one callback associated with each event type (one `onComplete`, one `onUpdate`, one `onStart`, etc.). So setting a new value will overwrite the old one. All of the values populate the `vars` object too which was originally passed into the constructor (think of that like a storage place for configuration data).

This method serves as both a getter and setter. Omitting all but the first parameter returns the current value (getter), whereas defining more than the first parameter sets the value (setter) and returns the instance itself for easier chaining, like

```bash
myAnimation.eventCallback('onComplete', completeHandler).eventCallback('onUpdate', updateHandler, ['param1']).play(1);
```