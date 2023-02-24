export default function Chute(props){
    return(
        <div className="input-de-chute">
            <p>Já sei a palavra!</p>
            <input 
            disabled={props.habilitado}
            data-test="guess-input"
            type="text"
            onChange={(e) => props.setChute(e.target.value)}
            value={props.chute}
            >
            </input>
            <button data-test="guess-button" onClick={props.testarChute}>Chutar</button>
        </div>
    )
}