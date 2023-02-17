import React from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras";
import { useState } from "react";
import forca0 from "../assets/forca0.png";
import forca1 from "../assets/forca1.png";
import forca2 from "../assets/forca2.png";
import forca3 from "../assets/forca3.png";
import forca4 from "../assets/forca4.png";
import forca5 from "../assets/forca5.png";
import forca6 from "../assets/forca6.png";

export default function App() {
  const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  const [aparecerNaTela, setAparecerNaTela] = useState("");
  const [habilitarTeclas, setHabilitarTeclas] = useState(true);
  const [classeTeclado, setClasseTeclado] = useState("desabilitado");
  const [erros, setErros] = useState(0);
  const [imagem, setImagem] = useState(imagens[0])
  const [letraAtual, setLetraAtual] = useState("");
  const [novaPalavra, setNovaPalavra] = useState("");

  //const [letrasPressionadas, setLetrasPressionadas] = useState([]);
  function iniciar() {
    const posicaoNovaPalavra = Math.round(Math.random() * palavras.length)
    setNovaPalavra(palavras[posicaoNovaPalavra])
    console.log(palavras[posicaoNovaPalavra]);
    let tracos = " _";
    setAparecerNaTela(tracos.repeat(palavras[posicaoNovaPalavra].length));
    setHabilitarTeclas(false);
    setClasseTeclado("habilitado");
    setErros(0);
  }
  

  return (
    <div className="corpoJogo">
      <Jogo imagem={imagem} palavra={aparecerNaTela} iniciaJogo={iniciar} />
      <Letras habilitado={habilitarTeclas} classe={classeTeclado} setLetraAtual={setLetraAtual} erros={erros} setImagem={setImagem} novaPalavra={novaPalavra} setErros={setErros} imagens={imagens}/>
    </div>
  );
}


