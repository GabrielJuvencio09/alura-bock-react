import './style.css'

const textoOpcoes = ['CATEGORIA' ,'FAVORITOS' ,'MINHA ESTANTE']


function OpcoesHeader() {
   return (
    <ul className='lista'>
            {textoOpcoes.map((texto) =>(
            <li className='opcao'><p>{texto}</p></li>
            ))}
        </ul>
   )
}

export default OpcoesHeader;