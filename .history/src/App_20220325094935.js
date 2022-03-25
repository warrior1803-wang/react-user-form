
import './App.css';

function App() {
  return (
    <div className="App">
    <section>
      <UserInput onAddUser={addU}></UserInput>
    </section>
    <section>
      {content}
    </section>
    </div>
  );
}

export default App;
