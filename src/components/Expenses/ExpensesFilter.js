import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

    function changeSelectedYear(event) {
        props.onChangeSelectedYear(event.target.value)
    }

    return (
        <div className='expenses-filter'>
        <div className='expenses-filter-controls'>
            <label>Filter by year</label>
            <select onChange={changeSelectedYear} defaultValue={props.selected}>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
            </select>
        </div>
        </div>
    );
};

export default ExpensesFilter;