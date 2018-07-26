/**
 * 在 Webpack 即将退出时，根据成功、失败情况分别执行不同的回调操作
 * --------------------
 * how to use ?
 * 在webpack配置文件中
 * import PreEndWebpackPlugin from 'pre-end-webpack-plugin';
 * plugins: [
 * 	new PreEndWebpackPlugin(() => {
 * 		// Webpack 构建成功后的回调
 * 	}, (err) => {
 * 		// Webpack 构建失败后的回调，err 是导致错误的原因
 * 	})
 * ]
 */

function PreEndWebpackPlugin(doneCallback, failCallback) {
	// 实例化时传入两个回调函数
	this.doneCallback = doneCallback;
	this.failCallback = failCallback;
}
PreEndWebpackPlugin.prototype.apply = function (compiler) {
	// done事件，在成功构建并且输出了文件后，Webpack 即将退出时发生；
	compiler.plugin('done', (stats) => {
		this.doneCallback && this.doneCallback(stats);
	});
	// failed事件，在构建出现异常导致构建失败，Webpack 即将退出时发生；
	compiler.plugin('failed', (err) => {
		this.failCallback && this.failCallback(err);
	});
}

module.exports = PreEndWebpackPlugin;
