const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = function(env) {
    return {
        context: path.resolve(__dirname),
        entry: {
            main: './src/main.ts',
            vendor: [
                '@angular/core',
                '@angular/platform-browser',
                '@angular/platform-browser-dynamic',
                'zone.js',
                'rxjs',
            ],
			polifills: [
				'polifills',
			],
        },
        output: {
            filename: '[name].bundle.js',
			chunkFilename: '[name]-chunk.js',
            path: path.resolve(__dirname, 'dist'),
        },
        devtool: 'source-maps',
        resolve: {
            extensions: ['.ts', '.js'],
            modules: [
                "node_modules",
                "src",
            ],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loaders: [
						"ts-loader",
						"angular-router-loader",
					],
                    exclude: [
                        /node_modules/,
                    ],
                },
                {
                    test: /\.(html|css)$/,
                    loader: 'raw-loader',
                    exclude: /\.async\.(html|css)$/
                },
                {
                    test: /\.scss$/,
                    loaders: ['raw-loader', "sass-loader"],
                }
            ]
        },
        plugins: [
			new CleanWebpackPlugin(['dist']),
            new webpack.ContextReplacementPlugin(
                /angular(\\|\/)core/,
                '../'
            ),
            new HTMLWebpackPlugin({
                template: './src/index.html',
				chunks: [
					'vendor',
					'polifills',
					'main',
				],
				chunksSortMode: 'manual',
            }),
            new webpack.optimize.CommonsChunkPlugin({
				name: 'vendor',
            }),
            // new uglify(),
        ]
    };
};
