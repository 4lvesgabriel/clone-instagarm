import './PerfilMenu.css'
import Foto from '../../../imagens/luffy.png'

function PerfilMenu (){
    return(
        <div className='perfilMenu'>
            <img src={Foto} alt="imagem de perfil"></img>
            <span>Perfil</span>
        </div>
    )
}

export default PerfilMenu