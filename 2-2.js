'Game 1: 2 green, 6 blue, 7 red; 12 green, 6 blue, 3 red; 5 red, 18 green, 4 blue'

//LIMIT= 12 red, 13 green, 14 blue

const fs = require("fs");

const input = fs.readFileSync("./2-input.txt").toString().split("\r\n")

let response = [];

console.log(input.length)

for (let i = 0; i < input.length; i++) {  //
    console.log("Game " + (i + 1) + " " + input[i])

    let eachGame = input[i].split(";");

    let valRed = 0;
    let valGreen = 0;
    let valBlue = 0;
    console.log(eachGame.length)
    console.log(eachGame)
    for (let j = 0; j < eachGame.length; j++) {

        let indexRed = eachGame[j].indexOf(" red") - 1;
        if (valRed < eachGame[j][indexRed - 1] + eachGame[j][indexRed]) {
            valRed = Number(eachGame[j][indexRed - 1] + eachGame[j][indexRed]);

        }

        let indexGreen = eachGame[j].indexOf(" green") - 1;
        if (valGreen < eachGame[j][indexGreen - 1] + eachGame[j][indexGreen]) {
            valGreen = Number(eachGame[j][indexGreen - 1] + eachGame[j][indexGreen]);
        }


        let indexBlue = eachGame[j].indexOf(" blue") - 1;
        if (valBlue < eachGame[j][indexBlue - 1] + eachGame[j][indexBlue]) {
            valBlue = Number(eachGame[j][indexBlue - 1] + eachGame[j][indexBlue]);
        }


    }
    console.log(valRed,valGreen,valBlue)
    response.push((valRed*valGreen*valBlue))



}
console.log(response)

const sum = response.reduce((total, a) => total += a, 0)
console.log(sum)

