
import './App.css';
import React, { useState } from 'react';

import UserInput from './components/UserInputs/UserInput/UserInput';

function App() {
  const [userInputs,setuserInputs]=useState({name:'wang',age:'22',id:'1'});
  const addUserHandler =input =>{
setuserInputs(preInputs=>{
  const updatedInputs = [...preInputs];
  updatedInputs.unshift({
   name:input
  })
})
  }
  let content ="wang"
  return (
    <div className="App">
    <section>
      <UserInput onAddUser={addUserHandler}></UserInput>
    </section>
    <section>
      {content}
    </section>
    </div>
  );
}

export default App;
