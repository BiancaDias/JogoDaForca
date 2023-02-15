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

  const posicaoNovaPalavra = Math.round(Math.random() * palavras.length)
  const novaPalavra = palavras[posicaoNovaPalavra]
  console.log(novaPalavra);
  let tracos= " _";
    const [aparecerNaTela, setAparecerNaTela] = useState(tracos.repeat(novaPalavra.length));
    //let mudanca = aparecerNaTela;
    // mudanca[2] = "A"
    // setAparecerNaTela(mudanca)
 
  return (
    <div className="corpoJogo">
      <Jogo imagem={forca0} palavra={aparecerNaTela}/>
      <Letras/>
    </div>
  );
}


