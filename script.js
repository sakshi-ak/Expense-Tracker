document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const expenseName = document.getElementById('expenseName').value;
        const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

        if (expenseName && !isNaN(expenseAmount)) {
            addExpense(expenseName, expenseAmount);
            expenseForm.reset();
        }
    });

    function addExpense(name, amount) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${name}</span>
            <span>$${amount.toFixed(2)}</span>
        `;
        expenseList.appendChild(li);
    }
});
