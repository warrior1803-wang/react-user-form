import React, { useState } from 'react';


const UserInput = (props) =>{
    const  [inputName, setInputName]=useState('');
    const  [inputAge, setInputAge]= useState('');
    const formSubmitHandler = e =>{
        e.preventDefault();
        props.onAddUser(inputName,inputAge );
        
    
    
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
          <label htmlFor='username'>Username</label>
          <input type="text" name="" id="username" onChange={userInputChangeHandler} />
          <label htmlFor='age'>Age(Years)</label>
          <input type="text" name="" id="age" onChange={ageInputChangeHandler} />

        </div>
        <button type="submit">Add User</button>
    </form>
)
}
export default UserInput;