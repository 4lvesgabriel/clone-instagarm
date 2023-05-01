import './LadoDireito.css'
import ItemMenuD from './components/ItemMenu/ItemMenuD'
import Sugestoes from './components/Sugestoes/Sugestoes'
import Links from './components/Links/Links'
import ImgPerfil from '../imagens/luffy.png'
import sugestao1 from '../imagens/reiayanami.jpg'
import sugestao2 from '../imagens/ikarigendo.png'
import sugestao3 from '../imagens/walterwhite.jpg'
import sugestao4 from '../imagens/isidro.webp'
import sugestao5 from '../imagens/madlib.webp'

function LadoDireito(){
    return(
        <div className="LadoDireito">
            <div className="PerfilD">
                <ItemMenuD nomeUsuario="Luffy" nomePerfil="Rei dos Piratas" imgPerfil={ImgPerfil} />
            </div>
            <div className="Sugestoes">
                <div className="titulo">
                    <span className="um">Sugestões para você</span>
                    <span className="dois">Ver todas</span>
                </div>
                <Sugestoes imgPerfil={sugestao1} nomePerfil="reiayanami" seguidoPor="Segue você"/>
                <Sugestoes imgPerfil={sugestao2} nomePerfil="ikarigendo" seguidoPor="Seguido por ikarishinji" />
                <Sugestoes imgPerfil={sugestao3} nomePerfil="walterwhite" seguidoPor="Seguido por jessepinkman" />
                <Sugestoes imgPerfil={sugestao4} nomePerfil="isidro" seguidoPor="Seguido por gutts" />
                <Sugestoes imgPerfil={sugestao5} nomePerfil="madlib" seguidoPor="Seguido por DOOM" />
            </div>
            <div className='link'>
                <Links />
            </div>
        </div>
    )
}

export default LadoDireito