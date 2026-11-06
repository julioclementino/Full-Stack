import { useState } from "react";

function Aula27() {
  const [quantidade, setQuantidade] = useState(0);

  return (
    <div>
      <h1>Meu primeiro contador React</h1>

      <h2>X-Tudo Especial</h2>
      <p>Preço: R$ 18,00</p>

      <p>Quantidade: {quantidade}</p>

      <button onClick={() => setQuantidade(quantidade + 1)}>
        Adicionar +
      </button>
    </div>
  );
}

export default Aula27;