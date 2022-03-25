
import './App.css';
import React from 'react';

import UserInput from './components/UserInputs/UserInput/UserInput';

function App() {
  const addUserHandler =e =>{
    
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
