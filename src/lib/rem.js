const baseSize = 32  // 基本字体
// 设置 rem 函数
function setRem() {
  var scale = '';
  // console.log(document.body.clientWidth)
  if (document.body.clientWidth >= 1920) {
    // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
    scale = document.documentElement.clientWidth / 1920
  }
  if (document.body.clientWidth < 1920) {
    // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
    scale = document.documentElement.clientWidth / 1920
  }
  if (document.body.clientWidth <= 750) {
    // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
    scale = document.documentElement.clientWidth / 750
  }
  // 设置页面根节点字体大小
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function() {
  setRem()
}