import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,expenses, Currency } = useContext(AppContext); 
    const [setBudget] = useState("");
    const onChangeEvent = () => {
        const value = Number(event.target.value)
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        if(value >= 20001) {
            
            alert("The value cannot exceed 20000 £");
            setBudget(20000);
            return;
        }
        if(value<totalExpenses){
            alert("Cannot reduce lower than spending");
            setBudget(totalExpenses);
        }
        else {
            setBudget(value);
            //alert("test");
        }
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency}{<input
                        required='required'
                        type='number'
                        id='budget'
                        defaultValue={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => onChangeEvent(event.target.value)}>
                        </input>}</span>
                        
            
        </div>
        
    );
};
export default Budget;
