import React from 'react';

const UserInputItem = (props)=>{
return(
    <li
    className='input-item'>
        {props.children}
    </li>
)
}
export default UserInputItem;