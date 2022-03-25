
import './App.css';

function App() {
  return (
    <div className="App">
    <section>
      <UserInput onAddUser={addUserHand}></UserInput>
    </section>
    <section>
      {content}
    </section>
    </div>
  );
}

export default App;
