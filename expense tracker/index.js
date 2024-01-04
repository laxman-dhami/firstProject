document.addEventListener('DOMContentLoaded', loadExpenses);

function addExpense() {
    var amount = document.getElementById('expenseAmount').value;
    var description = document.getElementById('expenseDescription').value;
    var category = document.getElementById('expenseCategory').value;

    if (amount && description && category) {
        var expense = {
            amount: amount,
            description: description,
            category: category
        };

        var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        expenses.push(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));

        document.getElementById('expenseAmount').value = '';
        document.getElementById('expenseDescription').value = '';
        document.getElementById('expenseCategory').value = '';

        updateExpenseList(expenses);
    } else {
        alert('Please fill in all fields');
    }
}

function loadExpenses() {
    var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    updateExpenseList(expenses);
}

function updateExpenseList(expenses) {
    var expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    for (var i = 0; i < expenses.length; i++) {
        var expense = expenses[i];
        var li = document.createElement('li');
        li.innerHTML = `${expense.description} - ${expense.amount} - ${expense.category} <button onclick="editExpense(${i})">Edit</button> <button onclick="deleteExpense(${i})">Delete</button>`;
        expenseList.appendChild(li);
    }
}

function deleteExpense(index) {
    var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    updateExpenseList(expenses);
}

function editExpense(index) {
    var expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    var expense = expenses[index];

    var newAmount = prompt('Enter new amount', expense.amount);
    var newDescription = prompt('Enter new description', expense.description);
    var newCategory = prompt('Enter new category', expense.category);

    if (newAmount !== null && newDescription !== null && newCategory !== null) {
        expense.amount = newAmount;
        expense.description = newDescription;
        expense.category = newCategory;

        localStorage.setItem('expenses', JSON.stringify(expenses));
        updateExpenseList(expenses);
    }
}
