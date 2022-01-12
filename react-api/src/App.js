import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/cakes/store';
import HooksCakeContainer from './components/HooksCakeContainer';

function App() {
  return (
       <div className="App">
        <HooksCakeContainer/>
      </div>
  );
}

export default App;
