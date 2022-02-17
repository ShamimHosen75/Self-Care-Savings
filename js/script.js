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

// Income and Expenses Calculator 
function Calculator () {
    totalExpenses.innerText = addition(foodExpenses.value, rentExpenses.value, clothesExpenses.value);
    totalBalance.innerText = subtraction(incomeIncome.value, totalExpenses.value);

// Income and Expenses After the Calculation 
incomeInput.value =" ";
foodExpenses.value =" ";
rentExpenses.value =" ";
clothesExpenses.value =" ";
};

// Income and Expenses aslo Saving Money Calculator
function  Savingcalculator (){
    // Income and Expenses Calculator 
    totalExpenses.innerText = addition(foodExpenses.value, rentExpenses.value, clothesExpenses);
    totalBalance.innerText = subtraction (incomeIncome.value, totalExpenses.innerText);
    // Saving Balance 
    savingAmount.innerText = parcentage(incomeIncome.value, savePercentage.value);
    remainAmount.innerText = subtraction(totalBalance.innerText, savingAmount.innerText);
    // Income And Expenses After Calculation 
    incomeIncome.value =" ";
    foodExpenses.value =" ";
    rentExpenses.value =" ";
    clothesExpenses.value =" ";
    // Saving After Calculation 
    incomeIncome.value =" ";
    savePercentage.value =" ";
}