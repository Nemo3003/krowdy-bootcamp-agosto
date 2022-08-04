import esbuild from 'esbuild'

esbuild.build({
	entryPoints:['src/index.js'],
	watch: true,
	bundle: true,
	outdir: 'dist',
	target: 'CHROME',
	minify: true
})
	.then(response => console.log(JSON.stringify(response)))
	.catch