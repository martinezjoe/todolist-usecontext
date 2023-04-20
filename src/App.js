import ToDoContainer from './components/ToDoContainer';
import { ToDoContextProvider } from './context/ToDoContext';

function App() {
  return (
    <div className="App">
      <ToDoContextProvider>
        <ToDoContainer />
      </ToDoContextProvider>

      <hr/>
      <h5 style={{textAlign:'center'}}>  Joe Martínez, 2023 </h5>
    </div>
  );
}

export default App;
