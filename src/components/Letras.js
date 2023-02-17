import { useState } from "react";

export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    const [letrasPressionadas, setLetrasPressionadas] = useState([]);
    function letrasPress(letra) {
        setLetrasPressionadas([...letrasPressionadas, letra]);
        props.setLetraAtual(letra);
        if (props.erros <= 6) {
            if (props.novaPalavra.includes(letra) === true) {
              console.log("dentro da funcao" ,letra)
              console.log("sim")
            }
            else {
              console.log("nao")
              props.setErros(props.erros + 1);
              props.setImagem(props.imagens[props.erros + 1]);
            }
          }
    }

    return (
        <div className="alfabeto">
            {alfabeto.map((letras) => <button onClick={() => 
                letrasPress(letras)} key={letras} disabled={letrasPressionadas.includes(letras) ? true : props.habilitado} 
                className={letrasPressionadas.includes(letras) ? "desabilitado" : props.classe}>{letras} </button>)}
        </div>
    )
}