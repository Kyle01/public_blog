const contents = document.getElementById('contents')
fetch('./contents.json').then(response => response.json()).then(json => {
    console.log(json);
    json.contents.forEach(element => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", `./posts/${element.path}`);
        a.appendChild(document.createTextNode(element.text));
        li.appendChild(a);
        contents.appendChild(li);
    });
});