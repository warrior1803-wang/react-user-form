import React from "react";
import Card from "../UI/Card";
import styles from "./Modal.module.css";
import Button from "../UI/Button";
const Backdrop = props =>{
  return     <div className={styles.backdrop} onClick={props.onClose} />

}
const ModalOverLay = props =>{
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
    
    
    </React.Fragment>
  );
};
export default Modal;
