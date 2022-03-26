import React, { useState } from 'react';
import styles from './UserInput.module.css'
import Card from '../../UI/Card';
import Button from '../../UI/Button';

const UserInput = (props) =>{
    const  [inputName, setInputName]=useState('');
    const  [inputAge, setInputAge]= useState('');
    const formSubmitHandler = e =>{
        e.preventDefault();
        // props.onAddUser(inputName,inputAge );

    }
    const userInputChangeHandler = e =>{
        setInputName(e.target.value);
    }
    const ageInputChangeHandler = e =>{
        setInputAge(e.target.value);
    }
return(
    <Card className={styles.input}>
    <form onSubmit={formSubmitHandler}>
       
          <label htmlFor='username'>Username</label>
          <input type="text" name="" id="username" onChange={userInputChangeHandler} />
          <label htmlFor='age'>Age(Years)</label>
          <input type="text" name="" id="age" onChange={ageInputChangeHandler} />

    
        <Button type="submit">Add User</Button>
    </form>
    </Card>
)
}
export default UserInput;