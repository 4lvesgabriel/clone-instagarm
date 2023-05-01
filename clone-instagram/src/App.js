import './App.css';
import Feed from './components/Feed/Feed';
import Stories from './components/Stories/Stories';
import LadoEsquerdo from './components/ladoEsquerdo/LadoEsquerdo';
import LadoDireito from './components/ladoDireito/LadoDireito'

function App() {
  return (
    <div className="App">
      <div className="margem"></div>
        <LadoEsquerdo />
      <div className="Centro">
        <Stories />
        <Feed />
      </div>

      <div className="LadoDireito">
        <LadoDireito/>
      </div>
    </div>
  );
}

export default App;
