import pkg from './package.json' with { type: "json" }
import org from "./src/index.js";

export default ({
    input: 'src/index.js',
    external: Object.keys(pkg.dependencies || {}),
    plugins: [org()],
    output: [{
        file: pkg.main,
        format: 'es',
        sourcemap: true
    }]
});
