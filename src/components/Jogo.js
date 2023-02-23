export default function Jogo(props){
    
    return(
        <div className="jogo">
            <img data-test="game-image" alt="imagem-forca" src={props.imagem}/>
            <div className="iniciaJogo">
                <button data-test="choose-word" onClick={props.iniciaJogo}> Escolher Palavra</button>
                <p data-test="word">{props.palavra}</p>
            </div>
        </div>
        
    )
}