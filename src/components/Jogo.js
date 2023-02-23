export default function Jogo(props){
    
    return(
        <div className="jogo">
            <img data-test="game-image" alt="imagem-forca" src={props.imagem}/>
            <div className="iniciaJogo">
                <button data-test="choose-word" onClick={props.iniciaJogo} disabled={props.habilitado}> Escolher Palavra</button>
                <div className={`palavra ${props.finalizandoOJogo}`} data-test="word">{props.palavra}</div>
            </div>
        </div>
        
    )
}