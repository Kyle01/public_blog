const fs = require('fs');
const readline = require('readline');
const showdown = require('showdown');

const convertor = showdown.Converter();

const rl = readline.createInterface({
    input: fs.createReadStream('./markdown/test_post.md'),
    crlfDelay: Infinity
  });

rl.on('line', (line) => {
    console.log(`Line from file: ${line}`);
})