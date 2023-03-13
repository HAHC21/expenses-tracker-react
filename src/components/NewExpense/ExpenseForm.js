import { useState } from "react";

import './NewExpenseForm.css'

const NewExpenseForm = (props) => {

    // Reveal Form Management
    const [formVisib, setFormVisib] = useState(false)

    function changeFormVisibility() {
        if (!formVisib) {
            setFormVisib(true)
        }
        else {
            setFormVisib(false)
        }
    }

    // Form Data Management
    const [formData, setFormData] = useState({
        title : '',
        amount: '',
        date: '',
        id: Math.random().toString(36)
    })

    function updateTitle(event) {
        setFormData((latestFormData) => {
            return {
                ...latestFormData,
                title: event.target.value,
            }
        })
    }

    function updateAmount(event) {
        setFormData((latestFormData) => {
            return {
                ...latestFormData,
                amount: event.target.value,
            }
        })
    }

    function updateDate(event) {
        setFormData((latestFormData) => {
            return {
                ...latestFormData,
                date: event.target.value,
            }
        })
    }

    function submitForm(event) {
        event.preventDefault()

        formData.date = new Date(formData.date)

        props.onSubmitExpenseForm(formData)

        setFormData({
            title : '',
            amount: '',
            date: ''
        })

        changeFormVisibility()
    }

    if (!formVisib) {
        return (
            <>
            <div className="new-expense-form">
                <button 
                    className="new-expense-form-button-add-expense"
                    id="new-expense-form-button-add-expense"
                    type="button"
                    onClick={changeFormVisibility}
                    >
                    Add New Expense
                </button>
            </div>
            </>
        )
    }
    else {
        return (
            <>
            <div className="new-expense-form">
                <form
                    onSubmit={submitForm}
                    >
                    <div className="new-expense-form-input-container">
                        <label>Title</label>
                        <input
                            className="new-expense-form-input-item"
                            type="text" 
                            name="new-expense-form-input-title" 
                            id="new-expense-form-input-title"
                            onChange={updateTitle}
                            value={formData.title}
                            />
                    </div>
                    <div className="new-expense-form-input-container">
                        <label>Amount</label>
                        <input 
                            className="new-expense-form-input-item"
                            type="number" 
                            name="new-expense-form-input-amount" 
                            id="new-expense-form-input-amount" 
                            min="0.01" 
                            step="0.01"
                            onChange={updateAmount}
                            value={formData.amount}
                            />
                    </div>
                    <div className="new-expense-form-input-container">
                        <label>Date</label>
                        <input 
                            className="new-expense-form-input-item"
                            type="date" 
                            name="new-expense-form-input-date" 
                            id="new-expense-form-input-date" 
                            min="2020-01-01"
                            max="2023-12-31"
                            onChange={updateDate}
                            value={formData.date}
                            />
                    </div>
                    <div className="new-expense-form-button-container">
                        <button 
                            className="new-expense-form-button-cancel"
                            id="new-expense-form-button-cancel"
                            type="button"
                            onClick={changeFormVisibility}
                            >
                            Cancel
                        </button>
                        <button 
                            className="new-expense-form-button-save-expense"
                            id="new-expense-form-button-save-expense"
                            type="submit"
                            >
                            Add Expense
                        </button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}

export default NewExpenseForm;