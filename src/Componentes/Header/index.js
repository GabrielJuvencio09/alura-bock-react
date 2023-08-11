import Logo from '../Logo'
import OpcoesHeader from '../opçoes_header'
import IconesHeader from '../icones_header'
import './style.css';


function Header(){
        return (
            <header className='App-header'>
                <Logo/>
                <OpcoesHeader/>
                <IconesHeader/>
            </header>      
          );
    
}

export default Header;