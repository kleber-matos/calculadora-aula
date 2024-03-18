/** @format */
// Switch case: https://www.w3schools.com/js/js_switch.asp

import { useState } from "react";

export default function App() {
  //Pega o valor do primeiro input e guarda
  const [primeiroValor, setPrimeiroValor] = useState();

  //Pega o valor do segundo input e guarda
  const [segundoValor, setSegundoValor] = useState();

  //Guarda o resultado
  const [resultado, setResultado] = useState(0);

  // Função responsavel por verificar o operador e calcular
  // calcular(operacao): "operacao" e um parametro, sendo chamado la no botão com seu argumento "+", "-"...
  function calcular(operacao) {
    // Nos botoẽs tem argumentos como: "calcular("+")" para serem verificados dentro do swich
    // Switch case fazendo a verificação dos operadores
    switch (operacao) {
      case "+":
        setResultado(Number(primeiroValor) + Number(segundoValor));
        break;
      case "-":
        setResultado(Number(primeiroValor) - Number(segundoValor));
        break;
      case "*":
        setResultado(Number(primeiroValor) * Number(segundoValor));
        break;
      case "c":
        // Na parte de apagar, podemos definir valor para resertar os canpos
        setResultado(0);
        setPrimeiroValor("");
        setSegundoValor("");
        break;
    }
  }

  return (
    <div>
      <h2>Calculadora</h2>

      <h1>{resultado}</h1>
      <div>
        {/* Numeros */}
        <input
          onChange={(e) => setPrimeiroValor(e.target.value)}
          type="number"
          value={primeiroValor}
        />
        <input
          onChange={(e) => setSegundoValor(e.target.value)}
          type="number"
          value={segundoValor}
        />

        {/* Botoões */}
        <div>
          {/* A função calcular com "+", passa no switch para verificar a operação */}
          <button onClick={() => calcular("+")}>+</button>
          <button onClick={() => calcular("-")}>-</button>
          <button onClick={() => calcular("*")}>*</button>
          <button onClick={() => calcular("c")}>c</button>
        </div>
      </div>
    </div>
  );
}
