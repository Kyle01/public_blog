const fs = require('fs');
const showdown = require('showdown');

const file = fs.readFileSync('./markdown/test_post.md');
const convertor = showdown.Converter();
console.log(file);