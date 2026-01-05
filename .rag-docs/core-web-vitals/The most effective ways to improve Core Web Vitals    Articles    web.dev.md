Over the years, the web community has built up a wealth of web performance optimization knowledge. While any one optimization may improve performance for many sites, all of them at once can feel overwhelming and, realistically, only some of them are applicable to any given site.

Unless web performance is your day job, it's probably not obvious which optimizations will be the most impactful for your site. You likely won't have time for all of them, so it's important to ask yourself _what are the most impactful optimizations you can choose to improve performance for your users?_

Here's the truth about performance optimizations: you can't judge them solely on their technical merits. You also need to consider the human and organizational factors that influence how likely you'll be able to implement any given optimization. Some performance improvements may be hugely impactful in theory, but in reality, few developers will have the time or resources to implement them. On the other hand there may be hugely impactful performance best practices that just about everyone is already following. This guide identifies web performance optimizations that:

-   Have the largest real-world impact
-   Are relevant and applicable to most sites
-   Are realistic for most developers to implement

Taken together, these are the most realistic and impactful ways you can improve your [Core Web Vitals](https://web.dev/articles/vitals) metrics. If you're new to web performance—or if you're still deciding what will give you the biggest return on investment—this is the best place to start.

## Interaction to Next Paint (INP)

As the newest Core Web Vital metric, [Interaction to Next Paint (INP)](https://web.dev/articles/inp) has some of the biggest opportunities for improvement. However, because many fewer sites are passing the [threshold](https://web.dev/articles/inp#good-score) for "good" experiences compared to its [deprecated predecessor](https://web.dev/blog/fid), you may be among the many developers learning how to optimize interaction responsiveness for the first time. Start with these must-know techniques for the most effective ways to improve INP.

### 1\. Yield often to break up long tasks

Tasks are any piece of discrete work the browser does, including rendering, layout, parsing, compiling, or executing scripts. When a task exceeds 50 milliseconds in duration, it becomes a [long task](https://web.dev/articles/optimize-long-tasks). Long tasks are problematic because they can block the main thread from responding quickly to user interactions.

While you should always strive to do as little work as possible in JavaScript, you can help the main thread along by [breaking up long tasks](https://web.dev/articles/optimize-long-tasks). You can do this by [yielding to the main thread often](https://web.dev/articles/optimize-long-tasks#use_asyncawait_to_create_yield_points) so that [rendering updates](https://web.dev/articles/top-cwv#inp-rendering) and other user interactions can happen sooner.

The [Scheduler API](https://web.dev/articles/optimize-long-tasks#scheduler-yield) lets you queue work using a system of priorities. Specifically, the [scheduler.yield()](https://developer.mozilla.org/docs/Web/API/Scheduler/yield) API breaks up long tasks while ensuring that interactions can be handled without giving up their place in the task queue.

**By breaking up long tasks, you're giving the browser more opportunities to fit in critical, user-blocking work.**

### 2\. Avoid unnecessary JavaScript

[Websites are shipping more JavaScript than ever before](https://httparchive.org/reports/state-of-javascript#bytesJs), and the trend doesn't appear to be changing. When you ship too much JavaScript, you're creating an environment where tasks are competing for the main thread's attention. This can affect your website's responsiveness, especially during that crucial startup period.

However, this is not an unsolvable problem, and you have options:

-   Use [Baseline](https://web.dev/baseline) Widely available web platform features instead of redundant, JavaScript-based implementations.
-   Use the [coverage tool](https://developer.chrome.com/docs/devtools/coverage/) in Chrome DevTools to find unused code in your scripts. By reducing the size of the resources needed during startup, you can ensure that pages spend less time parsing and compiling code, which provides a smoother initial user experience.
-   Use [code splitting](https://web.dev/articles/reduce-javascript-payloads-with-code-splitting) to create a separate bundle for code not necessary for the initial render, but will still be used later.
-   If you're using a tag manager, periodically [optimize your tags](https://web.dev/articles/tag-best-practices). Older tags with unused code can be removed to reduce your tag manager's JavaScript footprint.

### 3\. Avoid large rendering updates

JavaScript execution is just one thing that affects your website's responsiveness. Rendering is a type of expensive work in its own right—and during large rendering updates, your website may respond even more slowly to user interactions.

Optimizing rendering work isn't a straightforward process, and depends on what you're trying to achieve. Even so, here are some things you can do to ensure that rendering tasks don't become long tasks:

-   Reorganize DOM reads and writes in your JavaScript code to avoid [forced layout](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_forced_synchronous_layouts) and [layout thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing).
-   [Keep DOM sizes small](https://web.dev/articles/dom-size-and-interactivity). DOM size and the intensity of layout work are correlated. When the renderer has to update the layout for a very large DOM, the work required to recalculate its layout can increase significantly.
-   [Use CSS containment](https://web.dev/articles/content-visibility) to lazily render off-screen DOM contents. It's not always straightforward, but by isolating areas containing complex layouts, you can avoid unnecessary layout and rendering work.

## Largest Contentful Paint (LCP)

[Largest Contentful Paint (LCP)](https://web.dev/articles/lcp) is the Core Web Vital that developers tend to struggle with the most—[40%](https://httparchive.org/reports/chrome-ux-report#cruxFastLcp) of sites in the Chrome UX Report don't meet the [recommended LCP threshold](https://web.dev/articles/lcp#what_is_a_good_lcp_score) for good user experiences. The Chrome team recommends the following techniques as the most effective ways to improve LCP.

### 1\. Ensure the LCP resource is discoverable from the HTML source and prioritized

The Chrome team has noticed the following in regard to LCP on the web:

-   Per the [2024 Web Almanac](https://almanac.httparchive.org/en/2024/) by HTTP Archive, [73%](https://almanac.httparchive.org/en/2024/performance#lcp-content-types) of mobile pages have an image as their LCP element.
-   An analysis of real-user data from Chrome shows that the majority of origins with poor LCP spend [less than 10%](https://web.dev/blog/common-misconceptions-lcp) of their p75 LCP time _downloading_ the LCP image.
-   Among pages with poor LCP, loading their LCP images is delayed on the client by [1,290 milliseconds](https://web.dev/blog/common-misconceptions-lcp#real_navigation_performance_data) at the 75th percentile—that's more than half of the budget for a fast experience.
-   Of pages where the LCP element was an image, [35% of those images](https://almanac.httparchive.org/en/2024/performance#lcp-static-discoverability) had source URLs that were not discoverable in the initial HTML response (such as `<img src="...">` or `<link rel="preload" href="...">`), which would allow [the browser's preload scanner](https://web.dev/articles/preload-scanner) to discover them as soon as possible.
-   According to the Web Almanac, [15%](https://almanac.httparchive.org/en/2024/performance#lcp-prioritization) of eligible pages were taking advantage of the `fetchpriority` HTML attribute to give higher priority to resources—including those that could improve a page's LCP with relatively little effort.

These statistics are telling in that developers have a big opportunity on the table to reduce both the [resource load delay](https://web.dev/articles/optimize-lcp#lcp-breakdown) and [resource load duration](https://web.dev/articles/optimize-lcp#reduce-resource-load-duration) for LCP images.

Where resource load delay is the problem, it's vital to remember **that it may be already too late to achieve good LCP if a page needs to wait for CSS or JavaScript to be fully loaded before images can even start loading**. Further, an LCP image's resource load duration can be reduced by reprioritizing it so it receives more bandwidth and thus loads more quickly using the `fetchpriority` HTML attribute.

If your LCP element is an image, the image's URL should be discoverable in the HTML response to reduce its resource load delay. Some tips to make that possible are:

-   **Load the image using an `<img>` element with the `src` or `srcset` attribute.** Do not use non-standard attributes like `data-src` that require JavaScript in order to render, as that will always be slower. [7%](https://almanac.httparchive.org/en/2024/performance#lcp-lazy-loading) of pages obscure their LCP image behind `data-src`.
-   **Prefer server-side rendering (SSR) over client-side rendering (CSR),** as SSR implies that the full page markup (including the image) is present in the HTML source. CSR solutions require JavaScript to run before the image can be discovered.
-   **If your image needs to be referenced from an external CSS or JS file, you can still include it in the HTML source using a `<link rel="preload">` tag.** Note that images referenced by inline styles are not discoverable by the browser's [preload scanner](https://web.dev/articles/preload-scanner), so even though they're found in the HTML source, discovery of them might still be blocked on the loading of other resources, so preloading can help in these cases.

Further, you can shorten a resource's load duration by ensuring that the LCP resource is loaded early, and at high priority:

-   **Add the `fetchpriority="high"` attribute to the `<img>` or `<link rel="preload">` tag of your LCP image.** This increases the priority of the image resource so it can start loading sooner.
-   **Remove the `loading="lazy"` attribute from the `<img>` tag of your LCP image.** This avoids the load delay caused by confirming that the image appears in or near the viewport.
-   **Defer non-critical resources when possible.** Moving these resources to the end of your document, [lazy-loading images](https://web.dev/articles/browser-level-image-lazy-loading) or [iframes](https://web.dev/articles/iframe-lazy-loading), or loading them asynchronously using JavaScript will help clear the way for more important resources like the LCP image to load more quickly.

### 2\. Aim for instant navigations

The ideal user experience is never having to wait for a page to load. LCP optimizations like resource discoverability and prioritization are effective at reducing how long a user waits for the LCP element to load and render—but there's a physical limit to how quickly those bytes load over the network and are rendered on a page. Well before you reach that limit, there's a prohibitively high amount of effort required to shave off just a few more milliseconds. So, in order to achieve instant navigations, we need to take a radically different approach.

Instant navigations try to load and render the page _before_ the user starts to navigate there. This way, the prerendered page can be displayed immediately with a near-zero LCP. Restorations and speculations are two ways to do this. When a user navigates back or forward to a previously visited page, it can be quickly restored from an in-memory cache, appearing exactly as the user left it. Alternatively, web applications can try to predict where a user will go next—and when correct, the next page will have already been loaded and rendered by the time the user navigates there.

Restoring previously visited pages is made possible by the [back/forward cache (bfcache)](https://web.dev/articles/bfcache). To use it, you must ensure that your pages meet [bfcache eligibility criteria](https://web.dev/articles/bfcache#optimize). Common reasons why pages aren't eligible for the bfcache are because they're served with [`no-store`](https://web.dev/articles/bfcache#minimize-no-store) caching directives or have [`unload`](https://web.dev/articles/bfcache#never-use-the-unload-event) event listeners.

Restoring fully rendered pages improves not only loading performance, but also layout stability. You can learn more about bfcache and how effective it is for improving CLS in the [Ensure pages are eligible for bfcache](https://web.dev/articles/top-cwv#cls-bfcache) section.

Prerendering the next page a user visits is another effective way to dramatically improve LCP performance, and is made possible by the [Speculation Rules API](https://developer.chrome.com/docs/web-platform/prerender-pages). To realize these gains, though, ensure that the correct pages are prerendered. Incorrect speculations waste resources on both the server and the client, which could hurt performance. So the less confident you are as to what the next page will be, the more conservative you should be with prerendering it. When in doubt, your analytics data can give you the confidence to more eagerly prerender pages with the highest probability of being visited next.

### 3\. Use a CDN to optimize TTFB

The previous recommendation focused on instant navigations, which provide the best possible experience to users, but there could be situations in which the bfcache and speculative loading techniques aren't applicable. Consider a user following a cross-origin link to your site where the initial HTML document response effectively blocks the LCP. The browser cannot start loading any subresources until it receives the first byte of the response. The sooner that happens, the sooner everything else can start happening.

This time is known as [Time to First Byte (TTFB)](https://web.dev/articles/ttfb). The best ways to reduce TTFB are to:

-   Serve your content as geographically close to your users as possible.
-   Cache that content so that it can be served quickly if it's requested again in the near future.

The best way to do both of these things is to [use a CDN](https://web.dev/articles/content-delivery-networks). CDNs distribute your resources to edge servers across the globe, thus limiting the distance those resources have to travel over the wire to users. CDNs also usually have fine-grained caching controls that can be tweaked for your site's needs.

CDNs can also serve and cache HTML documents, but according to the Web Almanac, only [33% of HTML document requests were served from a CDN](https://almanac.httparchive.org/en/2024/cdn#cdn-adoption). That means there's a significant opportunity for sites to realize additional savings.

Some tips for configuring CDNs include:

-   Cache static HTML documents even for a short time. For example, is it important that content is always fresh? Or can it be a few minutes stale?
-   Explore whether you can move dynamic logic running on your origin server to the [edge](https://en.wikipedia.org/wiki/Edge_computing), which is a feature of most modern CDNs.

Any time you can serve content directly from the edge and avoid a trip to your origin server is a performance win. Even in cases where you _do_ have to make the journey all the way to the origin, CDNs are generally optimized to do that more quickly, so it's a win either way.

## Cumulative Layout Shift (CLS)

[Cumulative Layout Shift (CLS)](https://web.dev/articles/cls) is a measure of a web page's visual stability. While CLS is the metric most sites tend to do well on, about [a quarter of them](https://httparchive.org/reports/chrome-ux-report#cruxSmallCls) still don't meet the [recommended threshold](https://web.dev/articles/cls#what_is_a_good_cls_score), so there remains a big opportunity for many sites to improve their user experience.

### 1\. Set explicit sizes on any content loaded from the page

[Layout shifts](https://web.dev/articles/cls#layout_shifts_in_detail) usually happen when existing content moves after other content finishes loading. The primary way to improve CLS is to reserve required space in advance as much as possible.

The best way to fix layout shifts caused by unsized images is to **explicitly set `width` and `height` attributes** or their equivalent CSS properties. [66%](https://almanac.httparchive.org/en/2024/performance#explicit-dimensions) of pages have at least one unsized image. Without an explicit size, these images have an initial height of `0px`, which may cause layout shifts when these images load and the browser discovers their dimensions. This represents a huge opportunity for the collective web—and that opportunity requires less effort than some of the other recommendations suggested in this guide.

Images are not the only contributors to CLS. Layout shifts may be caused by other content that typically loads after the page initially renders, including third-party ads or embedded videos. The [`aspect-ratio`](https://web.dev/articles/aspect-ratio) property can help here. It's a [Baseline Widely available](https://web.dev/baseline) CSS feature that allows developers to explicitly set an aspect ratio on images as well as non-image elements. This lets you set a dynamic `width` (for example based on screen size), and have the browser automatically calculate the appropriate height, in much the same way it does for images with dimensions.

However, it's not always possible to know the exact size of dynamic content. Even if you don't know the exact size, you can still reduce the severity of layout shifts. **Setting a sensible `min-height`** is almost always better than allowing the browser to use the default height of `0px` for an empty element. Using a `min-height` is also usually a straightforward fix, as it still allows the container to grow to the final content's height if needed—it has just reduced that amount of growth to a hopefully more tolerable level.

### 2\. Ensure pages are eligible for bfcache

As stated earlier in this guide, the [back/forward cache](https://web.dev/articles/bfcache) (bfcache) instantly loads a page from earlier or later in the browser history from a memory snapshot. While the bfcache is a significant browser-level performance optimization that improves LCP, it also entirely eliminates layout shifts. In fact, [the introduction of the bfcache in 2022](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/speed/metrics_changelog/2022_01_bfcache.md) was responsible for the biggest improvement in CLS that we saw that year.

Despite this, [a significant number of websites](https://almanac.httparchive.org/en/2024/performance#backforward-cache-bfcache) are ineligible for the bfcache, and so are missing out on this free web performance win. Unless your page is loading sensitive information you don't want restored from memory, ensure that your pages are eligible to use the bfcache.

Site owners should check if pages are [eligible for the bfcache](https://web.dev/articles/bfcache#optimize_your_pages_for_bfcache) and fix any reasons why they're not. Chrome [has a bfcache tester in DevTools](https://web.dev/articles/bfcache#test_to_ensure_your_pages_are_cacheable) and you can also use the [Not Restored Reasons API](https://developer.chrome.com/docs/web-platform/bfcache-notrestoredreasons) to detect ineligibility reasons in the field.

### 3\. Avoid animations and transitions that use layout-inducing CSS properties

Another common source of layout shifts is when elements are animated. For example, cookie banners or other notification banners that slide in from the top or bottom often contribute to CLS. This is particularly problematic when these banners push other content out of the way, but even when they don't, animating them can still impact CLS.

While HTTP Archive data can't conclusively connect animations to layout shifts, the data does show that pages that animate any CSS property that _could_ affect layout are 15% less likely to have "good" CLS than pages overall. Some properties are associated with worse CLS than others. For example, pages that animate `margin` or `border` widths have "poor" CLS at almost twice the rate that pages overall are assessed as poor.

This is perhaps not surprising, because any time you transition or animate _any_ layout-inducing CSS property, it will result in [layout shifts](https://web.dev/articles/cls#layout_shifts_in_detail). If those layout shifts are not within 500 milliseconds of a user interaction, they will impact CLS.

What may be surprising to some developers is that this is true even in cases where the element is taken outside of the normal document flow. For example, absolutely positioned elements that animate `top` or `left` cause layout shifts, even if they aren't pushing other content around. However, if instead of animating `top` or `left`, you animate `transform:translateX()` or `transform:translateY()`, it won't cause the browser to update page layout, thus avoiding layout shifts.

Preferring animation of CSS properties that can be updated on the browser's compositor thread has long been [a performance best practice](https://web.dev/articles/animations-guide) because it moves that work off the main thread to the GPU. In addition to it being a general performance best practice, it can also help improve CLS.

As a general rule, never animate or transition CSS properties that require the browser to update the page layout, unless you're doing it in response to a user tap or key press (though [not `hover`](https://web.dev/articles/cls#user-initiated_layout_shifts)). Whenever possible, prefer transitions and animations using the CSS [`transform`](https://developer.mozilla.org/docs/Web/CSS/transform) property.

The [Avoid non-composited animations](https://developer.chrome.com/docs/lighthouse/performance/non-composited-animations/) Lighthouse audit warns when a page animates potentially slow CSS properties.

## Conclusion

Improving page performance can seem daunting, especially given that there are mountains of guidance across the web to consider. However, by focusing on this short list of the most effective best practices, you can approach the problem with renewed focus, and hopefully move the needle for your website's Core Web Vitals.

If you'd like to go beyond the optimizations listed here, read these guides for more information:

-   [Optimize INP](https://web.dev/articles/optimize-inp)
-   [Optimize LCP](https://web.dev/articles/optimize-lcp)
-   [Optimize CLS](https://web.dev/articles/optimize-cls)

## Appendix: Change log

Major changes to this document will be tracked here to help explain when and why the top recommendations have changed.

### October 2024

2024 update:

-   INP
    -   We switched this metric from FID to INP in accordance with the launch of INP as a Core Web Vital metric and made it the top metric in the list.
    -   We reversed our recommendation to use the `isInputPending` API as part of breaking up long tasks. You can learn more about our reasoning in the [Optimize Long Tasks](https://web.dev/articles/optimize-long-tasks#isinputpending) article.
-   LCP
    -   We combined the discoverability and prioritization recommendations into one.
    -   We added a new recommendation to aim for instant navigations.

### January 2023

This is the initial list of recommendations:

-   LCP
    -   Ensure the LCP resource is discoverable from the HTML source
    -   Ensure the LCP resource is prioritized
    -   Use a CDN to optimize document and resource TTFB
-   CLS
    -   Set explicit sizes on any content loaded from the page
    -   Ensure pages are eligible for bfcache
    -   Avoid animations and transitions that use layout-inducing CSS properties
-   FID
    -   Avoid or break up long tasks
    -   Avoid unnecessary JavaScript
    -   Avoid large rendering updates

You can also watch this [2023 Google I/O presentation](https://www.youtube.com/watch?v=mdB-J6BRReo) for a video summary.