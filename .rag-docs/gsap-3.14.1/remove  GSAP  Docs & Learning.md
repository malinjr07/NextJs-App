### remove( value:\[Tween | Timeline | Callback | Label\] ) : self

Removes a tween, timeline, callback, or label (or array of them) from the timeline.

#### Parameters

-   #### **value**: \[Tween | Timeline | Callback | Label\]
    
    The tween, timeline, callback, or label that should be removed from the timeline (or an array of them)
    

### Returns : self[](https://gsap.com/docs/v3/GSAP/Timeline/remove()/#returns--self "Direct link to Returns : self")

self (makes chaining easier)

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/remove()/#details "Direct link to Details")

Removes a tween, timeline, callback, or label (or array of them) from the timeline.

```csharp
tl.remove(myTween);tl.remove([myTween, mySubTimeline, "myLabel"]);
```