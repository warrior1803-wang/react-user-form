import React from 'react';
const 
const UserInput = (props) =>{
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