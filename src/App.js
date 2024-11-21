import logo from './logo.svg';
import './App.css';
import TreasureTroves from './treasuretroves';
import GoyardGazette  from './GoyardGazette';
import Bags from './bags';

function App() {
  return (
    <switch>
    <Bags></Bags>
    <TreasureTroves/>
    <GoyardGazette/>
    </switch>
  );
}

export default App;
