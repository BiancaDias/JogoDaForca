import React from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import palavras from "../palavras";

function App() {
  return (
    <div className="corpoJogo">
      <Jogo/>
      <Letras/>
    </div>
  );
}

export default App;
