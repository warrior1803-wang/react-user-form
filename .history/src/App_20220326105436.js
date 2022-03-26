
import './App.css';
import React, { useState } from 'react';

import UserInput from './components/UserInputs/UserInput/UserInput';
import UserInputList from './components/UserInputs/UserInputList/UserInputList';

function App() {
  // const [userInputs,setuserInputs]=useState([{name:'wang',age:'22',id:'1'}]);
//   const addUserHandler =(name,age) =>{
// setuserInputs(preInputs=>{
//   const updatedInputs = [...preInputs];
//   updatedInputs.unshift({
//    name:name,
//    age:age,
//    id:Math.random().toString()
//   })
// })
//   }
  return (
    <div className="App">
    <section>
      <UserInput onAddUser={addUserHandler}></UserInput>
    </section>
    <section>
   <UserInputList inputs={[]}></UserInputList>
    </section>
    </div>
  );
}

export default App;
