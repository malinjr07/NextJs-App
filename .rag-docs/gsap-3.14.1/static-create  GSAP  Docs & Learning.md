Creates a new standalone ScrollTrigger instance. You don't need to put ScrollTriggers directly into animations (though that's probably the most common use case). With a standalone ScrollTrigger, you can tap into the rich callback system to do almost anything.

```php
ScrollTrigger.create({  trigger: "#id",  start: "top top",  endTrigger: "#otherID",  end: "bottom 50%+=100px",  onToggle: (self) => console.log("toggled, isActive:", self.isActive),  onUpdate: (self) => {    console.log(      "progress:",      self.progress.toFixed(3),      "direction:",      self.direction,      "velocity",      self.getVelocity()    );  },});
```