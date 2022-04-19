import React from "react";
import Card from "../UI/Card";
import styles from "./Modal.module.css";
import Button from "../UI/Button";
const Backdrop = props =>{
  return 
}
const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  let message = "";
  if (props.errorState === "2") {
    message = "age incorrect";
  }
  if (props.errorState === "1") {
    message = "Username or age cannot be empty";
  }
  return (
    <React.Fragment>
    <div className={styles.backdrop} onClick={props.onClose} />
    
      <Card className={styles.modal}>
        <div>
          <div className={styles.header}>
            <h4 className={styles.title}>Error Message</h4>
          </div>
          <div className={styles.modalBody}>{message}</div>
          <div className={styles.footer}>
            <Button onClick={props.onClose}>Close</Button>
            {/* <button onClick={props.onClose} className="button">Close</button> */}
          </div>
        </div>
      </Card>
    
    </React.Fragment>
  );
};
export default Modal;
