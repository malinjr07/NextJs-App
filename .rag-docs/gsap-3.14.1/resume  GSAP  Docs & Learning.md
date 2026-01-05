### resume( ) : self

Resumes playing without altering direction (forward or reversed).

### Returns : self[](https://gsap.com/docs/v3/GSAP/Tween/resume()/#returns--self "Direct link to Returns : self")

For easier chaining

### Details[](https://gsap.com/docs/v3/GSAP/Tween/resume()/#details "Direct link to Details")

Resumes playing without altering direction (forward or reversed).

**Note:** if the Tween's timeScale is exactly 0 when resume() is called, it will be changed to 1 (otherwise it wouldn't play). If you're going to tween it up from 0 you can set it to a very small number before calling resume() like `myAnimation.timeScale(myAnimation.timeScale() || 0.001).resume()` so that it doesn't jump to 1.