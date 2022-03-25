import React, { useState } from 'react';


const UserInput = (props) =>{
    const userName =  [inputName, setInputName]=useState('');
    const  [inputAge, setInputAge]= useState('');
    const formSubmitHandler = e =>{
        e.preventDefault();
        props.onAddUser(inputName,inputage );
        
    
    
    }
    const userInputChangeHandler = e =>{
        setInputName(e.target.value);
    }
    const ageInputChangeHandler = e =>{
        setInputAge(e.target.value);
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