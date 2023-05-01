
function Story (props){
    return(
        <div className="Story">
            <div className="wrapper">
                <div className="imgStory">
                    <img src={props.imgPerfil} alt="imagem do story"></img>
                </div>
            </div>
                <div className="nomeStory">
                    <span>{props.nomeDaConta}</span>
                </div>
        </div>
    )
}

export default Story