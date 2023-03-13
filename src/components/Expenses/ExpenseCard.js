import './ExpenseCard.css'

export default function ExpenseCard(props) {

    return (
        <div className="expense-card">
            { props.children }
        </div>
    )
}