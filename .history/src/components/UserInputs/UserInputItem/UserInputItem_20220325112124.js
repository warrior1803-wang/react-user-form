import React from 'react';
import UserInput from '../UserInput/UserInput';

const UserInputItem = (props)=>{
return(
    <li
    className='input-item'>
        {props.children}
    </li>
)
}
export default UserInputItem;