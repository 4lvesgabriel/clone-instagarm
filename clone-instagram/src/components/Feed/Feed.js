import Post from "./components/Post/Post.js";
import './Feed.css';
import imagemUsuario1 from "../imagens/luffy.png"
import imagemUsuario2 from "../imagens/shinji.jpg"
import imagemUsuario3 from "../imagens/DOOM.jpg"
import imagemUsuario4 from "../imagens/jesse.jpg"
import imagemUsuario5 from "../imagens/gutts.jpg"

import post1 from "../imagens/tesouro.jpg"
import post2 from "../imagens/yui.webp"
import post3 from "../imagens/doommacarrao.jpg"
import post4 from "../imagens/jane.jpg"
import post5 from "../imagens/guttscaska.webp"

function feed(){
    return (
        <>
            <Post nomePerfil="monkeydluffy" numero="1" diaHora="d" imagemPost={post1} imagemPerfil={imagemUsuario1} likes="roronoazoro" legenda="Finalmente achei o one piece e virei o rei dos piratas!" nomeComentario1="roronoazoro" nomeComentario2="vinsmokesanjii" comentario1="vocês esqueceram de mim e eu tô em algum deserto 😭" comentario2="eu vou fazer um banquete pra gente comemorar!" alt="Foto do post."/>
            <Post nomePerfil="ikarishinji" numero="12" diaHora="h" imagemPost={post2} imagemPerfil={imagemUsuario2} likes="reiayanami" legenda="Visitei minha mãe no trabalho hoje, foi ótimo!" nomeComentario1='ikarigendo' comentario1="Shinji, entra no robô." nomeComentario2="reiayanami" comentario2="Por algum motivo ela não me é estranha.. 🤔" alt="Foto do post."/>
            <Post nomePerfil="DOOM" numero="7" diaHora="d" imagemPost={post3} imagemPerfil={imagemUsuario3} likes="madvillain" legenda="Um jantar perfeito para qualquer Supervilão." nomeComentario1="quasimodo" comentario1="Guarda um pouco pra mim!" nomeComentario2="madlib" comentario2="Esse ele aprendeu comigo. 🤣" alt="Foto do post."/>
            <Post nomePerfil="jessepinkman" numero="1" diaHora="h" imagemPost={post4} imagemPerfil={imagemUsuario4} likes="comboortega" legenda="Tiraram essa foto da gente assim que a gente chegou no alaska, antes de começar nossa nova vida e eu achei ela fofa, yo." nomeComentario1="heisenberg" comentario1="jesse, volta pra albuquerque, eu tenho um plano novo!" nomeComentario2="walterwhite" comentario2="muito feliz com a sua mudança! finalmente tomou jeito!" alt="Foto do post."/>
            <Post nomePerfil="gutts" numero="25" diaHora="d" imagemPost={post5} imagemPerfil={imagemUsuario5} likes="isidro" legenda="Nos casamos, e finalmente poderemos viver em paz na nova ilha das fadas." nomeComentario1="isidro" comentario1="Aee! já tava na hora, mas e meu treinamento?" nomeComentario2="puck" comentario2="Nunca achei que o gutts conseguiria ser um marido, quem diria.." alt="Foto do post."/>
        </>
    )
};

export default feed;