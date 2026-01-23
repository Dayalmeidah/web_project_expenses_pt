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

// Função para calcular o valor total das despesas
for (const expense of expenseEntries) {
    totalExpensesValue += expense[1];
}
// Função para calcular a despesas médias
function calculateAverageExpense() {
    if (expenseEntries.length === 0) {
        return 0;
    }
    const total = totalExpensesValue / expenseEntries.length;
    return total;
}

// Função para calcular o saldo
function calculateBalance() {
    const balanceValue = budgetValue - totalExpensesValue;
    return balanceValue
}

// Função para atualizar a cor do saldo com base no valor de saldo
function updateBalanceColor() {
    const balanceValue = calculateBalance();
    if (balanceValue < 0) {
        balanceColor = "red";
    } else if (balanceValue < budgetValue / 4) {
        balanceColor = "orange";
    } else {
        balanceColor = "green";
    }
}
// Função para calcular despesas por categoria
function calculateCategoryExpenses(categoryName) {
    let categoryTotal = 0;
    for (const expense of expenseEntries) {
        if (expense[0] === categoryName) {
            categoryTotal += expense[1];
        }
    }
    return categoryTotal;
}

// Função para encontrar a categoria com maior despesa
function calculateLargestCategory() {
    const uniqueCategories = [
        "groceries",
        "restaurants",
        "transport",
        "home",
        "subscriptions"
    ];
    const categoryTotals = [];
    for (const category of uniqueCategories) {
        const total = calculateCategoryExpenses(category);
        categoryTotals.push([category, total]);
    }
    let largestCategory = categoryTotals[0][0];
    let largestTotal = categoryTotals[0][1];
    for (const item of categoryTotals) {
        const category = item[0];
        const total = item[1];
        if (total > largestTotal) {
            largestTotal = total;
            largestCategory = category;
        }
    }
    return largestCategory;
}


// Funções para atualizar os valores principais
function addExpenseEntry(values) {
    totalExpensesValue += values[1];
    expenseEntries.push(values);
}



