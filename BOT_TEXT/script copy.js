// async function call_api() {
//     const search_term = document.getElementById("search_term").value
//     const url_api = "https://text.pollinations.ai/"+search_term//document.getElementById("text")
//     if (!search_term) {
//         alert("O campo de texto não pode ser vazio. Escreva algo.")
//         return
//     }
    
//     try {
//         const response = await fetch(url_api);
//         const data = await response.text();
//         console.log(data);
//         document.getElementById("bot").innerText = data;
//     }
//     catch (error) {
//         console.log("Something is wrong!")
//         console.error(error);
//     }
// }

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("chatForm");
    const input = document.getElementById("search_term");
    const botOutput = document.getElementById("bot");

    async function call_api() {
        const search_term = input.value.trim();
        const url_api = "https://text.pollinations.ai/" + encodeURIComponent(search_term);

        if (!search_term) {
            alert("O campo de texto não pode ser vazio. Escreva algo.");
            return;
        }

        try {
            botOutput.innerText = "Carregando..."; // mostra carregando
            const response = await fetch(url_api);
            const data = await response.text();
            botOutput.innerText = "Resposta: " + data; // mostra a resposta
        } catch (error) {
            console.error("Erro ao buscar a API:", error);
            botOutput.innerText = "Erro ao buscar resposta 😢";
        }
    }

    // Listener para submit do form (clica no botão ou aperta Enter)
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // evita recarregar a página
        call_api();
        input.value = ""; // limpa o campo após enviar
    });
});






