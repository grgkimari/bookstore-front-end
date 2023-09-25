import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AddForm from './Components/AddForm';

function App() {
  return (
    <div className="App">
      <h1>Add Book</h1>
      <AddForm />
    </div>
  );
}

export default App;
