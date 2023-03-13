import ExpenseCard from './ExpenseCard'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

export default function ExpenseItem (props) {

    return (
        <ExpenseCard>
            <ExpenseDate 
                date={props.date} 
                />
            <div className='expense-item-data'>
                <h2 className='expense-item-title'>
                    {props.title}
                </h2>
                <div className='expense-item-value'>
                    ${props.amount}
                </div>
            </div>
        </ExpenseCard>
    )
}