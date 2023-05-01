import './ItemMenuD.css'

function ItemMenuD(props){
    return(
        <div className="box">
            <div className="perfil">
                <img src={props.imgPerfil} alt="imagem de perfil"></img>
            </div>
            <div className="texto">
                <span className="nomeUsuario">{props.nomeUsuario}</span>
                <span className="nomePerfil">{props.nomePerfil}</span>
            </div>
            <div>
                <span className="mudar">Mudar</span>
            </div>
        </div>
    )
}

export default ItemMenuD