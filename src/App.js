import Logo from './Componentes/Logo'
import './App.css';

const textoOpcoes = ['CATEGORIA' ,'FAVORITOS' ,'MINHA ESTANTE']


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      <Logo></Logo>
      <ul className='lista'>
          {textoOpcoes.map((texto) =>(
            <li className='opcao'><p>{texto}</p></li>
          ))}
      </ul>
      </header>

   
    </div>
  );
} 


export default App;
