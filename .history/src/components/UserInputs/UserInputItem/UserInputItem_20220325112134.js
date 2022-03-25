import React from 'react';
import UserinputItem
const UserInputItem = (props)=>{
return(
    <li
    className='input-item'>
        {props.children}
    </li>
)
}
export default UserInputItem;