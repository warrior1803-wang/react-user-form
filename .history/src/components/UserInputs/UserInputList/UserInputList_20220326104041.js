import React from 'react';
import UserInputItem from '../UserInputItem/UserInputItem';


const UserInputList = props =>{
return(
    <ul className='input-list'>
   {props.inputs.map((input) =>(
       <li>
           {}
       </li>
   )  )}
    </ul>
)
}



export default UserInputList;