var amountConsumedLife;
const maxAge = 100;

calculateSupply();
calculateSupply();
calculateSupply();

function calculateSupply(){
    let age = parseInt(prompt("Enter age:"));
    let amount = parseFloat(prompt("Enter amount per day: "));
    amountConsumedLife = (maxAge-age) * 365 * amount;
    // Math.round(amountConsumedLife) te redondea a numero entero y amountConsumedLife-tofixed(2) te redondearía a dos decimales.
    document.write("You will need " + Math.round(amountConsumedLife) + " to last you until the ripe old age of " + maxAge + "<br/>");
}
