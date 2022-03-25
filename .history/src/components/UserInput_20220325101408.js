import React from 'react';

const UserInput = (props) =>{
return(
    <form onSubmit={formSubmitHandler}>
        <div>
          <label>Username</label>  
          <label>Age</label>
        </div>
    </form>
)
}
export default UserInput;