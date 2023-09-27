let items = [
    {
        id: 1,
        cost: 10.00,
        title: "American Prometheus",
        author: "Bird",
        description: "A good read",
        authors: ["Bird", 'Author2']
    },
    {
        id: 2,
        cost: 15.00,
        title: "Educated",
        author: "Westover",
        description: "All about growing up in Utah"
    },
    {
        id: 3,
        cost: 20.00,
        title: "LOTR",
        author: "Tolkien",
        description: "The complete tilogy"
    }
]
let total = 0;

function getItemFromList(id) {
    for (let i = 0; i < items.length; i++) {

        let r = items[i];
        // console.log(typeof r.id);
        // console.log(typeof id);
        if (r.id === id) {
            return r
        }
    }
}

function addItem(id) {
    // id = id * 5;
    let theItem = getItemFromList(id);
    // console.log(item)
    // alert(`id=${id}`);
    // alert(`id2=${id}`);
    // let theItem = items[id];
    // console.log("item=");
    // console.log(theItem);
    total += theItem.cost;
    let results = document.getElementById("res");
    results.innerHTML = `$${total}`;
    results.style["background-color"] = "yellow";
    results.style["font-size"] = "20px";

}

function loadData() {
    let tObj = document.getElementById("mainTable");
    alert("Loading");
    let oStr = "";
    let row = "";
    for (let i = 0; i < items.length; i++) {
        // console.log( `item:`);
        // console.log( items[i] );
        let r = items[i];
        row += `<tr> <td> ${r.title} </td>`;
        row += `<td>${r.author} </td> `;
        row += `<td>${r.description} </td> `;
        row += `<td>${r.cost} </td> `;
        row += `<td><button onClick=addItem(${r.id})> Add ${r.id} </button> </td> `;
        row += "</tr>"
    }
    tObj.innerHTML = row;
}