# ie11

babel fails to polyfill [debug module](https://github.com/visionmedia/debug) version 4

But if I use v3 IE can show the page correctly

Is this [a babel bug](https://github.com/babel/babel/issues/10707) ? Through the discussion I finally make it work for IE 11

So it is NOT babel can polyfill v3 not but v4, it is b/c v3 can work in IE 11 without polyfill!