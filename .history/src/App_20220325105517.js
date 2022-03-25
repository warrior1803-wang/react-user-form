
import './App.css';
imr
import UserInput from './components/UserInput';
const addUserHandler =e =>{

}
let content ="wang"
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
