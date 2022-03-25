import React from 'react';

const UserInput = (props) =>{
return(
    <form onSubmit={formSubmitHandler}>
        <div>
          <label>Username</label>  
          <label>Age(Years)</label>
        </div>
    </form>
)
}
export default UserInput;