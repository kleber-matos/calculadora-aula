/** @format */

import React, { useState } from "react";
import styled from "styled-components";

//Estilos
const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50vw;
  button {
    background-color: #fdac33;
    border: solid 1px;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: red;
  }
`;

export default function App() {
  //Pega o valor do primeiro input e guarda
  const [primeiroValor, setPrimeiroValor] = useState();

  //Pega o valor do segundo input e guarda
  const [segundoValor, setSegundoValor] = useState();

  //Guarada o resultado
  const [resultado, setResultado] = useState(0);

  //Função responsavel por verificar o operador e calcular
  function calcular(operacao) {
    // Switch casa fazendo a verificação dos operadores
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
        <Buttons>
          <button onClick={() => calcular("+")}>+</button>
          <button onClick={() => calcular("-")}>-</button>
          <button onClick={() => calcular("*")}>*</button>
          <button onClick={() => calcular("c")}>c</button>
        </Buttons>
      </div>
    </div>
  );
}
