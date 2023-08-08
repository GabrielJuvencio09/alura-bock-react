import Logo from './Componentes/Logo'
import OpcoesHeader from './Componentes/opçoes_header'
import IconesHeader from './Componentes/icones_header'
import './App.css';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      <Logo></Logo>
      <OpcoesHeader></OpcoesHeader>
     <IconesHeader></IconesHeader>
      </header>
    </div>
  );
} 


export default App;
