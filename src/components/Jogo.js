export default function Jogo(props){
    function iniciaJogo(){
        
    }
    
    return(
        <div className="jogo">
            <img alt="imagem-forca" src={props.imagem}/>
            <div className="iniciaJogo">
                <button onClick={iniciaJogo}> Escolher Palavra</button>
                <p>{props.palavra}</p>
            </div>
        </div>
        
    )
}