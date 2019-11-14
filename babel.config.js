module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        debug: true,
        corejs: 3,
        modules: false,
        targets: {
          chrome: "68",
          ie: "11"
        }
      }
    ]
  ]
};
