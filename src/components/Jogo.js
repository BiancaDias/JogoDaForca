export default function Jogo(props){
    
    return(
        <div className="jogo">
            <img alt="imagem-forca" src={props.imagem}/>
            <div className="iniciaJogo">
                <button onClick={props.iniciaJogo}> Escolher Palavra</button>
                <p>{props.palavra}</p>
            </div>
        </div>
        
    )
}