import React from 'react';
import Modal from '../../Modal/Modal';
import Card from '../../UI/Card';
import styles from './UserInputList.module.css'

const UserInputList = props =>{
return(
    <Card  className={styles.users}>
        <Modal></Modal>
    <ul>
   {props.inputs.map((input) =>(
       <li key={input.id}>
           {input.name} ({input.age} years old)
       </li>
   )  )}
    </ul></Card>
)
}



export default UserInputList;