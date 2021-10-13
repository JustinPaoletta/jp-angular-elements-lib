const concat = require('concat');

const files = [
    './dist/element-three/runtime.js',
    './dist/element-three/polyfills.js',
    './dist/element-three/main.js'
]

concat(files, './dist/element-three/element-three.js');
console.info('Custom ElementThree Successfully Created!');
