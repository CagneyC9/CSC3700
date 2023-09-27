function onLoad() {
    //   Set the url that will be fetched
    let urlLOTR = "http://45.55.136.114/~dlash/CSC2200/LOTRVII.php"
    fetch(urlLOTR)
        .then(response => {
            // From Node if the status is 200 then it's correct)
            if (response.status === 200) {
                // return the json
                return response.json();
            } else {
                throw new Error('Gondor has not sent its json aid');
            }
        })
        .then(data => {
            // I get the value of the id of each character from my select box which is linked to their id
            // The id is 2 digits and 1 above the index, so I take the 2nd character(index1) and subtract 1 from the
            // value to get the correct character
            let CharacterMan = document.getElementById("Characters").value
            let chosenCharacter = data[CharacterMan[1]-1]
            let CharacterID = chosenCharacter.id
            let CharacterName = chosenCharacter.name
            let CharacterAge = chosenCharacter.age
            let CharacterRace = chosenCharacter.race
            let Weaknesses = `<ol>`
            for (let i = 0; i < chosenCharacter.weakness.length; i++) {
                if (data[CharacterMan[1]-1].weakness.length === 0) {
                    Weaknesses += `<li> ${"None"} </li>`
                } else {
                    Weaknesses += `<li> ${chosenCharacter.weakness[i]}</li>`
                }
            }
            Weaknesses += `</ol>`

            let MyStrength = `<ol>`
            for (let i = 0; i < chosenCharacter.strengths.length; i++) {
                if (chosenCharacter.strengths.length === 0) {
                    MyStrength += `<li> None </li>`
                } else {
                    MyStrength += `<li> ${chosenCharacter.strengths[i]}</li>`
                }
            }
            MyStrength += `</ol>`
                const images = chosenCharacter.img
                // I know that the image names are incorrect, but I am going by changing the json with the replace
                // method to the names of the images on moodle
                const newstring = images.replace("jpg", "png").replace("gimli", "gimili")
                    .replace("legolas", "legolis").replace("boramir", "boromir")

                console.log("I'm the character " +  chosenCharacter.weakness.length)

                let OStr = ""
                OStr += `<table style="border: solid 2px darkred">`
                OStr += `<tr>`
                OStr += `<td><b>ID</b></td>`
                OStr += `<td><b>Name</b></td>`
                OStr += `<td><b>Age</b></td>`
                OStr += `<td><b>Race</b></td>`
                OStr += `<td><b>Strengths</b></td>`
                OStr += `<td><b>Weakness</b></td>`
                OStr += `<td><b>Image</b></td>`
                OStr += `</tr>`
                OStr += `<tr>`
                OStr += `<td>${CharacterID}</td>`
                OStr += `<td>${CharacterName}</td>`
                OStr += `<td>${CharacterAge}</td>`
                OStr += `<td>${CharacterRace}</td>`
                OStr += `<td>${MyStrength}</td>`
                OStr += `<td>${Weaknesses}</td>`
                OStr += `<td><img src=${newstring} style="width: 90%; height: 90%"></td>`
                // OStr += `<td>${img}</td>`
                // OStr += `<td>${data[CharacterMan[1] - 1].img}</td>`
                // OStr += `<td id="my img"></td>`
                OStr += `</tr>`
                OStr += `</table>`
                let res = document.getElementById("resulting")
                res.innerHTML = OStr


            console.log(data);
            let x = data[1].name
            // alert(x)
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].id)
            }
            // alert(data.length)
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Error:', error);
        });

}

//Add the selection dropdown items

function SelectBox() {
    //   Set the url that will be fetched
    let urlLOTR = "http://45.55.136.114/~dlash/CSC2200/LOTRVII.php"
    fetch(urlLOTR)
        .then(response => {
            // From Node if the status is 200 then it's correct)
            if (response.status === 200) {
                // return the json
                return response.json();
            } else {
                throw new Error('Gondor has not sent its json aid');
            }
        })
        .then(data => {
            const addingitems = [
                {value: data[0].id, text: data[0].name},
                {value: data[1].id, text: data[1].name},
                {value: data[2].id, text: data[2].name},
                {value: data[3].id, text: data[3].name},
                {value: data[4].id, text: data[4].name},
                {value: data[5].id, text: data[5].name},
                {value: data[6].id, text: data[6].name},
            ];
            const dropdown = document.getElementById('Characters');
            addingitems.forEach(item => {
                const option = document.createElement('option');
                option.value = item.value;
                option.text = item.text;
                dropdown.appendChild(option);
            });
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Error:', error);
        });
}

function funnyButton() {
    let CharacterMan = document.getElementById("Characters").value
    console.log(CharacterMan)
    let res = document.getElementById("results")
    res.innerHTML = CharacterMan
}