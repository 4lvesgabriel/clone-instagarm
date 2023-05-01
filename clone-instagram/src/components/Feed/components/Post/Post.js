import './Post.css'
import { FiMoreHorizontal } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BiBookmark } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

function Post (props){
    return(
        <div className="Post">
            <div className="barraSuperior">
                <div className="barraEsquerda">
                    <div className="imgPerfil"><img className="imagemPerfilAutor" alt="Foto de perfil" src={props.imagemPerfil}></img></div>
                    <div className="nomePerfilAutor">{props.nomePerfil}</div>
                    <div className="tempoPostagem"><p>• {props.numero} {props.diaHora}</p></div>
                </div>
                <div className="barraDireita">
                    <div className="menuBarraSuperior"></div>
                    <div className="maisOpcoes"><FiMoreHorizontal /></div>
                </div>
            </div>
            <div className="conteudoPost">
                <img className="foto" src={props.imagemPost} alt={props.alt}></img>
            </div>
            <div className="barraInferor">
                <div className="reacao">
                    <button className="button1"><IoHeartOutline /></button>
                    <button className="button2"><IoChatbubbleOutline /></button>
                    <button className="button3"><IoPaperPlaneOutline /></button>
                    <button className="button4"><BiBookmark/></button>
                    
                </div>
                <div className="gostei">
                    <span>Curtido por: <span className='curtido'>{props.likes}</span><span> e </span><span className='curtido'>outras pessoas.</span></span>
                </div>
                <div className="descricao">
                    <span className="nomePerfilAutor">{props.nomePerfil}</span>
                    <span> </span>
                    <span>{props.legenda}</span>
                </div>
                <div className="comentarios">
                    <span className="expand">Ver todos os comentarios</span>
                    <div className='caixacomentarios'>
                        <span className="nomePerfilAutor maior">{props.nomeComentario1}</span>
                        <span className="comentario">{props.comentario1}</span>
                        <span className='likecomentario'><AiOutlineHeart /></span>
                    </div>
                    <div className="caixacomentarios">
                        <span className="nomePerfilAutor">{props.nomeComentario2}</span>
                        <span className="comentario">{props.comentario2}</span>
                        <span className='likecomentario'><IoHeartOutline /></span>
                    </div>
                    
                </div>
                <div className="adicionarComentario">
                    <textarea placeholder='Adicionar um comentário...'></textarea>
                    <span><BsEmojiSmile/></span>
                </div>
            </div>
        </div>
    )
}

export default Post;