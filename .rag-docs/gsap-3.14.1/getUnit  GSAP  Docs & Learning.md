### Returns : String[](https://gsap.com/docs/v3/GSAP/UtilityMethods/getUnit()/#returns--string "Direct link to Returns : String")

Returns unit of a given string where the number comes first, then the unit.

___

Isolates the unit inside a string where the number is first, then the unit.

```perl
// returns the unit of a CSS valuegsap.utils.getUnit("50%"); // "%"gsap.utils.getUnit("100vw"); // "vw"
```

## Parameters[](https://gsap.com/docs/v3/GSAP/UtilityMethods/getUnit()/#parameters "Direct link to Parameters")

1.  **value** : _String_ - The value that you want the unit of.