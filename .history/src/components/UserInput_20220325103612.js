import React, { useState } from 'react';


const UserInput = (props) =>{
    const [inputValue, setInputValue]=useState('');

    const formSubmitHandler = e =>{
        e.preventDefault();
        setInputValue(e.target.va)
        
    
    
    }
    const userInputChangeHandler = e =>{
    
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