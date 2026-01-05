### removeLabel( label:String ) : self

Removes a label from the timeline and returns the time of that label.

#### Parameters

-   #### **label**: String
    
    The name of the label to remove.
    

### Returns : self[](https://gsap.com/docs/v3/GSAP/Timeline/removeLabel()/#returns--self "Direct link to Returns : self")

self (makes chaining easier)

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/removeLabel()/#details "Direct link to Details")

Removes a label from the timeline. You could also use the remove() method to accomplish the same task.

```sql
tl.removeLabel("myLabel"); // returns the label time like 1.0
```