
import './App.css';
import React, { useState } from 'react';
import UserInput from './components/UserInput';
const addUserHandler =e =>{

}
let content =""
function App() {
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
