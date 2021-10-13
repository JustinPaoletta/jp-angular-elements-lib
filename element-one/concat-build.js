const concat = require('concat');

const files = [
    './dist/element-one/runtime.js',
    './dist/element-one/polyfills.js',
    './dist/element-one/main.js'
]

concat(files, './dist/element-one/element-one.js');
console.info('Custom ElementOne Successfully Created!');
