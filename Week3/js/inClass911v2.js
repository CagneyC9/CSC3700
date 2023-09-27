let name2 = "Jake";

function doStuff(name = "Fred", age = 22, mobile = 312) {
    name = name.replace("J", "BAAAAAAAAAAAAAAA")
    name = name.toUpperCase()
    let oStr = "";
    for (let i = 0; i < name.length; i++) {
        oStr += name[i];
    }
    let i = 1;
    while (i < name.length) {

    }
    return (
        `name : ${oStr}` +
        `Age: ${age}` +
        "Mobile : " + mobile
    )
}

function doMoreStuff() {
    let scores = [44, 55, 99, 87, 101, 100.2];
    scores[10] = 120
    scores.push(9999)
    scores.unshift(523)
    scores.unshift("Blah")
    for (let i = 0; i < scores.length; i++) {
        console.log(`i=${scores[i]}`);
    }
}

function doMoreStuffPart2() {
    let data = {};
    data.name = "Jake"
    data.age = 22
    data.grade = "Freshman"
    // data.scores = [2, 55.4, 88, 101]
    return data;
}

function doStart() {
    let res = doMoreStuffPart2("Janet")
    let sum = 0;
    if (res.scores != undefined)
    for(let i=0; i < res.scores.length; i++){
       sum = sum += res.scores[i]
    }
    console.log(`resName ${res.name}`);
    console.log(`resSum ${sum}`);
}