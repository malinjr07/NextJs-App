Utilities for controlling the alignment of text.

## [Examples](https://tailwindcss.com/docs/text-align#examples)

### [Left aligning text](https://tailwindcss.com/docs/text-align#left-aligning-text)

Use the `text-left` utility to left align the text of an element:

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

```vbnet
<p class="text-left">So I started to walk into the water...</p>
```

### [Right aligning text](https://tailwindcss.com/docs/text-align#right-aligning-text)

Use the `text-right` utility to right align the text of an element:

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

```vbnet
<p class="text-right">So I started to walk into the water...</p>
```

### [Centering text](https://tailwindcss.com/docs/text-align#centering-text)

Use the `text-center` utility to center the text of an element:

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

```vbnet
<p class="text-center">So I started to walk into the water...</p>
```

### [Justifying text](https://tailwindcss.com/docs/text-align#justifying-text)

Use the `text-justify` utility to justify the text of an element:

So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I _was_ a marine biologist.

```vbnet
<p class="text-justify">So I started to walk into the water...</p>
```

### [Using logical properties](https://tailwindcss.com/docs/text-align#using-logical-properties)

Use the `text-start` and `text-end` utilities, which use [logical properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties/Basic_concepts) to map to either the left or right side based on the text direction:

بدأتُ أسير نحو الماء. لن أكذب عليكم يا رفاق، كنتُ مرعوبًا. لكنني واصلتُ المسير، وبينما كنتُ أشق طريقي عبر الأمواج، غمرني هدوءٌ غريب. لا أعلم إن كان ذلك تدخّلًا إلهيًا أم صلة قرابة بين جميع الكائنات الحية، لكنني أقول لك يا جيري، في تلك اللحظة، كنتُ عالم أحياء بحرية.

```php-template
<div dir="rtl" lang="ar">  <p class="text-end">فبدأت بالسير نحو الماء...</p></div>
```

### [Responsive design](https://tailwindcss.com/docs/text-align#responsive-design)

Prefix a `text-align` utility with a breakpoint variant like `md:` to only apply the utility at medium screen sizes and above:

```php-template
<p class="text-left md:text-center ...">  Lorem ipsum dolor sit amet...</p>
```

Learn more about using variants in the [variants documentation](https://tailwindcss.com/docs/hover-focus-and-other-states).