Last updated

June 16, 2025

In Node.js versions prior to 18, Next.js automatically polyfills `fetch()` with [undici](https://nextjs.org/docs/architecture/supported-browsers#polyfills) and enables [HTTP Keep-Alive](https://developer.mozilla.org/docs/Web/HTTP/Headers/Keep-Alive) by default.

To disable HTTP Keep-Alive for all `fetch()` calls on the server-side, open `next.config.js` and add the `httpAgentOptions` config:

next.config.js

```java
module.exports = {
  httpAgentOptions: {
    keepAlive: false,
  },
}
```