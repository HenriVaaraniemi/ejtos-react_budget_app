import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext); 
    const [setBudget] = useState(1);
    const onChangeEvent = () => {
        const value = Number(event.target.value)
        if(value >= 20001) {
            
            alert("The value cannot exceed 20000 £");
            setBudget(20000);
            return;
        }
        else {
            setBudget(value);
            //alert("test");
        }
    };
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{<input
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
