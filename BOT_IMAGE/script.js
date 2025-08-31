// async function call_api() {
//     const search_term = document.getElementById("search_term").value;
//     const url_api = "https://image.pollinations.ai/prompt/" + search_term;

//     if (!search_term) {
//         alert("O campo de texto não pode ser vazio. Escreva algo.");
//         return;
//     }

//     try {
//         document.getElementById("img").src = "";
//         const response = await fetch(url_api);
//         const data = await response.blob();
//         console.log(data);
//         document.getElementById("img").src = URL.createObjectURL(data);
//     }
//     catch (error) {
//         console.log("Something is wrong!");
//         console.error(error);
//     }
// }

// script.js - versão final com "Carregando..."
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("search_term");
  const img = document.getElementById("img");
  const button = document.getElementById("button");
  const botOutput = document.getElementById("bot"); // Para mostrar "Carregando..."

  async function call_api() {
    const search_term = input.value.trim();
    const url_api =
      "https://image.pollinations.ai/prompt/" + encodeURIComponent(search_term);

    if (!search_term) {
      alert("O campo de texto não pode ser vazio. Escreva algo.");
      return;
    }

    try {
      // Limpa imagem anterior e mostra carregando
      img.src = "";
      if (botOutput) botOutput.innerText = "Carregando...";

      const response = await fetch(url_api);
      if (!response.ok) throw new Error("Resposta da API: " + response.status);
      const blob = await response.blob();

      // Mostra a imagem e remove mensagem de carregando
      img.src = URL.createObjectURL(blob);
      if (botOutput) botOutput.innerText = "";
    } catch (error) {
      console.error("Erro ao buscar a imagem:", error);
      alert("Não conseguimos criar essa imagem. Tente outra!");
      if (botOutput) botOutput.innerText = "";
    }
  }

  // Deixa a função acessível globalmente (para onclick)
  window.call_api = call_api;

  // Chama a função ao apertar Enter dentro do input
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        call_api();
      }
    });
  }
});






