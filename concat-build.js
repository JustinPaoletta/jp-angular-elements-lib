const concat = require('concat');

const files = [
    './dist/element-two/runtime.js',
    './dist/element-two/polyfills.js',
    './dist/element-two/main.js'
]

concat(files, './dist/element-two/element-two.js');
console.info('Custom ElementTwo Successfully Created!');
