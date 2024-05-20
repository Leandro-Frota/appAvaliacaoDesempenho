
import './App.css';
import Cadastro from './Componentes/Cadastro/Cadastro.jsx';
import PreparoQualificacao from './Componentes/PreparoQualificacao/PreparoQualificacao.jsx'

function App() {
  return (
       <div className="app">
        <h1>Avaliação de Desempenho</h1>
        <Cadastro/>
        <PreparoQualificacao/>
      </div>

  );
}

export default App;
