const categorias = document.querySelectorAll(".categoria");
const produtos = document.querySelectorAll(".produto");
const botoesAdicionar = document.querySelectorAll(".adicionar");

const limparPedido = document.querySelector("#limpar-pedido");
const listaPedido = document.querySelector("#lista-pedido");
const carrinho = document.querySelector(".carrinho");
const aviso = document.querySelector("#aviso");
const quantidade = document.querySelector(".quantidade");
const valorTotal = document.querySelector("#valor-total");

let quantidadeItens = 0;
let totalPreco = 0;

// filtrar produtos por categoria

categorias.forEach((botao) => {
  botao.addEventListener("click", () => {
    categorias.forEach((categoria) => {
      categoria.classList.remove("ativo");
      categoria.setAttribute("aria-pressed", "false");
    });

    botao.classList.add("ativo");
    botao.setAttribute("aria-pressed", "true");

    const filtro = botao.dataset.filtro;

    produtos.forEach((produto) => {
      if (filtro === "todos" || produto.dataset.categoria === filtro) {
        produto.style.display = "flex";
      } else {
        produto.style.display = "none";
      }
    });
  });
});

// adicionar produtos ao carrinho

botoesAdicionar.forEach((botao) => {
  botao.addEventListener("click", () => {
    const produto = botao.closest(".produto");
    const preco = Number(produto.dataset.preco);

    const nome = produto.querySelector("h3").textContent;

    const item = document.createElement("li");

    const nomeItem = document.createElement("span");
    nomeItem.textContent = nome;

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "×";
    botaoRemover.classList.add("remover-item");
    botaoRemover.setAttribute("aria-label", `Remover ${nome}`);
    botaoRemover.type = "button";

    item.append(nomeItem, botaoRemover);
    listaPedido.append(item);

    botaoRemover.addEventListener("click", () => {
      item.remove();

      quantidadeItens--;
      totalPreco = totalPreco - preco;

      quantidade.textContent = quantidadeItens;

      valorTotal.textContent = `R$ ${totalPreco.toFixed(2).replace(".", ",")}`;

      carrinho.setAttribute(
        "aria-label",
        `Carrinho com ${quantidadeItens} itens`,
      );

      aviso.textContent = `${nome} removido do pedido!`;
    });

    aviso.textContent = `${nome} adicionado ao pedido!`;

    quantidadeItens++;
    totalPreco = totalPreco + preco;

    quantidade.textContent = quantidadeItens;

    valorTotal.textContent = `R$ ${totalPreco.toFixed(2).replace(".", ",")}`;

    carrinho.setAttribute(
      "aria-label",
      `Carrinho com ${quantidadeItens} itens`,
    );

    console.log("Quantidade:", quantidadeItens);
    console.log("Total: R$", totalPreco.toFixed(2).replace(".", ","));
  });
});

// Mostrar quantidade ao clicar no carrinho

carrinho.addEventListener("click", () => {
  alert(`Você adicionou ${quantidadeItens} item(ns) ao carrinho!`);
});

// Limpar pedido do carrinho
limparPedido.addEventListener("click", () => {
  quantidadeItens = 0;
  totalPreco = 0;

  quantidade.textContent = 0;
  valorTotal.textContent = "R$ 0,00";

  listaPedido.innerHTML = "";
  aviso.textContent = "";

  carrinho.setAttribute("aria-label", "Carrinho com 0 itens");
});
