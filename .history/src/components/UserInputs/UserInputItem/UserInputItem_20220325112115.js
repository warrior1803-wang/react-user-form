import React from 'react';
Userinput
const UserInputItem = (props)=>{
return(
    <li
    className='input-item'>
        {props.children}
    </li>
)
}
export default UserInputItem;