module.exports = {
	staticPath: './static',
    distPath: './dist',
	dev: {
		srcDir: './src',
		outputDir: './dist',
		assetsPublicPath: '/',
		devServerPort: 8000,
		entryHtml: './src/index.html',
		entry: {
			app: './src/index.js'
		},
		env: {
			PORT: process.env.PORT || 8000
		}
  	},
	electron: {
	    entry: {
			app: './src/index.js'
	    },
	    paths: {
		 	mainDev: './src-electron/main.dev.js',
		  	main: './src-electron/main.js',
		  	renderer: './src/index.js'
	    }
  	}
}
