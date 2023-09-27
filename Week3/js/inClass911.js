let name2 = "Jake";
// console.log(x);

function doStuff(name, age, mobile) {
    // let name = "Dave";
    // name = 'Fred';
    // name = 3.141;
    // name = 3;
    // alert(`name:${name}`);
    // console.log(`name:${name}`);
    // const x = 12;
    // let userAge = "12apples";
    // userAge = userAge + 100.2;
    // if (userAge == undefined){
    //     alert("Got no Age")
    // } else  if (userAge == null){
    //     alert("Got null age")
    // }else  if (userAge == ""){
    //     alert("Got empty string")
    // }else  if (isNaN(userAge)){
    //     alert("Got Not a Number")
    // } else alert(userAge)
    return (
        `name : ${name}` +
        `Age: ${userAge}` +
        "Mobile : Do not know"
    )
}

function doStart() {
    let res = doStuff()
console.log( `res ${res}`);
}