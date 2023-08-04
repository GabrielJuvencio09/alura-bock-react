import './Style.css'
import logo from '../../img/logo.svg';


function Logo() {
    return (
        <div className='logo'>
            <img src={logo} 
                 alt='logo-alurabook'>

            </img>
            <p><strong className='strong'>Alura</strong>books</p>
       </div>
    );
}

export default Logo;