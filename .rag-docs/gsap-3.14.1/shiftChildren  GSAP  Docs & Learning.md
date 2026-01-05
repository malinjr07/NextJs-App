### shiftChildren( amount:Number, adjustLabels:Boolean, ignoreBeforeTime:Number ) : self

Shifts the startTime of the timeline's children by a certain amount and optionally adjusts labels too.

#### Parameters

-   #### **amount**: Number
    
    Number of seconds (or frames for frames-based timelines) to move each child.
    
-   #### **adjustLabels**: Boolean
    
    (default = `false`) - If `true`, the timing of all labels will be adjusted as well.
    
-   #### **ignoreBeforeTime**: Number
    
    (default = `0`) - All children that begin at or after the `startAtTime` will be affected by the shift (the default is 0, causing all children to be affected). This provides an easy way to splice children into a certain spot on the timeline, pushing only the children after that point back to make room.
    

### Returns : self[](https://gsap.com/docs/v3/GSAP/Timeline/shiftChildren()/#returns--self "Direct link to Returns : self")

self (makes chaining easier)

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/shiftChildren()/#details "Direct link to Details")

Shifts the `startTime` of the timeline's children by a certain amount and optionally adjusts labels too. This can be useful when you want to prepend children or splice them into a certain spot, moving existing ones back to make room for the new ones.