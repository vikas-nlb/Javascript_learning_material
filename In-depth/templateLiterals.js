let div = document.getElementById("div");
var list = [];

var a = ['Vikas', 'Skanda', 'Nagaraj', 'Shanthala'];
// `` is called template literals

div.innerHTML = `<ol>
                        ${getList(a)}
                    </ol>
                    `;
function getList(arr) {

    for (let listItem of arr) {
        list += `<li>${listItem}</li>`;
    }
    return list;
}
