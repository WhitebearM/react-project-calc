import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseList({ initialExpense, handleDelete, handleEdit, handleAllDelete }) {
    return (
        <>
            <ul>
                {
                    initialExpense.map(expense => {
                        return (
                            <ExpenseItem handleDelete={handleDelete} expense={expense} handleEdit={handleEdit} key={expense.id} />
                        )
                    })
                }

            </ul>
            <button onClick={() => handleAllDelete()}>
                목록 지우기
            </button>
        </>
    )
}

export default ExpenseList
