import React from 'react';


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