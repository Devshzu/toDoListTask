import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import { TodoWrapperLocalStorage } from './components/TodoWrapperLocalStorage';

function App() {
  return (
    <div className="App">
      <TodoWrapperLocalStorage  />
    </div>
  );
}

export default App;
