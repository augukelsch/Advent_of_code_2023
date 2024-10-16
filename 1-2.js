const fs = require("fs");

const input = fs.readFileSync("./1-input.txt")

const inputStr = input.toString().split("\r\n");


let numsStr = ["@!zero!@","one","two","three","four","five","six","seven","eight","nine"]
let nums = ["@!zero!@","o1e","t2o","t3e","f4r","f5e","s6x","s7n","e8t","n9e"]

let result = [];


for (let i = 0; i < inputStr.length; i++) {
    let first = undefined;
    let last = undefined;
    for (let j = 0; j < 10; j++) {
        if(inputStr[i].indexOf(numsStr[j]) !== -1){
            inputStr[i] = inputStr[i].replaceAll(numsStr[j],nums[j]);
        }
    }
    for (let j = 0; j < inputStr[i].length; j++) {
        if (inputStr[i][j] - inputStr[i][j] == 0 && first == undefined) {
            first = inputStr[i][j];
        }
    }
    for (let j = inputStr[i].length-1; j >= 0; j--) {
        if (inputStr[i][j] - inputStr[i][j] == 0 && last == undefined) {
            last = inputStr[i][j];
            first = first+last;
        }
    }
    if(!first){
        first=0;
        continue
    }
    result.push(first)
}

const response = result.reduce((total,a)=>total+=Number(a),0)
console.log(response)