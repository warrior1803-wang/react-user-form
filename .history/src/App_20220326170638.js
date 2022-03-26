
import './App.css';
import React, { useState } from 'react';

import UserInput from './components/UserInputs/UserInput/UserInput';
import UserInputList from './components/UserInputs/UserInputList/UserInputList';
import Modal from './components/Modal/Modal';
Modal
function App() {
  const [userInputs,setuserInputs]=useState([{name:'wang',age:'22',key:'1'}]);
  const addUserHandler =(name,age) =>{
setuserInputs((prevUsersList)=>{
  const updatedInputs = [...prevUsersList]
  updatedInputs.unshift({name:name,age:age,key:Math.random().toString()})
  return updatedInputs
})
  } 
  return (
    <div className="App">

      <UserInput onAddUser={addUserHandler}></UserInput>
   
   <UserInputList inputs={userInputs}/>
    </div>
  );
}

export default App;
