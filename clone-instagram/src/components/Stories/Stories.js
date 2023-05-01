import "./components/Story.css";
import "./Stories.css"
import Story from "./components/Story"
import story1 from "../imagens/DOOM.jpg"
import story2 from "../imagens/jesse.jpg"
import story3 from "../imagens/luffy.png"
import story4 from "../imagens/gutts.jpg"
import story5 from "../imagens/shinji.jpg"
import story6 from '../imagens/zoro.jpg'
import story7 from '../imagens/sanjii.jpg'
import story8 from '../imagens/nami.jpg'


function Stories (){
    return(
    <div className="Stories">
        <Story imgPerfil={story1} nomeDaConta="DOOM" />
        <Story imgPerfil={story2} nomeDaConta="jessepinkman"/>
        <Story imgPerfil={story3} nomeDaConta="monkeydluffy"/>
        <Story imgPerfil={story4} nomeDaConta="gutts"/>
        <Story imgPerfil={story5} nomeDaConta="ikarishinji"/>
        <Story imgPerfil={story6} nomeDaConta="roronoazoro" />
        <Story imgPerfil={story7} nomeDaConta="vinsmokesanjii" />
        <Story imgPerfil={story8} nomeDaConta="nami" />  
            
    </div>
    )
};

export default Stories;