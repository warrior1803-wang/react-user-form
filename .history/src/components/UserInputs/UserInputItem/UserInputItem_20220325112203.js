import React from 'react';
import './'
const UserInputItem = (props)=>{
return(
    <li
    className='input-item'>
        {props.children}
    </li>
)
}
export default UserInputItem;