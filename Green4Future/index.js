// Animação focada no layout e no surgimento dos elementos da Home e Soluções
const elementosAnimar = document.querySelectorAll('.solucao-card, .titulo, section, .main-footer');

function animarScroll() {
    const alturaTela = window.innerHeight;
    
    elementosAnimar.forEach((elemento) => {
        const distanciaTopo = elemento.getBoundingClientRect().top;
        
        // Se o elemento entrou na tela, a gente revela ele com um efeito suave
        if (distanciaTopo < alturaTela - 90) {
            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0)";
            elemento.style.transition = "all 0.8s ease-out";
        }
    });
}

// deixa tudo invisível e um pouquinho deslocado para baixo
// para o efeito de "subir" funcionar na hora que a pessoa rolar a página
elementosAnimar.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
});

// conforme a rolagem da página e carrega o efeito inicial
window.addEventListener('scroll', animarScroll);
window.addEventListener('load', animarScroll);


// Efeito de digitação automática no título
const textoSlogan = "Soluções sustentáveis para o futuro";
const tagTitulo = document.querySelector('h1'); 

let indexLetra = 0;

// Função que vai colocando letra por letra no título
function escruturarDigitacao() {
    if (tagTitulo && indexLetra < textoSlogan.length) {
        // Limpa o texto original antes de começar a escrever
        if(indexLetra === 0) tagTitulo.innerHTML = ""; 
        
        tagTitulo.innerHTML += textoSlogan.charAt(indexLetra);
        indexLetra++;
        
        // Velocidade da digitação
        setTimeout(escruturarDigitacao, 70);
    }
}

if (tagTitulo) {
    window.addEventListener('DOMContentLoaded', escruturarDigitacao);
}