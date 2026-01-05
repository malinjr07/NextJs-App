### split( vars:Object ) ;

\[static\] Splits the text in the target element(s) according to the provided config properties.

#### Parameters

-   #### **vars**: Object
    
    (default = `null`) - a configuration object defining any of the following values: `type, charsClass, wordsClass, linesClass`, or `position`. (see the constructor description for details)
    

### Details[](https://gsap.com/docs/v3/Plugins/SplitText/split()/#details "Direct link to Details")

Splits the text in the target element(s) according to the provided config properties. Normally you don't need to use this method because it is called in the constructor automatically, but if you want to **change** the way the text is split after the SplitText instance is created, you can use this method. It will automatically call `revert()` first if necessary.