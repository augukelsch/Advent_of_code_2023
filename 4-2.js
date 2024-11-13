const fs = require("fs");

const out = fs.readFileSync("4-input.txt").toString().split("\r\n")

var output = [];


for(let i = 0 ; i < out.length; i++){
    const winners = out[i].slice(10,39).replaceAll("  "," ").split(" ");
    const list = out[i].slice(42,117).replaceAll("  "," ").split(" ");

    var cardWinners = 0;
    for (let j = 0; j < winners.length; j++) {
        if(winners[j] == ''){
            winners[j] == 'ZZ'
        }else if(list.indexOf(winners[j]) > -1){
            cardWinners++;
        }
    }

    var points = Math.pow(2,cardWinners-1);

    if(cardWinners == 0){
        points = 0;
    }
    if(cardWinners == 1){
        points = 1;
    }
    output.push(points);
}
const result = output.reduce((total,a) => total+=a,0)
console.log(result)