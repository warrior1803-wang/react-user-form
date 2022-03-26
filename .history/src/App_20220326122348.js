
import './App.css';
import React, { useState } from 'react';

import UserInput from './components/UserInputs/UserInput/UserInput';
import UserInputList from './components/UserInputs/UserInputList/UserInputList';

function App() {
  const [userInputs,setuserInputs]=useState([{name:'wang',age:'22',id:'1'}]);
  const addUserHandler =(name,age) =>{
setuserInputs((prevUsersList)=>{
  const updatedInputs = [...prevUsersList]
  updatedInputs.unshift({name:name,age:age,key=Math.random().toString()})
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
