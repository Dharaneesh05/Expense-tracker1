import React, { useEffect, useState } from 'react';
import Expenseform from './ExpenseForm.jsx';
import History from './History.jsx';
import BalanceContainer from './BalanceContainer.jsx';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

function ExpenseContainer() {
  const [expense, setExpense] = useState([]);

  async function fetchExpense() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/items`);
      if (!response.ok) {
        throw new Error('network error');
      }
      const data = await response.json();
      setExpense(data);
    } catch (error) {
      console.log('error fetching expenses', error);
    }
  }

  useEffect(() => {
    fetchExpense();
  }, []);

  async function postExpense(expense) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expense),
      });
      if (!response.ok) {
        throw new Error('network response was not ok');
      }
      fetchExpense();
    } catch (error) {
      console.log('error posting expense', error);
    }
  }

  async function deleteExpensedb(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/items/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('network response was not ok');
      }
      fetchExpense();
    } catch (error) {
      console.log('error deleting expense', error);
    }
  }

  const addexpense = (name, amount) => {
    postExpense({ name, amount: Number(amount) });
  };

  const deleteExpense = (id) => {
    deleteExpensedb(id);
  };

  return (
    <div className="expense-container">
      <h1>Expense Tracker</h1>
      <BalanceContainer expense={expense} />
      <History expense={expense} deleteExpense={deleteExpense} />
      <Expenseform addexpense={addexpense} />
    </div>
  );
}

export default ExpenseContainer;
