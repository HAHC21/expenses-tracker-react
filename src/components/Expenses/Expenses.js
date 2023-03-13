import { useState } from 'react';

import './Expenses.css'
import ExpensesChart from './ExpensesChart';

import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList';

export default function Expenses(props) {

    const [year, setYear] = useState(2023)

    function updateSelectedYear(year) {
        setYear(year)
    }

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === year
        }
    )

    return (
        <>
        <div className='expenses-container'>
            <div className='expenses-filter-container'>
            < ExpensesFilter selected={year} onChangeSelectedYear={updateSelectedYear} />
            < ExpensesChart expenses={filteredExpenses} />
            </div>
            < ExpensesList expenses={filteredExpenses} />
        </div>
        </>
    )
}


