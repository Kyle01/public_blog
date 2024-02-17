const fs = require('fs');
const readline = require('readline');
const showdown = require('showdown');
const convertor = new showdown.Converter();
const contentList = [];
const siteMapList = [];

convertor.setOption('parseImgDimensions', true);

fs.readdirSync('./writings/').forEach((file) => {
  const rl = readline.createInterface({
    input: fs.createReadStream(`./writings/${file}`),
    crlfDelay: Infinity
  });

  let lineNumber = 0;
  let title = "";
  let path = ""
  rl.on('line', (line) => {
      lineNumber++;
      if (lineNumber === 1) {
        title = line.toString().slice(3);
        path = line.toString().slice(3).replaceAll(" ", "_").trim().toLowerCase();
        if (!fs.existsSync(`./posts/${path}`)) {
          fs.mkdirSync(`./posts/${path}`);
        }
        fs.writeFileSync(`./posts/${path}/index.html`, '');
        fs.appendFileSync(`./posts/${path}/index.html`, `<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>`);
        fs.appendFileSync(`./posts/${path}/index.html`, `<link rel="stylesheet" type="text/css" href="../../style.css">`);
      }
      else if (lineNumber === 2) {
        const date = line.toString().split(' - ')[0].slice(5);
        contentList.push({
          "text": `${date} - ${title}`,
          "path": `${path}`
        });
        siteMapList.push(`https://www.kylehasablog.com/posts/${path}`);

        if (!fs.existsSync(`./posts/${path}`)){
          fs.mkdirSync(`./posts/${path}`);
        }
        const contentsJson = {
          "contents": contentList
        }
        fs.writeFileSync('./sitemap.txt', '')
        siteMapList.forEach((line) => fs.appendFileSync('./sitemap.txt', line += "\n"))

        fs.writeFileSync('./contents.json', '')
        fs.appendFileSync('./contents.json', JSON.stringify(contentsJson));
      }
      const html = convertor.makeHtml(line);
    
      fs.appendFileSync(`./posts/${path}/index.html`, html);
  });
})


