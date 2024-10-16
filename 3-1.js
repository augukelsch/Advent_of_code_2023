/* 
'........................617.........123...........341.........................293..................38..19.753..................533..........',
'565.......................-..............951.....+..........354.....697.58....*.....941............*.....*.........+....529....&.....36.....', 
*/

const fs = require("fs");
const { hasUncaughtExceptionCaptureCallback } = require("process");

const input = fs.readFileSync("./3-input.txt").toString().split("\r\n")

let symbols = ["*", "/", "@", "#", "$", "%", "&", "-", "+", "="]

let response = [];

let output = [];

for (let i = 0; i < 1; i++) {//input.length

    for (let j = 0; j < input[i].length; j++) {
        let value = 0
        let status = true;

        if (input[i][j] > 0) { //**Pega os Valores**
            status = false;
            value = input[i][j];
            console.log(value)
            if (input[i][j + 1] > 0) {
                value = value + input[i][j + 1]
                j = j + 1
                if (input[i][j + 1] > 0) {
                    value = value + input[i][j + 1]
                    j = j + 1
                }
            }
            try{
            for (let m = 0; m < symbols.length; m++) {
                    if (input[i-1][j-1] == symbols[m] || input[i-1][j] == symbols[m]|| input[i-1][j+1] == symbols[m]) {
                        return status = true;
                    }
                    if (input[i][j-1] == symbols[m] || input[i][j] == symbols[m]|| input[i][j+1] == symbols[m]) {
                        return status = true;
                    }
                    if (input[i+1][j-1] == symbols[m] || input[i+1][j] == symbols[m]|| input[i+1][j+1] == symbols[m]) {
                        return status = true;
                    }

/*                 if (i != 0) {
                    if (input[i - 1].indexOf(symbols[m]) >= Number(input[i].indexOf(value) - 1 ) && input[i - 1].indexOf(symbols[m]) <= Number(input[i].indexOf(value) + value.length + 1)) {
                        status = true;
                    }
                    if (input[i].indexOf(symbols[m]) >= Number(input[i].indexOf(value) - 1 ) && input[i].indexOf(symbols[m]) <= Number(input[i].indexOf(value) + value.length + 1)) {
                        status = true;
                    }
                    if (input[i + 1].indexOf(symbols[m]) >= Number(input[i].indexOf(value) - 1 ) && input[i + 1].indexOf(symbols[m]) <= Number(input[i].indexOf(value) + value.length + 1)) {
                        status = true;
                    }
                }
                if (i == 0) {
                    console.log("Symbol Position: "+input[i+1].indexOf(symbols[m]))
                    console.log("Input Start pos: "+Number(input[i].indexOf(value) - 1)) 
                    console.log("Input End pos: "+Number(input[i].indexOf(value) + value.length + 1))
                    if (input[i].indexOf(symbols[m]) >= Number(input[i].indexOf(value) - 1 ) && input[i].indexOf(symbols[m]) <= Number(input[i].indexOf(value) + value.length + 1)) {
                        status = true;
                    }
                    if (input[i + 1].indexOf(symbols[m]) >= Number(input[i].indexOf(value) - 1 ) && input[i + 1].indexOf(symbols[m]) <= Number(input[i].indexOf(value) + value.length + 1)) {
                        status = true;
                    }
                }
                console.log(status) */
            }
        }catch{
            console.error();
        }
            if (status == true) {
                console.log(status)
                output.push(value)
            }

        }

    }
    console.log(output)


}