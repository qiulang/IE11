module.exports = {
  overrides: [
    {
      test: "./node_modules/debug/**/*.js",
      presets: [
        [
          "@babel/preset-env",
          {
            modules: "commonjs",
            useBuiltIns: "entry",
            debug: true,
            corejs: 3,
            targets: {
              chrome: "68",
              ie: "11"
            }
          }
        ]
      ]
    }
  ]
  // presets: [
  //   "@vue/cli-plugin-babel/preset",
  //   [
  //     "@babel/preset-env",
  //     {
  //       useBuiltIns: "entry",
  //       debug: true,
  //       corejs: 3,
  //       modules: false,
  //       targets: {
  //         chrome: "68",
  //         ie: "11"
  //       }
  //     }
  //   ]
  // ]
  // ignore: [/node_modules\/(?!debug)/]
};
