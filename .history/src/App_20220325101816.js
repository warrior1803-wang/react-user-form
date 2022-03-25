
import './App.css';
import React, { useState } from 'react';
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

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
