
import './App.css';

function App() {
  return (
    <div className="App">
    <section>
      <UserInput onAddUser={add}></UserInput>
    </section>
    <section>
      {content}
    </section>
    </div>
  );
}

export default App;
