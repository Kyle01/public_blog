const contents = document.getElementById('contents')
fetch('./contents.json').then(response => response.json()).then(json => {
    json.contents.sort((a, b) => new Date(a.text.split(' - ')[0]) < new Date(b.text.split(' - ')[0])).forEach(element => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", `./posts/${element.path}`);
        a.appendChild(document.createTextNode(element.text));
        li.appendChild(a);
        contents.appendChild(li);
    });
});