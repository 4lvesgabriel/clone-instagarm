import './Sugestoes.css'

function Sugestoes(props){
    return(
            <div className='perfis'>
                <div className='perfilsugestoes'>
                    <div className="imgperfil">
                        <img src={props.imgPerfil} alt="imagem de perfil"/>
                    </div>
                    <div className="sugestaoTexto">
                        <span className="sugestaoNome">{props.nomePerfil}</span>
                        <span className="sugestaoSeguido">{props.seguidoPor}</span>
                    </div>
                    <div>
                        <span className="seguir">Seguir</span>
                    </div>
                </div>
            </div>

    )
}

export default Sugestoes