// Field Input Started Here 
const incomeInput = document.getElementById('income-input');
const foodCostInput = document.getElementById('food-cost');
const rentCostInput = document.getElementById('rent-cost');
const clotheCostInput = document.getElementById('clothes-cost');
const savePercentage = document.getElementById('save-money');

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
    return Number (incomeAndBalance) - Number (expensesAndSaving);
}

// Parcentage Function 
function parcentage (incomeValue, savingValue){
 return Number (incomeValue) * (Number (savingValue) / 100);
}