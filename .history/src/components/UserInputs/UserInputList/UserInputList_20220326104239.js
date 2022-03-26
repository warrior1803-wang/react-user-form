import React from 'react';
import second from 'first'

const UserInputList = props =>{
return(
    <ul className='input-list'>
   {props.inputs.map((input) =>(
       <li>
           {input.name} ({input.age} years old)
       </li>
   )  )}
    </ul>
)
}



export default UserInputList;