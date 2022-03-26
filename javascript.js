const contents = document.getElementById('contents')
const li = document.createElement("li");
li.appendChild(document.createTextNode("Third post"));
contents.appendChild(li);

fetch('./contents.json').then(response => response.json()).then(json => {
    console.log(json);
    json.forEach(element => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(element));
        contents.appendChild(li);
    });
});