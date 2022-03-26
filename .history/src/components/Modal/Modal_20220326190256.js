import React from "react";
import Card from "../UI/Card";
import styles from './Modal.module.css'

const Modal = (props) => {
    if (!props.show) {
        return null
        
    }
    let message = "Username or age cannot be empty"
    if (condition) {
        
    }
    return(
        <Card className={styles.modal}>
 
    <div className="modal-content">
      <div className="modal-header">
        <h4 className="modal-title">Modal title</h4>
      </div>
      <div className="modal-body">This is modal content</div>
      <div className="modal-footer">
        <button onClick={props.onClose} className="button">Close</button>
      </div>
    </div>
  </Card>)
};
export default Modal;
