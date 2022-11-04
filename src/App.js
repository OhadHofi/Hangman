import logo from './logo.svg';
import './App.css';
import { Score } from './component/Score';
import { Solution } from './component/Solution';
import { Letters } from './component/Letters';

function App() {
  return (
    <div>
      <Score />
      <Solution />
      <Letters />
    </div>
  );
}

export default App;
