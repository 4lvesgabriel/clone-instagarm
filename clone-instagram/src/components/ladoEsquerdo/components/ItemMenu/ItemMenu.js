function itemMenu(props){
    return(
        <span className="ItemMenu">
            <div className="icone">{props.icone}</div>
            <span className={props.classe}>{props.titulo}</span>
        </span>  
    )
}

export default itemMenu