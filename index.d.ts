import webpack, { Plugin, compilation } from 'webpack';

export = PreEndWebpackPlugin;

declare class PreEndWebpackPlugin extends Plugin {
	constructor(
		doneCallback?: PreEndWebpackPlugin.DoneCallback,
		failCallback?: PreEndWebpackPlugin.FailCallback
	);
}

declare namespace PreEndWebpackPlugin {
	export type DoneCallback = (stats?: webpack.Options.Stats) => void;
	export type FailCallback = (err?: Error) => void;
}
