import React from 'react'
import './App.css';
imm
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
