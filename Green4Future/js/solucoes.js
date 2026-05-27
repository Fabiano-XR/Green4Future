document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o formulário dentro da classe .container
    const formulario = document.querySelector(".container form");
    
    // Cria a div da mensagem de sucesso dinamicamente
    const mensagemSucesso = document.createElement("div");
    mensagemSucesso.className = "mensagem-sucesso";
    formulario.appendChild(mensagemSucesso); 

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault(); // Impede a página de recarregar

        mensagemSucesso.innerText = "Processando sua solicitação...";
        mensagemSucesso.style.color = "#051824"; 
        mensagemSucesso.style.display = "block";

        setTimeout(function () {
            mensagemSucesso.innerText = "Solicitação enviada com sucesso! Entraremos em contato.";
            mensagemSucesso.style.color = "#ffffff"; 
            mensagemSucesso.style.backgroundColor = "#2e7d32"; 
            
            formulario.reset(); // Limpa os campos do formulário
        }, 1500);
    });
});