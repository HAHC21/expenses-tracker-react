import './ExpensesList.css'

import ExpenseItem from '../Expenses/ExpenseItem'

export default function ExpensesList(props) {

    const filteredExpenses = props.expenses

    if (filteredExpenses.length === 0) {
        return (
            <div className='expenses-list-empty-response'>
                    No registered expenses for the selected year.
            </div>
        )
    }
    else {
        return (
            <div className='expenses-list-container'>
            {
                filteredExpenses.map(expense => (
                    < ExpenseItem 
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}
                    />
                ))
            }
        </div>
        )
    }
}