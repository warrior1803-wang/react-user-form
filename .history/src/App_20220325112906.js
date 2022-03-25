
import './App.css';
import React from 'react';

import UserInput from './components/UserInputs/UserInput/UserInput';

function App() {
  const [userInputs,setuserInputs]=uses
  const addUserHandler =input =>{

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
