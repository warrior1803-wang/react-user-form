
import './App.css';
import React, { useState } from 'react';

import UserInput from './components/UserInputs/UserInput/UserInput';
import UserInputList from './components/UserInputs/UserInputList/UserInputList';

function App() {
  const [userInputs,setuserInputs]=useState([{name:'wang',age:'22',id:'1'}]);
  const addUserHandler =(name,age) =>{
setuserInputs((prevUsersList)=>{
  const updatedInputs = [...pre]
  return [...prevUsersList,{name:name, age:age}];

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
