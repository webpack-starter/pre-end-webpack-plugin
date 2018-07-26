# pre-end-webpack-plugin
Webpack 即将退出时，根据成功、失败情况分别执行不同的回调操作

## How to use

在webpack配置文件中
```javascript
import PreEndWebpackPlugin from 'pre-end-webpack-plugin';

module.exports = {
  // ... 省略其余代码
  plugins: [
    // ... 省略其余代码
    new PreEndWebpackPlugin(() => {
      // Webpack 构建成功后的回调
    }, (err) => {
      // Webpack 构建失败后的回调，err 是导致错误的原因
    })
  ]
}
```
