import React from 'react';
import styles from './Button.modue.css';
const Button = props =>{
return(
    <button type={props.type} className={styles.button}></button>
)
}
export default Button