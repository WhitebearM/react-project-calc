import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {

  const [expenses, setExpenses] = useState([
    { id: 1, charge: '렌트비', amount: 1500 },
    { id: 2, charge: '교통비', amount: 3500 }
  ])

  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState(0);

  const [id, setId] = useState('');

  const handleDelete = (id) => {
    console.log(id);

    const newExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(newExpenses)
  }

  const handleCharge = (e) => {
    console.log(e.target.value)
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    console.log(e.target.value)
    setAmount(Number(e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if(isEditing === true){
      const newExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount}: item;
        })

        setExpenses(newExpenses);
        setIsEditing(false);


      }else{
        const newExpense = {
          id: crypto.randomUUID(),
          charge,
          amount
        }
  
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
      }
      setCharge('');
      setAmount(0);
    } else {
      alert('올바른 값을 넣어주세요');
    }
  }

  const [isEditing,setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const expense = expenses.find(expense => expense.id === id)
    const {charge, amount} = expense;
    setCharge(charge);
    setAmount(amount);
    setId(id);
    setIsEditing(true);
  }

  const handleAllDelete = () => {
    setExpenses([]);
  }

  return (
    <main>
      <h1>
        예산 계산기
      </h1>

      <div>
        <ExpenseForm charge={charge} amount={amount} handleCharge={handleCharge} handleAmount={handleAmount} handleSubmit={handleSubmit} isEditing={isEditing} />
      </div>
      <div>
        <ExpenseList handleDelete={handleDelete} initialExpense={expenses} handleEdit={handleEdit} handleAllDelete={handleAllDelete}/>
      </div>


      <div>
        <p>총 지출:
          <span>
            {expenses.reduce((acc, curr) => {
              return acc += curr.amount
            }, 0)
            }
            원</span>
        </p>
      </div>
    </main>
  );
}

export default App;
