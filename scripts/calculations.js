// Variariaveis principais
let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";  

// Array para armazenar as entradas de despesas
let expenseEntries = [
["groceries", 33],
["restaurants", 50],
["transport", 12],
["home", 70],
["subscriptions", 14],
["groceries", 28],
["subscriptions", 12]
];

// Função para calcular o total das despesas
function calculateTotalExpensesValue() {
    let total = 0;
    for (let i = 0; i < expenseEntries.length; i++) {
        total += expenseEntries[i][1]; 
    }
    return total;
}

function calculateAverageExpense() {
    if (expenseEntries.length === 0) {
        return 0;
    }
    let total = calculateTotalExpensesValue();
    return total / expenseEntries.length;
}

function calculateBalance() {
    return budgetValue - calculateTotalExpensesValue();
}

function updateBalanceColor() {
    totalExpensesValue = calculateTotalExpensesValue();
if (budgetValue - totalExpensesValue < 0) {
  balanceColor = "red";
    console.log("Negative");
} else if (budgetValue - totalExpensesValue < budgetValue * 0.25) {
  balanceColor = "orange";
  console.log("less than 25% of the budget");
}   else {
  balanceColor = "green";
  console.log("Positive");
}
}
