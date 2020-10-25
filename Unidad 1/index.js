
//Slides #5 - Spread OperatorURL
function suma(...numerosArray)
{
let totalFun=0;
for ( numero of numerosArray)
    totalFun += numero;

    return totalFun;
}

let otroArray = [3,4,5,6,7,8];
var total = suma(...otroArray);
console.log(total);