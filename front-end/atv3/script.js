
const categorias = document.querySelectorAll(".categoria");
const produtos = document.querySelectorAll(".produto");
const botoesAdicionar = document.querySelectorAll(".adicionar");

const carrinho = document.querySelector(".carrinho");
const quantidade = document.querySelector(".quantidade");

let total = 0;

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
    total++;

    quantidade.textContent = total;
    carrinho.setAttribute("aria-label", `Carrinho com ${total} itens`);
  });
});

// Mostrar quantidade ao clicar no carrinho

carrinho.addEventListener("click", () => {
  alert(`Você adicionou ${total} item(ns) ao carrinho!`);
});
