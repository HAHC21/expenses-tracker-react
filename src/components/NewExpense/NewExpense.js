import NewExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {

    function SaveExpenseFromData(formData) {
        props.onSaveExpense(formData)
    }

    return (
        <>
        <div className="new-expense-container">
            < NewExpenseForm onSubmitExpenseForm={SaveExpenseFromData} />
        </div>
        </>
    )
}

export default NewExpense;