console.log('hello world')

const contents = document.getElementById('contents')
const li = document.createElement("li");
li.appendChild(document.createTextNode("Third post"));
contents.appendChild(li);