module.exports = {
  plugins: {
    //...
    // 'autoprefixer': {
    //   browsers: [
    //     'last 10 Chrome versions',
    //     'last 5 Firefox versions',
    //     'Safari >= 6',
    //     'ie> 8'
    //   ]
    // },
    'postcss-pxtorem': {
      rootValue: 32, // 字体大小    原设计稿/32 = xxxrem * 32 = 现在尺寸
      propList: ['*'],
      selectorBlackList: ['header','.show','.drawer','.navs','nav','.active1','page','arrow','.el-button','.el-button--primary','.spacing'],
      minPixelValue: 10
    }
  }
}