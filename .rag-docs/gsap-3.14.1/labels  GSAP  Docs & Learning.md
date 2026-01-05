### labels : Object

This stores any labels that have been added to the timeline.

### Details[](https://gsap.com/docs/v3/GSAP/Timeline/labels/#details "Direct link to Details")

This stores any labels that have been added to the timeline. You can get the full object with all labels by using `timeline.labels`. For example:

```csharp
var tl = gsap.timeline();tl.addLabel("myLabel", 3);tl.addLabel("anotherLabel", 5);//now the label object has those labels and times, like:console.log(tl.labels.myLabel); // 3console.log(tl.labels.anotherLabel); // 5
```