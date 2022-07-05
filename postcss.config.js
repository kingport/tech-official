const px2rem = require('postcss-px2rem')
const postcss = px2rem({
    remUnit: 190 // 基准值
})
module.exports = {
  plugins: {
    // postcss
  }
}
