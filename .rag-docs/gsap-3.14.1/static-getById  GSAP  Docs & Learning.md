## ScrollTrigger.getById

### ScrollTrigger.getById( id:String ) : ScrollTrigger

Returns the ScrollTrigger that was assigned the corresponding `id`

#### Parameters

-   #### **id**: String
    
    The identifier string that was used as the ScrollTrigger's `id`
    

### Returns : ScrollTrigger[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.getById()/#returns--scrolltrigger "Direct link to Returns : ScrollTrigger")

The ScrollTrigger instance with the matching `id` (or undefined if no matching ScrollTriggers are found)

### Details[](https://gsap.com/docs/v3/Plugins/ScrollTrigger/static.getById()/#details "Direct link to Details")

Returns the ScrollTrigger that was assigned the corresponding `id`. For example:

```bash
ScrollTrigger.create({  id: "myID",  ...});// then later...let trigger = ScrollTrigger.getById("myID");
```