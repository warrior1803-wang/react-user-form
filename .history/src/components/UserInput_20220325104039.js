import React, { useState } from 'react';


const UserInput = (props) =>{
    const [inputValue, setInputValue]=useState('');

    const formSubmitHandler = e =>{
        e.preventDefault();
        props.on
        
    
    
    }
    const userInputChangeHandler = e =>{
        setInputValue(e.target.value);
    }
    const ageInputChangeHandler = e =>{
    
    }
return(
    <form onSubmit={formSubmitHandler}>
        <div>
          <label>Username</label>
          <input type="text" name="" id="" onChange={userInputChangeHandler} />
          <label>Age(Years)</label>
          <input type="text" name="" id="" onChange={ageInputChangeHandler} />

        </div>
        <button type="submit">Add User</button>
    </form>
)
}
export default UserInput;