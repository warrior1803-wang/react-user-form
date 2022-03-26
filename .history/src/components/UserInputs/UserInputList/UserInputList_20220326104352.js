import React from 'react';
import Card from '../../UI/Card';
import styles from './'

const UserInputList = props =>{
return(
    <Card>
    <ul className='input-list'>
   {props.inputs.map((input) =>(
       <li>
           {input.name} ({input.age} years old)
       </li>
   )  )}
    </ul></Card>
)
}



export default UserInputList;