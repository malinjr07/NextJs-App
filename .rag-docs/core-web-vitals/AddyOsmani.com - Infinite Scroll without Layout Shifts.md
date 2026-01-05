**Today, we’ll look at how patterns for loading long lists can impact the [Core Web Vitals](https://web.dev/vitals) with some recommended fixes.**

Infinite scrolling is a loading strategy where new content is fetched and rendered while the user scrolls down a page. There isn’t a `Load More` button or `Next` link; the fetches for more content are automatically made in the background.

![A comparison of infinite scroll vs. pagination vs load more](https://addyosmani.com/assets/images/infinite-scroll.png)

This pattern has been popularized by social media platforms and applications like Twitter, where Twitter loads more tweets as you scroll down the timeline. It is a type of pagination, which does not involve navigation, but rather watches the scroll location. Once they get down to the edge, the next batch of tweets will be fetched.

The major benefit of infinite scrolling websites is that it allows users to stay engaged and keep browsing. Some might say this pattern also encourages endless scrolling.

Dividing the content of a site or search results into pages is still the most popular strategy in terms of user experience. Pagination gives us a sense of a specific location (a URL) and a choice of just where to go next. Its a model that works well for accessibility, SEO and is widely used.

Because pagination requires a click to navigate to the next page, there’s an argument it has more friction for engagement compared to infinite scrolling on mobile, but your mileage may vary.

## Load More

“Load More” is a hybrid between pagination and infinite scrolling. A user must click or tap a `Load More` button for new content to be loaded in. It gives users a feeling of control over the content, with more logical breaks. It also has the benefit of letting users pause at the footer before deciding to load more content in.

### …If you have content below the list, like a footer.

**Infinite scrolling prohibits the user from reaching the footer of the page in many implementations. Because it keeps pushing this content down, it can cause layout shifts.**

And in fact, this is one of the main design challenges of infinite scrolling: as items are constantly loaded as the user reaches the bottom of the list, the user can see the footer for a second or two before the next collection of results is loaded and the footer is moved out of view.

![Layout Shifts from infinite scroll](https://addyosmani.com/assets/images/infinite-scroll-shift.png)

It’s not uncommon to see sites include a list of links, newsletter dialogs or social media callouts in their footers, but as this content keeps getting pushed down on scroll, it can make your [Cumulative Layout Shift](https://web.dev/cls/) score worse. This can also be seen in sites with Load More if content is in the footer.

Below is a real-world example of layout shifts due to infinite scroll in a page with a footer:

 

([YouTube link](https://www.youtube.com/embed/vo5VTg-9I4g))

### …If you haven’t reserved sufficient space for the next items (or prefetched these items) ahead of time

Have you ever scrolled down an infinite list only, to find that there’s a moment where you hit the bottom of the window and it “pops” when new content has been fetched and appended? By not (pre)fetching this content ahead of time or at least reserving space for the next sets of rows using a container or placeholder, there’s a chance you could be introducing surprising shifts to elements around or below the page.

Below is a real-world example of the current Facebook.com feed which uses infinite scroll. While it creates placeholders for new content, these placeholders have different dimensions to the final content they include. Layout shifts are caused because sufficient space is not being reserved for new cards ahead of time:

 

Below, we can use **Chrome DevTools > Performance panel > Experience** to identify the elements contributing to layout shift. As suspected, they were the cards near the edge of the viewport:

![DevTools displaying layout shifts for the cards on Facebook.com's timeline feed](https://addyosmani.com/assets/images/devtools-cls-fb.png)

## Cumulative Layout Shift

As a reminder, [Cumulative Layout Shift](https://web.dev/cls/) (CLS) is a [Core Web Vitals](https://web.dev/vitals) metric that measures the layout shifts happening in the viewport when an element on the page **changes its start position**. The only caveat that browsers like Chrome currently consider in CLS is **if there is a user input** we consider a **500ms allowance for user initiated layout shifts that will be excluded from the scoring calculations**.

Both in the case of **Infinite Scrolling** and the **Load More Button** pattern layout shifts can occur if content (e.g footers) is being pushed down and it will be taken in account on the page if it takes longer than 500ms from the user clicking on the button to the time when the items are ready to be displayed.

For technical reasons, it’s expected this 500ms requirement may be tricky to be satisfied unless your infinite scrolling or load more implementations do one of the below.

It is critical to **reserve sufficient space** (e.g a properly sized placeholder that matches content) for any dynamic content that sits behind a network fetch. Not doing so may cause layout shifts. This applies to any UX patterns you might use over the lifetime of a document.

Patterns like infinite scrolling may be subject to layout shifts on fling. Before new dynamic content is rendered into the viewport, attempt to reserve enough space for any skeleton UI (e.g cards) to minimize the impact this has on shifting down other content that is visible. If your users enjoy infinite scroll, we do not recommend removing it just to optimize for CLS, but believe space reservation should be sufficient.

The three major tips I’d consider if using infinite scroll or load more are:

-   **Reserve enough space for content that may be loaded in before the user scrolls to that part of the page**. This can be acheived in a number of ways, including via Skeleton Placeholders for content that may require data fetches to complete before anything can be rendered.
-   **Remove the footer or any DOM elements at the bottom of the page that may be pushed down by content loading in**. This limits the impact on CLS.
-   **Prefetch data and images for below-the-fold content so that by the time a user scrolls that far, it’s already there**. This approach is more complex, but goes beyond just reserving space for the next sets of content, because there’s a good chance it has already been fetched.

Related to the last point, Instagram.com’s infinite scroll does not cause layout shifts and its single page app transitions occur within 500ms. Here is a video of the Instagram feed with the Web Vitals extension on:

 

([YouTube link](https://www.youtube.com/embed/qjqeJhvowxo))

Below is a snapshot of Instagram.com’s [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report) data, where we can see that 78% of loads have a good CLS at an origin-level and 59% of loads have a good CLS specific to the URL in the above video.

![Instagram CrUX data highlighting good CLS scores for the origin and decent CLS for the page](https://addyosmani.com/assets/images/tweet-cls-ig.png)

## Are there efficient ways to implement infinite lists?

List virtualization libraries like [react-window](https://github.com/bvaughn/react-window) are a great option if you’re optimizing long lists. “Virtualizing” a list of items means you main a window and move that window around your list. Windowing in react-virtualized works by:

-   Having a small container DOM element (e.g `<ul>`) with relative positioning (window)
-   Having a big DOM element for scrolling
-   Absolutely positioning children inside the container, setting their styles for top, left, width and height.
-   Rather than rendering 1000s of elements from a list at once, virtualization focuses on rendering just items visible to the user.

Here’s a [demo](https://tmdb-viewer.netlify.app/) that uses the [Web Vitals extension](https://addyosmani.com/blog/web-vitals-extension/) to measure layout shift as we scroll through an infinite list. Notice how the combination of content always being fetched ahead of time and no footer make for a seamless experience:

 

([YouTube link](https://www.youtube.com/embed/Kx1CWkYOxnE))

What about “Load More”? Here’s a [different demo](https://tmdb-load-more.netlify.app/) implemented using react-window where this time a “Load more” button needs to be clicked to fetch the new rows. Similarly notice how thanks to list virtualization, there’s no layout shift:

 

([YouTube link](https://www.youtube.com/embed/LVQqoItdRAA))

As [announced](https://web.dev/vitals-tools) mid-2020, developer tools from both Chrome and Google Search, like [Lighthouse](https://developers.google.com/web/tools/lighthouse/), [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) and [Search Console](https://search.google.com/search-console/welcome), now support measuring CLS. There is however some nuance here.

**Field and lab data can differ**

Search Console and the field section of PageSpeed Insights Report use Chrome User Experience Report data and measure CLS until unload, stopping reporting after pagehidden (i.e this is inclusive of CLS beyond page-load). What this means is that **the reporting you see in different tools can vary based on the window of time we are able to look at**.

Lab tools like Lighthouse have to define a shorter window because they are focused on the experience during page load and optimize for delivering information about the experience quickly. Field data is able to take a more holistic view of the user-experience, which could include shifts caused after a page has loaded and the user has scrolled down to other interactions contributing to CLS.

During development, I like to use the Web Vitals extension as it leverages the same underlying WebPerf APIs as RUM to measure CLS, and makes it clear how the costs of shifts add up.

## Future: Cumulative layout shifts and session-level normalization

At some point in the future, it is possible that the web’s metric for layout shift may not be cumulative, but use some other normalization that doesn’t allow for a slow build-up for long-lived sites. We look forward to collaborating with the web performance community as we think through how to normalize metrics across session lengths.

Users who rely on keyboards to navigate the web often consider infinite scrolling experiences a challenge to use. While I understand why teams use this pattern, it’s useful to keep in mind that it does have downsides. I personally prefer the “Load More” approach as it’s slightly more accessible.

[**Wordpress.org’s**](http://wordpress.org's/) **accessibility guides advise against infinite scrolling because of very important accessibility problems, including:**

-   You can’t go back to your previous position using the “back” button of the browser.
-   It’s not easy to get to the footer or the last things in the infinite scroll.
-   When you load big files, there’s a large memory footprint.
-   Without Javascript, it doesn’t work.
-   You can’t control keyboard components only.
-   There is no clear auditory input or guidance for how infinite scrolling works with assistive devices.
-   There is no URL to a particular location on the website.

As you evaluate options for how to render large lists efficiently, it is worth keeping these concerns in mind.

## Wrapping up

A number of UX patterns may appear harmless, but their cost in the aggregate (e.g pushing down content constantly) can impact users, such as is the case with infinite scroll and layout shifts. When in doubt, check out tools such as [Search Console](https://search.google.com/search-console/welcome), [Lighthouse](https://developers.google.com/web/tools/lighthouse/) / [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) and [DevTools](https://developers.google.com/web/tools/chrome-devtools/), which all support highlight the impact these patterns can have on user-experience.

_With thanks to Annie Sullivan from the Chrome Speed Metrics team for her review._