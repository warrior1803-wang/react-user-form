import React from 'react';
import Card from '../../UI/Card';


const UserInputList = props =>{
return(
    <Card></Card>
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