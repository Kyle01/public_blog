const fs = require('fs');
const readline = require('readline');
const showdown = require('showdown');

fs.writeFileSync('./posts/first_post.html', "")

const convertor = new showdown.Converter();
const rl = readline.createInterface({
    input: fs.createReadStream('./writings/test_post.md'),
    crlfDelay: Infinity
  });

rl.on('line', (line) => {
    const html = convertor.makeHtml(line);
    fs.appendFileSync('./posts/first_post.html', html);
})