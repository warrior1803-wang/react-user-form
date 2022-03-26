import React, { useState } from "react";
import styles from "./UserInput.module.css";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import Modal from '../../Modal/Modal';

const UserInput = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [show, setShow]= useState()
 
  const userInputChangeHandler = (e) => {
    setInputName(e.target.value);
  };
  const ageInputChangeHandler = (e) => {
    setInputAge(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // props.onAddUser(inputName,inputAge );
    // console.log(inputName,inputAge)
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      return;
    }
    if (inputName === "" || inputAge === "") {
      return;
    }
    if (Number(inputAge) === 0 || Number(inputAge) < 0) {
      return;
    }
    setInputName("");
    setInputAge("");
    props.onAddUser(inputName,inputAge);
  };
  return (
    <Card className={styles.input}>
      <Modal></Modal>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name=""
          id="username"
          value={inputName}
          onChange={userInputChangeHandler}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          type="text"
          name=""
          id="age"
          value={inputAge}
          onChange={ageInputChangeHandler}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default UserInput;
