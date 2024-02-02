import pkg from './package.json' with { type: "json" }

export default ({
    input: 'src/index.js',
    external: Object.keys(pkg.dependencies || {}),
    output: [{
        file: pkg.main,
        format: 'es',
        sourcemap: true
    }]
});
