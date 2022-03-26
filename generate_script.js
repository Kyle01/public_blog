const fs = require('fs');
const readline = require('readline');
const showdown = require('showdown');

const convertor = new showdown.Converter();
const contentList = [];

fs.readdirSync('./writings/').forEach((file) => {
  console.log(file)
  const rl = readline.createInterface({
    input: fs.createReadStream(`./writings/${file}`),
    crlfDelay: Infinity
  });

  let lineNumber = 0;
  let path = ""
  rl.on('line', (line) => {
      lineNumber++;
      if (lineNumber === 1) {
        const title = line.toString().slice(2);
        path = line.toString().slice(2).replace(" ", "_").trim().toLowerCase();
        contentList.push({
          "text": title,
          "path": path
        });
        if (!fs.existsSync(`./posts/${path}`)){
          fs.mkdirSync(`./posts/${path}`);
        }
        const contentsJson = {
          "contents": contentList
        }
        fs.writeFileSync('./contents.json', '')
        fs.appendFileSync('./contents.json', JSON.stringify(contentsJson));
      }
  });

  rl.on('line', (line) => {
      const html = convertor.makeHtml(line);

      fs.appendFileSync(`./posts/${path}/index.html`, html);
  });
})


