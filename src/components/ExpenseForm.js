import React from 'react'

function ExpenseForm({ charge, amount, handleCharge, handleAmount, handleSubmit, isEditing }) {


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='expense'>지출 항목</label>
                <input type='text' id='charge' name='charge' placeholder='예) 렌트비' value={charge} onChange={handleCharge} />
            </div>
            <div>
                <label htmlFor='expense'>비용</label>
                <input type='number' id='amount' name='amount' placeholder='예) 100' value={amount} onChange={handleAmount} />
            </div>
            <button type='submit'>{isEditing ? "수정" : "제출"}</button>
        </form>
    )
}

export default ExpenseForm
