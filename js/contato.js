// Aguarda o HTML ser totalmente carregado pelo navegador
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona o formulário usando o ID "formContato" que você adicionou
    const formulario = document.getElementById("formContato");

    // Fica atento para quando o usuário clicar no botão de enviar
    formulario.addEventListener("submit", (event) => {
        
        // Impede que a página recarregue e limpe os dados antes do tempo
        event.preventDefault();

        // Mostra o aviso na tela do usuário
        alert("Mensagem enviada com sucesso!");

        // Apaga o texto de todas as caixas (Nome, Email e Mensagem) instantaneamente
        formulario.reset();
    });
});