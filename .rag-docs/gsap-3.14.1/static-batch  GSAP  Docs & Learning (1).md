## Flip.batch

### Flip.batch( id:String ) : FlipBatch

Coordinates the creation of multiple Flip animations in the properly sequenced set of steps to avoid cross-contamination.

#### Parameters

-   #### **id**: String
    
    A unique identifier for this particular batch. If a matching one already exists, that FlipBatch will be returned. Otherwise, a new one will be created and returned. If you kill() a batch, it unregisters it and frees up that id.
    

### Returns : FlipBatch[](https://gsap.com/docs/v3/Plugins/Flip/static.batch()/#returns--flipbatch "Direct link to Returns : FlipBatch")

A FlipBatch instance

### Details[](https://gsap.com/docs/v3/Plugins/Flip/static.batch()/#details "Direct link to Details")

Coordinates the creation of multiple Flip animations in the properly sequenced set of steps to avoid cross-contamination. For example, _all_ of the `getState()` calls must happen **FIRST** because a state change in one may affect the position/size of elements in another. Then all the state changes should occur, and finally, the animations get created based on the entire new state.

Perhaps you've got multiple independent React components that are all involved in a Flip but the logic needs to be encapsulated as much as possible. Flip.batch() serves as a central hub. You grab the batch instance (typically by an `id`, but that's optional) and then create as many "actions" as you want (likely one for each component), and then `run()` the whole batch in a coordinated way, ensuring that the `getState()` calls happen, then the `setState()`, then `animate()`.

## Usage

```sql
// first create (or get the existing) batch by idlet batch = Flip.batch("id");
```

Now we need to populate it with "actions". Each action can have any of the following (all are optional):

```python
// add an action to the batchlet action = batch.add({  // record any state objects that you may need in the animate() function. "self" is the action.  getState(self) {    // Use Flip.getState() any number of times in here, return data the way you prefer working with it later via self.state.    return Flip.getState(".box, .container");  },  // make state changes here...  setState(self) {    el.classList.toggle("active");    return gsap.utils.toArray(".box, .container"); // optionally return Array of targets; added to self.targets. Required if you want onEnter/onLeave to fire.  },  animate(self) {    // create as many Flip animations in here as you'd like...    Flip.from(self.state, { duration: 1 });    // self.state = whatever was returned from this action's getState() call    // self.targets = whatever was returned from this action's setState() call    // self.batch = parent batch instance    // self.timeline = flip animation timeline (same as self.batch.timeline - always reused)  },  onEnter(elements) {    // only called when elements are entering (ones that weren't present in the initial state/layout).    // in order for this to work, you must return an Array of targets from .setState()  },  onLeave(elements) {    // only called when elements are leaving (ones that are no longer present compared to the initial state/layout).    // in order for this to work, you must return an Array of targets from .setState()  },  onStart(self) {    // animation started  },  onComplete(self) {    // animation finished  },  once: true, // removes the action from its batch when animate() is called});
```

After you `add()` as many actions as you want to the batch instance, you can simply `batch.run()` and it'll execute things in the proper order:

1.  getState()
2.  setState()
3.  animate()

## What if I need to wait for the new state to load or render?[](https://gsap.com/docs/v3/Plugins/Flip/static.batch()/#what-if-i-need-to-wait-for-the-new-state-to-load-or-render "Direct link to What if I need to wait for the new state to load or render?")

No problem! There are two strategies you can choose from:

-   **Use loadState(done) instead of setState()**  
    The magic of loadState() is it gives you a "done" function to call whenever you're ready to continue, so it effectively pauses the batch in the meantime, preventing it from moving onto the animate() calls until all the loadState() `done` functions are triggered.
    
    ```csharp
    batch.add({  ...  // all done() when you're ready to continue.  loadState(done) {    // Pass targets to done(targets) if you want onEnter/onLeave to work.    done(gsap.utils.toArray(".box, .container"));  }});
    ```
    
    \-OR-
    
-   **Break up the batch.run()**  
    You can trigger **just** the `getState()` part of the entire batch first...
    
    ```cpp
    // calls JUST getState() on all of the batch's actionsbatch.getState();
    ```
    
    Then apply state changes **OUTSIDE** of the batch, and then when you're ready...
    
    ```bash
    // true means "skip the .getState() part!"batch.run(true);
    ```
    
    Done!
    

## Cleanup[](https://gsap.com/docs/v3/Plugins/Flip/static.batch()/#cleanup "Direct link to Cleanup")

You can `kill()` a batch...

...or an individual action:

```csharp
let action = batch.add({...});// then later...action.kill();
```

Remember, if you just want to run the action once, you can set `once: true` on that action and it'll automatically get killed when its animate() function is called.

## Batch methods/properties[](https://gsap.com/docs/v3/Plugins/Flip/static.batch()/#batch-methodsproperties "Direct link to Batch methods/properties")

```less
// flushes all actions and clears the batch.statebatch.clear();// true means only clear batch.state but keep all the actionsbatch.clear(true);// triggers ONLY the getState() of all actionsbatch.getState();// Searches the state objects that were captured inside ANY of this batch actions' most recent getState() call and returns the first one it finds that matches the provided data-flip-id value. For example, if you Flip.getState("#someID") inside this action's getState() and there's a <div id="#someID" data-flip-id="box1"></div>, you could find that using action.getStateById("box1"); As a last resort, it will search batch.state too.batch.getStateById("flip-id");// passing true records a merged copy of ALL the .getState() results into batch.statebatch.getState(true);// kills entire batchbatch.kill();// same as action.kill()batch.remove(action);// executes the following parts of every action in this order: getState(), loadState(), setState(), animate(), onEnter(), onLeave(), onStart(), onComplete()batch.run();// true means "skip the getState() part"batch.run(true);// --- PROPERTIES ---// Array of all the FlipAction instancesbatch.actions;// a place to store any arbitrary data - your choicebatch.data;// the batch idbatch.id;// whenever you Flip.getState(targets, {batch: "id"}) it copies the results into the batch.state object. If you batch.getState(true), it'll overwrite the contents with all the ones that occur inside the .getState() of any actions in the batch.batch.state;// the timeline instance. All Flip animations created inside animate() will be pushed into this.batch.timeline;
```

## Action methods/properties[](https://gsap.com/docs/v3/Plugins/Flip/static.batch()/#action-methodsproperties "Direct link to Action methods/properties")

```cpp
// same as batch.getStateById() except that it limits the scope to ones that were captured inside this action's getState() rather than the entire batch.action.getStateById("flip-id");// kills just the action (removes it from the batch)action.kill();// --- PROPERTIES ---// the parent batch instanceaction.batch;// whatever was returned by this action's getState()action.state;// the batch's timeline (reused) - same as action.batch.timelineaction.timeline;// whatever was returned by this action's setState() or the done() function in loadState()action.targets;
```

## Demo[](https://gsap.com/docs/v3/Plugins/Flip/static.batch()/#demo "Direct link to Demo")

Here's an advanced demo showing Flip.batch() at work:  
[https://codesandbox.io/s/topeka-quiz-gsap-flip-plugin-rs7lw](https://codesandbox.io/s/topeka-quiz-gsap-flip-plugin-rs7lw)