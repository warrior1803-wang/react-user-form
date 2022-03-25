
import './App.css';
import React, { useState } from 'react';

import UserInput from './components/UserInputs/UserInput/UserInput';

function App() {
  const [userInputs,setuserInputs]=useState({name:'wang',age:'22',id:'1'});
  const addUserHandler =(name,age) =>{
setuserInputs(preInputs=>{
  const updatedInputs = [...preInputs];
  updatedInputs.unshift({
   name:name,
   age:age,
   id:Math.random().toString()
  })
})
  }
  let content =(
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  )
  if (condition) {
    
  }
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
