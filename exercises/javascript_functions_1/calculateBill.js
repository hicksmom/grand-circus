

let bill = 100;
const taxRate = 0.06;

function calculateBill(bill, taxRate) {
    const total = bill * (1+taxRate);
    console.log(total);
    return total;
}

const myTotal = calculateBill();

console.log(`Your total is $(myTotal)`);