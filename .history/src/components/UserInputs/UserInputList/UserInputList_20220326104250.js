import React from 'react';
import Card from '../../UI/Card';
Card

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