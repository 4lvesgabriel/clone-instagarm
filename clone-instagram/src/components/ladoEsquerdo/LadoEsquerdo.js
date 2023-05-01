import './LadoEsquerdo.css';
import logo from '../imagens/Instagram-Logo-PNG7.png';
import ItemMenu from './components/ItemMenu/ItemMenu';
import PerfilMenu from './components/PerfilMenu/PerfilMenu';

import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { CgClapperBoard } from "react-icons/cg";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";


function ladoEsquerdo() {
    return (
        <div className="LadoEsquerdo">
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className="menu-principal">
                <ItemMenu icone={<BiHomeAlt2/>} titulo="Página Inicial" classe="select"/>
                <ItemMenu icone={<HiOutlineMagnifyingGlass />} titulo="Pesquisa" classe='texto' />
                <ItemMenu icone={<CgClapperBoard />} titulo="Reels" classe='texto' />
                <ItemMenu icone={<AiFillMessage />} titulo="Mensagens" classe='texto' />
                <ItemMenu icone={<AiOutlineHeart />} titulo="Notificações" classe='texto' />
                <ItemMenu icone={<AiOutlinePlusCircle />} titulo="Criar" classe='texto' />
                <PerfilMenu/>
            </div>
            <div className="config">
                <span className="menuIcone"><AiOutlineMenu/></span>
                <span className="menuTexto">Mais</span>
            </div>
        </div>
    )
}

export default ladoEsquerdo