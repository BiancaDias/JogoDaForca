import { useState } from "react";

export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const arrayDePosicoes = [];
    
    let palavraAtualizada = props.palavra;
    function letrasPress(letra) {
        props.setLetrasPressionadas([...props.letrasPressionadas, letra]);
        props.setLetraAtual(letra);
        if (props.erros <= 6) {
            if (props.novaPalavra.includes(letra) === true) {
                console.log("dentro da funcao", letra)
                console.log("sim")
                let pos = props.novaPalavra.indexOf(letra);
                while (pos != -1) {
                    arrayDePosicoes.push(pos)
                    pos = props.novaPalavra.indexOf(letra, pos + 1);
                }
                let i=0;
                
                console.log(arrayDePosicoes);
                console.log(props.palavra)

                let array = props.palavra.split('');
                while (i < arrayDePosicoes.length) {
                    array.splice(2 * arrayDePosicoes[i] + 1, 1, letra);
                    i++
                }
                props.setAparecerNaTela(array.join(""))
                if(props.aparecerNaTela.length === props.novaPalavra.length){
                    props.finalizarJogo()
                }
                props.setAcertos(props.acertos + arrayDePosicoes.length)
                console.log(props.acertos + arrayDePosicoes.length);
                if(props.acertos + arrayDePosicoes.length === props.novaPalavra.length){
                    props.finalizarJogo();
                }
            }
            else {
                console.log("nao")
                props.setErros(props.erros + 1);
                if(props.erros + 1 <7){
                    props.setImagem(props.imagens[props.erros + 1]);
                }
                if(props.erros + 1 === 6){
                    props.finalizarJogo();
                }
            }
        }
    }

    return (
        <div className="alfabeto">
            {alfabeto.map((letras) => <button data-test="letter" onClick={() =>
                letrasPress(letras)} key={letras} disabled={props.letrasPressionadas.includes(letras) ? true : props.habilitado}
                className={props.letrasPressionadas.includes(letras) ? "desabilitado" : props.classe}>{letras} </button>)}
        </div>
    )
}