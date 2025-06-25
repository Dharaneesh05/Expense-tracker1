// import React from 'react'
// import ExpenseItem from './ExpenseItem'

// function History(props) {
//   if (!props.expense || !Array.isArray(props.expense)) {
//     return <div className='history'>No expenses found</div>;
//   }
//   return (
//     <div className='history'>{
//       props.expense.map((expense)=>(
//     <ExpenseItem 
//     key={expense._id} expense={expense} deleteExpense={props.deleteExpense} />
//      ))}
//      </div>
//   )
// }

// export default History

import React from 'react';
import ExpenseItem from './ExpenseItem'; 
function History({ expense, deleteExpense }) {
  return (
    <>
      <h3>History</h3>
      <div className='history'>
        {expense.map((item) => (
          <ExpenseItem
            key={item._id}
            expense={item}
            deleteExpense={deleteExpense}
          />
        ))}
      </div>
    </>
  );
}

export default History;