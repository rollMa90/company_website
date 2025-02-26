module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 192, // 设计稿宽度为 1920px 时的比例
      propList: ["*", "!border"], // 需要转换的属性，* 表示所有属性
      selectorBlackList: [".norem"], // 不转换的选择器
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      unitPrecision: 5,
    },
  },
};
