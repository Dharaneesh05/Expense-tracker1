import React from 'react'

function ExpenseItem(props) {
    const { name, amount, _id } = props.expense
    const type = amount > 0 ? "income" : "expense";
    const handleDelete = () => {
        props.deleteExpense(_id)
    }
    return (
        <div className={`expense-item ${type}`}>
            <div className='expense-title'>{name}</div>
            <div className='expense-amount'>₹{amount}</div>
            <div className='delete-button-overlay'>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default ExpenseItem
