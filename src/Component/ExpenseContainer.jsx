// import React, { useState, useEffect } from 'react'
// import Expenseform from './Expenseform.jsx'
// import History from './History.jsx'
// import BalanceContainer from './Balancecontainer.jsx'

// function ExpenseContainer() {
//     const [expense, setExpense] = useState([])

//     const fetchExpense = async () => {
//         try {
//             const response = await fetch('http://localhost:5000/Expense')
//             const data = await response.json()
//             setExpense(data)
//         } catch (error) {
//             console.log('Failed to fetch data', error)
//         }
//     }

//     useEffect(() => {
//         fetchExpense()
//     }, [])

//     const addExpense = async (title, amount) => {
//         try {
//             const response = await fetch('http://localhost:5000/Expense', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ title, amount })
//             })

//             if (response.ok) {
//                 const newItem = await response.json()
//                 setExpense(prev => [...prev, newItem])
//             } else {
//                 console.error('Failed to add expense')
//             }
//         } catch (error) {
//             console.error('Failed to fetch', error)
//         }
//     }

//     const deleteExpense = async (u_id) => {
//         try {
//             const response = await fetch(`http://localhost:5000/Expense/${u_id}`, {
//                 method: 'DELETE'
//             })

//             if (response.ok) {
//                 const newExpense = expense.filter(exp => exp._id !== u_id)
//                 setExpense(newExpense)
//             } else {
//                 console.error('Failed to delete from backend')
//             }
//         } catch (error) {
//             console.error('Error deleting expense:', error)
//         }
//     }

//     return (
//         <div className='expense-container'>
//             <h1>Expense Tracker</h1>
//             <BalanceContainer expense={expense} />
//             <History expense={expense} deleteExpense={deleteExpense} />
//             <Expenseform addexpense={addExpense} />
//         </div>
//     )
// }

// export default ExpenseContainer


import React, { useEffect, useState } from 'react'
import Expenseform from './ExpenseForm.jsx'
import History from './History.jsx'
import BalanceContainer from './BalanceContainer.jsx'

function ExpenseContainer() {
    const [expense, setExpense] = useState([]);

    async function fetchExpense() {
        try {
            // const response = await fetch('http://localhost:5000/api/items');
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
            const response = await fetch('http://localhost:5000/api/items', {
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
            const response = await fetch(`http://localhost:5000/api/items/${id}`, {
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

export default ExpenseContainer
