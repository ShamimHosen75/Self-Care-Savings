// Field Input Started Here 
const incomeInput = document.getElementById('income-input');
const foodExpenses = document.getElementById('food-cost');
const rentExpenses = document.getElementById('rent-cost');
const clothesExpenses = document.getElementById('clothes-cost');
const savePercentage = document.getElementById('save-percentage');


// Field OutPut Started Here 
const totalExpenses = document.getElementById('total-expenses');
const totalBalance = document.getElementById('balance-exist');
const savingAmount = document.getElementById('save-money');
const remainAmount = document.getElementById('remaining-balance');

// Addition Function 
function addition (food, rent, clothes){
    return Number(food) + Number(rent) + Number(clothes);
}

// Subtraction Function 
function subtraction (incomeAndBalance, expensesAndSaving){
    return Number(incomeAndBalance) - Number(expensesAndSaving);
}

// Percentage Function 
function percentage(incomeValue, savingValue) {
 return Number(incomeValue) * (Number(savingValue) / 100);
}


// Income and Expenses Calculator 
function Calculator() {
    const showError = document.getElementById('percentage-error');
    showError.classList.remove("error-show");
    
    let expenses = addition(foodExpenses.value, rentExpenses.value, clothesExpenses.value);
    if (expenses < incomeInput.value) {
        const showError = document.getElementById('expenses-error');
        showError.classList.remove("error-show");
        totalExpenses.innerText = expenses;
        totalBalance.innerText = subtraction(incomeInput.value, expenses);
    } else {
        const showError = document.getElementById('expenses-error');
        showError.classList.add("error-show");
    }
    
};


// Income and Expenses aslo Saving Money Calculator
function Savingcalc() {
    
    const showError = document.getElementById('expenses-error');
    showError.classList.remove("error-show");

    // Income and Expenses Calculator 
    let expenses = addition(foodExpenses.value, rentExpenses.value, clothesExpenses.value);
    totalExpenses.innerText = expenses;
    let balance = subtraction(incomeInput.value, expenses);
    totalBalance.innerText = balance;

    // Saving Balance 
    let saving = percentage(incomeInput.value, savePercentage.value);
    if (saving < balance) {
        const showError = document.getElementById('percentage-error');
        showError.classList.remove("error-show");
        savingAmount.innerText = saving;
        remainAmount.innerText = subtraction(balance, saving);
    } else {
        const showError = document.getElementById('percentage-error');
        showError.classList.add("error-show");
    }
    
}

// End of JavaScript Code 