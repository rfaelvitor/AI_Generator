# 🤖 Bot Gerador de Texto e Imagens com IA

Aplicação simples que gera respostas de texto e imagens a partir de prompts do usuário, usando a mesma API de Inteligência Artificial.  
Ela utiliza a **API da Pollinations.ai**, adaptando a URL dinamicamente de acordo com a entrada do usuário.

## 🚀 Tecnologias usadas

- **HTML5**  
- **CSS3**  
- **JavaScript (Fetch API)** → usado para montar dinamicamente o endpoint da URL da API com o input do usuário e exibir o resultado na tela.

## 🔥 Como funciona

### 📝 Texto
1. O usuário digita uma mensagem no input.  
2. O JavaScript captura o texto e troca dinamicamente o endpoint da URL da API: https://text.pollinations.ai/<prompt>
3. A resposta da IA é retornada como texto e exibida na tela.

### 🖼️ Imagem
1. O usuário digita uma descrição visual no input.  
2. O JavaScript monta a URL da API: https://image.pollinations.ai/prompt/<prompt>
3. A resposta vem como **blob de imagem**; o JS converte com `URL.createObjectURL(blob)` e atribui ao `img.src`.

## 📎 Acesse os projetos

👉 [Conversar com o bot de texto](https://rfaelvitor.github.io/AI_Generator/BOT_TEXT/index2.html)  

👉 [Gerar imagens com IA](https://rfaelvitor.github.io/AI_Generator/BOT_IMAGE/index.html)  

*(Os dois projetos possuem botões internos para navegar de um para o outro.)*

## 🙏 Créditos
- API utilizada: [Pollinations.ai](https://pollinations.ai/)
