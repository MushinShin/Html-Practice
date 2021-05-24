// Logical Operator -----------------------------------

// AND (&&)
// TRUE and TRUE
let hightIncome = true;
let goodCreditScore = true;
let eligibleForLoan = hightIncome && goodCreditScore;

console.log(eligibleForLoan);

// OR (||)
// TRUE if 1 of operands is TRUE
let hightIncome2 = false;
let goodCreditScore2 = false;
let eligibleForLoan2 = hightIncome2 || goodCreditScore2;

console.log(eligibleForLoan2);


// NOT (!)
let applicationRefuse = !eligibleForLoan2;
console.log(applicationRefuse);