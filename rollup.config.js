import buble from 'rollup-plugin-buble';

export default {
    entry: 'src/index.js',
    format: 'es',
    dest: 'dist/index.js', // equivalent to --output
    plugins: [buble()]
};