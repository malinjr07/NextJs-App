This article will help you understand how Core Web Vitals correlate with key business metrics by exploring examples of companies which have already see positive impact for their users and business.

![Swetha Gopalakrishnan](https://web.dev/images/authors/swethagopalakrishnan.jpg)

![LCP, FID, CLS](https://web.dev/static/case-studies/vitals-business-impact/image/lcp-fid-cls-c9b4c532867a8.png)

Are you struggling to convince your stakeholders to adopt [Core Web Vitals](https://web.dev/explore/learn-core-web-vitals)? Or are you wondering if it actually helps your business? This article will help you understand how Core Web Vitals correlate with key business metrics by exploring examples of companies which have already seen positive impact for their users and business.

If you prefer video, check out this talk from Google I/O:

## Why Core Web Vitals matter to your users and business

Different stakeholders in an organization can have different priorities. Core Web Vitals can bring them all on the same page by focusing on optimizing user-centric metrics and the resulting business growth.

![Thinking about Core Web Vitals.](https://web.dev/static/case-studies/vitals-business-impact/image/thinking-cwv-fb88502dc750a.png)

The path to good Core Web Vitals can vary from site to site depending on where they are in the performance journey and how complex the site design is. It can range from grabbing the low-hanging fruit and getting meaningful results; to implementing complex solutions that fix challenging issues. Regardless of the amount of time spent, decision makers should treat this as a long term investment into growth of their business. Delivering a fast and seamless navigation experience delights users and helps turn them into loyal and returning customers. For product managers, performance should be an important criteria that defines the quality and success of new product features. And product excellence and working on interesting challenges improves developer satisfaction as well.

While [Core Web Vitals as a ranking signal](https://developers.google.com/search/blog/2021/04/more-details-page-experience) gives additional motivation to invest time in performance, adopting Core Web Vitals has many other short- and long-term benefits beyond ranking. Let's explore several case studies of global and local brands who adopted Core Web Vitals (before it had impact on ranking) because of its focus on user experience.

## Case studies

### Vodafone

[Vodafone (Italy) improved LCP](https://web.dev/case-studies/vodafone) by **31%** to achieve **8% more sales**.

![8% more sales](https://web.dev/static/case-studies/vitals-business-impact/image/8-more-sales-4ee5f9d97aaa8.png)

#### Techniques

-   Server Side Render the critical HTML.
-   Reduce render blocking Javascript.
-   Image optimization techniques.
-   Resize hero image; defer non critical resources.

#### Key learnings

-   A/B testing is the best way to measure the meaningful impact.
-   A/B should be a server side one.

### iCook

iCook improved CLS by 15% to achieve 10% more ad revenue.

![Chart showing ad revenue increasing.](https://web.dev/static/case-studies/vitals-business-impact/image/chart-showing-ad-revenue-73b72505f24c7.png)

#### Techniques

-   Less variability in ad unit size and fixed size ad slots pre-allocated in UI.
-   Optimized ad script loading logic to prioritize header bidding and defer non-critical JS.

#### Key learnings

Fill rate might get impacted but eventually revenue uplifts with ads viewability improvement.

### Tokopedia

Tokopedia improved LCP by 55% and saw 23% better average session duration.

![Before 3.78s, after 1.72s.](https://web.dev/static/case-studies/vitals-business-impact/image/before-378s-172s-a7e2271c620ab.png)

#### Techniques

-   Server-side render (SSR) LCP element.
-   Preload LCP Element.
-   Image optimization (compression, WebP, lazy load non-critical images).

#### Key learnings

-   Built a performance monitoring dashboard to monitor progress and impact across teams.
-   Experimented with different rendering techniques (for example, SSR LCP element vs SSR above the fold content vs Full client-side rendering).

### Redbus

Core Web Vitals fixes contributed to 80-100% mobile conversion rates (mCVR), and significant domain ranking uplift across Redbus’s global market properties.

![192% domain ranking uplift in Columbia](https://web.dev/static/case-studies/vitals-business-impact/image/192-domain-ranking-uplif-a892446637bc7.png)

#### Techniques

-   Fixing slots for page components and removing unoptimized tag insertion scripts [improved CLS](https://web.dev/articles/optimize-cls).
-   [Optimizing third-party scripts](https://web.dev/articles/controlling-third-party-scripts) and building microservices with single responsibility principle significantly reduced TTI and TBT.

#### Key learnings

-   Reducing CLS from 1.65 to 0 significantly uplifted their domain rankings globally.
-   Reducing TTI from around 8 s to around 4 s and TBT from around 1200 ms to around 700 ms contributed to an 80-100% increase in mCVR across global properties.
-   [Using RUM tools](https://web.dev/articles/vitals-measurement-getting-started) helped capture the real world performance metrics in lower tier markets.
-   Adopting a [performance culture](https://web.dev/articles/performance-budgets-101) is very important to avoid regression. This also improves team productivity thanks to optimized code, faster releases, and fewer production issues.

The case studies above show that you can achieve a lot by adopting best practices and implementing quick wins. Here are a few more real-world examples of this point.

![Netzwelt saw 18 percent increase ads revenue,
Lazada saw 3x LCP and 16.9 percent increase in conversion rate on mobile,
GYAO saw 3.1x LCP and 108 percent improvement in click-through rate](https://web.dev/static/case-studies/vitals-business-impact/image/netzwelt-saw-18-percent-i-0357f383ff4da.png)

The above results were achieved by grabbing low hanging fruit such as:

For more best practices, check out the [Web Vitals guidance](https://web.dev/explore/learn-core-web-vitals). Use [PageSpeed Insights](https://pagespeed.web.dev/) to audit your website and get actionable recommendations immediately.

There are several more global brands which have also benefited from investing in Core Web Vitals.

![](https://web.dev/static/case-studies/vitals-business-impact/image/uKMplYNMdeDswi14lWhM.png)

-   Tencent Video saw **70% better CTR** for videos by passing Core Web Vitals.
-   Cdiscount improved all 3 metrics which contributed to **6% revenue uplift** in their Black Friday sale.
-   Wix increased mobile origins passing Core Web Vitals by **over 250% year-on-year**.
-   Nykaa found that a 40% improvement in LCP led to **28% more organic traffic** from T2/T3 cities.
-   NIKKEI STYLE's 18% LCP improvement resulted in **9% more pageviews per session**.
-   [NDTV gained a **50% better bounce rate** after halving LCP, along with other product changes.](https://web.dev/case-studies/ndtv).
-   [Agrofy Market's 70% better LCP correlated to **76% reduction in load abandonment**.](https://web.dev/case-studies/agrofy).
-   Flipkart achieved **2.6% reduction in bounce rate** by improving Core Web Vitals metrics.
-   Ameba Manga improved the **number of comics read by 2-3 times** by improving the CLS score 10 times.
-   [Yahoo! Japan fixed CLS which led to a 98% reduction in poor pages and **15% uplift in page views per session**.](https://web.dev/case-studies/yahoo-japan-news).
-   AliExpress improved CLS by 10 times and LCP by double, which translated to **15% lesser bounce rates**.
-   GEDI saw 77% reduction in CLS and an **8% reduction in bounce rate**.

## How can you get started now?

### Step 1: Start measuring

Start by measuring field data for your site using Real User Monitoring (RUM) tools. There are various Google and third-party (3P) RUM tools available already.

![RUM tools](https://web.dev/static/case-studies/vitals-business-impact/image/rum-tools-a490806a24593.png)

#### Google RUM tools

-   Search Console
-   PageSpeed Insights
-   web-vitals JavaScript library
-   Chrome User Experience Report (CrUX)

#### Third-party RUM tools

-   Cloudflare
-   New Relic
-   Akamai
-   Calibre
-   Blue Triangle
-   Sentry
-   SpeedCurve
-   Raygun

Pick the tool that works best for you. You can go a step further and [integrate with Google Analytics 4](https://web.dev/articles/vitals-ga4) to correlate Core Web Vitals with your business metrics.

### Step 2: Convince your stakeholders

-   Educate your stakeholders about the importance of adopting Core Web Vitals to improve user experience and its correlation with company's business metrics.
-   Get a sponsor internally to start a small experiment.
-   Create a shared goal among stakeholders to improve Core Web Vitals across teams.

### Step 3: Deliver successful implementation using these tips

-   **Prioritize**: Pick a page with high traffic and/or conversion significance to deliver meaningful results (for example, ads landing page, conversion page, or popular pages).
-   **A/B Test**: Use server side testing to avoid any rendering cost. Compare results between optimized and unoptimized versions.
-   **Monitor**: Use continuous monitoring to prevent regressions.

Lastly, we believe that performance is a journey not a destination. On that note, we plan to keep this article updated with the latest case study highlights. If you also have a compelling business win and would like to be featured in this article, [submit a content proposal](https://web.dev/handbook/quick-start).