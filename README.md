# ie11

babel fails to polyfill [debug module](https://github.com/visionmedia/debug) version 4

But if I use v3 IE can show the page correctly. It turns out that it is NOT babel can polyfill v3 not but v4, it is because debug v3 can work in IE 11 without polyfill!

Is this [a babel bug](https://github.com/babel/babel/issues/10707) ? Since I raised the issue in 2019 I still can not set configure Babel to transpile node modules, e.g. debug 4.x



