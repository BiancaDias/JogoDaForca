import React from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras";
import Chute from "./Chute";
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
  const [novaPalavra, setNovaPalavra] = useState("");
  const [finalizandoOJogo, setFinalizandoOJogo] = useState(null);
  const [acertos, setAcertos] = useState(0);
  const [habilitarInicio, setHabilitarInicio] = useState(false);
  const [letrasPressionadas, setLetrasPressionadas] = useState([]);
  const [chute, setChute] = useState("");
  const [habilitaChute, setHabilitaChute] = useState(true);


  function iniciar() {
    const posicaoNovaPalavra = Math.round(Math.random() * palavras.length)
    setNovaPalavra(palavras[posicaoNovaPalavra])
    let tracos = " _";
    setAparecerNaTela(tracos.repeat(palavras[posicaoNovaPalavra].length));
    setHabilitarTeclas(false);
    setClasseTeclado("habilitado");
    setErros(0);
    setAcertos(0);
    setHabilitarInicio(true);
    setFinalizandoOJogo(null)
    setImagem(imagens[0]);
    setLetrasPressionadas([]);
    setHabilitaChute(false);
  }
  function finalizarJogo(){
    setHabilitarTeclas(true);
    setClasseTeclado("desabilitado");
    setHabilitarInicio(false);
    setHabilitaChute(true);
    if(erros===5){
      setFinalizandoOJogo("vermelho")
      setAparecerNaTela(novaPalavra);
    }
    else{
      setFinalizandoOJogo("verde")
      setAparecerNaTela(novaPalavra);
    }

  }

  function testarChute(){
    if(chute === novaPalavra){
      setFinalizandoOJogo("verde")
      setAparecerNaTela(novaPalavra);
    }
    else{
      setFinalizandoOJogo("vermelho")
      setAparecerNaTela(novaPalavra);
      setImagem(imagens[6])
    }
    setHabilitarTeclas(true);
    setClasseTeclado("desabilitado");
    setHabilitarInicio(false);
    setChute("");
    setHabilitaChute(true);
  }
  

  return (
    <div className="corpoJogo">
      <Jogo imagem={imagem} 
      palavra={aparecerNaTela} 
      iniciaJogo={iniciar} 
      finalizandoOJogo={finalizandoOJogo}
      habilitado={habilitarInicio}
      />
      <Letras 
        habilitado={habilitarTeclas} 
        classe={classeTeclado} 
        erros={erros} 
        setImagem={setImagem} 
        novaPalavra={novaPalavra} 
        setErros={setErros} 
        imagens={imagens} 
        palavra={aparecerNaTela} 
        setAparecerNaTela={setAparecerNaTela} 
        aparecerNaTela={aparecerNaTela} 
        finalizarJogo={finalizarJogo}
        acertos={acertos}
        setAcertos={setAcertos}
        letrasPressionadas={letrasPressionadas}
        setLetrasPressionadas={setLetrasPressionadas}
        />

      <Chute
        setChute={setChute}
        chute={chute}
        testarChute={testarChute}
        habilitado={habilitaChute}
      />
    </div>
  );
}


