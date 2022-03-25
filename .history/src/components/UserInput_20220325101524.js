import React from 'react';

const UserInput = (props) =>{
return(
    <form onSubmit={formSubmitHandler}>
        <div>
          <label>Username</label>
          <input type="text" name="" id="" onChange={userInputChangeHandler} />
          <label>Age(Years)</label>
          <input type="text" name="" id="" onChange={ageInputChangeHandler} />
    
        </div>
    </form>
)
}
export default UserInput;