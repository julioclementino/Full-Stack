const form = document.querySelector("#form-orcamento");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const dados = new FormData(form);
  const servico = form.querySelector("#servico");
  const mensagem = [
    "Olá! Gostaria de pedir um orçamento.",
    "",
    `Nome: ${dados.get("nome")}`,
    `E-mail: ${dados.get("email")}`,
    `Telefone: ${dados.get("telefone")}`,
    `Serviço: ${servico.options[servico.selectedIndex].text}`,
    `Data preferida: ${dados.get("data") || "Não informada"}`,
    "",
    `Descrição do defeito: ${dados.get("mensagem")}`,
  ].join("\n");

  const url = `https://wa.me/5581991177107?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});