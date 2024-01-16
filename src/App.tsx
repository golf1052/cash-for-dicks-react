import InfoBar from './InfoBar';
import Calculator from './Calculator';
import Credits from './Credits';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <InfoBar />
      <Calculator />
      <div className='app-credits-div'>
        <Credits />
      </div>
    </div>
  );
}

export default App;
