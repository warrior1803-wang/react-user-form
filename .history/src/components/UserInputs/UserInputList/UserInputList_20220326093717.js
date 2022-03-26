import React from 'react';
import UserInputItem from '../UserInputItem/UserInputItem';


const UserInputList = props =>{
return(
    <ul className='input-list'>
    {props.items.map(input =>(
        <UserInputItem
        key={input.id}
        id={input.id}
        
        >[</UserInputItem>
    )
    )}
    </ul>
)
}



export default UserInputList;