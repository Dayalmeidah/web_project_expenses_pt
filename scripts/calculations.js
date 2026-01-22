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

// Função para calcular a despesas médias
function calculateAverageExpense() {
    if (expenseEntries.length === 0) {
        return 0;
    }
    let total = calculateTotalExpensesValue();
    return total / expenseEntries.length;
}

// Função para calcular o saldo
function calculateBalance() {
    return budgetValue - calculateTotalExpensesValue();
}

// Função para atualizar a cor do saldo com base no valor de saldo
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
 // Função para calcular despesas por categoria
function calculateCategoryExpenses(categoryName) {
    let categoryTotal = 0;
    for (let i = 0; i < expenseEntries.length; i++) {
        if (expenseEntries[i][0] === categoryName) {
            categoryTotal += expenseEntries[i][1];
        }
    }
    return categoryTotal;
}

// Função para encontrar a categoria com maior despesa
function calculateLargestCategory() {
    const categories = {};
    for (let i = 0; i < expenseEntries.length; i++) {
        const category = expenseEntries[i][0];
        const amount = expenseEntries[i][1];
        if (!categories[category]) {
            categories[category] = 0;
        }
        categories[category] += amount;
    }   
    let largestCategory = null;
    let largestAmount = 0;
    for (const category in categories) {
        if (categories[category] > largestAmount) {
            largestAmount = categories[category];
            largestCategory = category;
        }
    }
    return largestCategory;
}
 
// Funções para atualizar os valores principais
function addExpenseEntry(category, amount) {
    expenseEntries.push([category, amount]);
    totalExpensesValue = calculateTotalExpensesValue();
    updateBalanceColor();
}
function setBudgetValue(amount) {
    budgetValue = amount;
    updateBalanceColor();
}



