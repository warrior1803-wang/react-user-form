import React from "react";
import Card from "../UI/Card";
import styles from './Modal.module.css'
import Button from '../UI/Button'
const Modal = (props) => {
    if (!props.show) {
        return null
        
    }
    let message = ""
    if (props.errorState==="2") {
        message="age incorrect"
    }
    if (props.errorState==="1") {
       message= "Username or age cannot be empty"
    }
    return(
        <Card className={styles.modal}>
 
    <div className={styles.content}>
      <div className={styles.header}>
        <h4 className="modal-title">Error Message</h4>
      </div>
      <div className="modal-body">{message}</div>
      <div className="modal-footer">
        <Button onClick={props.onClose}>Close</Button>
        {/* <button onClick={props.onClose} className="button">Close</button> */}
      </div>
    </div>
  </Card>)
};
export default Modal;
