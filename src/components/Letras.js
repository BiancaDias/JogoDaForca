export default function Letras(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const alfabetoMaiusculo = alfabeto.map(letras => letras.toUpperCase())

    return (
        <div className="alfabeto">
            {alfabetoMaiusculo.map(letras => <button key={letras} className="desabilitado" disabled>{letras}</button>)}
        </div>
    )
}