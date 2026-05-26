/*slider */
const trilho = document.querySelector(".banner-slides");

const slides = document.querySelectorAll(".slide");

/* guardar qual slide ta aparecendo atualmente */
let indiceAtual = 0;

/* função pra trocar os slides automaticamente */
function mudarSlide() {

    /* passa pro proximo slide */
    indiceAtual++;

    /* quando chegar no ultimo volta pro primeiro */
    if (indiceAtual >= slides.length) {

        indiceAtual = 0;

    }

    /* faz o trilho deslizar pro lado */
    const deslocamento = indiceAtual * -100;

    trilho.style.transform = `translateX(${deslocamento}%)`;

}

/* pausar o slider quando o mouse passar em cima */

/* tempo automatico do slider */
let autoplay = setInterval(mudarSlide, 5000);

if (trilho) {

    /* quando o mouse entra no banner ele pausa */
    trilho.addEventListener("mouseenter", () => {

        clearInterval(autoplay);

    });

    /* quando o mouse sai ele volta a funcionar */
    trilho.addEventListener("mouseleave", () => {

        autoplay = setInterval(mudarSlide, 5000);

    });

}

/* quando o site carregar aparece suavemente */
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

    mostrarElementos();

});

/* animação ao rolar a pagina */

/* pegar todos elementos que vao animar */
const elementos = document.querySelectorAll(".animar");

/* função pra mostrar os elementos ao scrollar */
function mostrarElementos() {

    const alturaTela = window.innerHeight;

    elementos.forEach((elemento) => {

        const distanciaTopo = elemento.getBoundingClientRect().top;

        /* quando o elemento aparecer na tela ativa a animação */
        if (distanciaTopo < alturaTela - 100) {

            elemento.classList.add("ativo");

        }

    });

}

/* ativar animação quando scrollar */
window.addEventListener("scroll", mostrarElementos);

/* um contador */

/* pegar o contador */
const contador = document.querySelector(".contador");

/* numero inicial */
let numero = 0;

/* animação do contador */
function animarContador() {

    const intervalo = setInterval(() => {

        /* aumentar de 5 em 5 */
        numero += 5;

        if (contador) {

            contador.textContent = numero;

        }

        /* quando chegar em 500 para */
        if (numero >= 500) {

            clearInterval(intervalo);

        }

    }, 20);

}

/* iniciar contador */
if (contador) {

    animarContador();

}

/* pro fundo mexer conforme a vel que for rolando a tela */

/* efeito parallax nas imagens */
window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    const banner = document.querySelector(".slide img");

    if (banner) {

        banner.style.transform =
        `translateY(${scroll * 0.1}px)`;

    }

});

/* um cursor */

/* pegar o cursor personalizado */
const cursor = document.querySelector(".cursor");

if (cursor) {

    /* fazer o cursor seguir o mouse */
    document.addEventListener("mousemove", (e) => {

        cursor.style.left = e.pageX + "px";

        cursor.style.top = e.pageY + "px";

    });

}

/* uma digitaçao automatica na tela */

/* frase que vai aparecer digitando */
const texto = "Soluções sustentáveis para o futuro";

/* pegar titulo */
const titulo = document.querySelector(".digitando");

/* controlar as letras */
let i = 0;

/* função de digitação */
function escrever() {

    if (titulo && i < texto.length) {

        /* adicionar letra por letra */
        titulo.innerHTML += texto.charAt(i);

        i++;

        /* velocidade da digitação */
        setTimeout(escrever, 80);

    }

}

/* iniciar digitação */
escrever();

/* um modo escuro, para que o usuario tenha uma escolha do que ele quer usar */

/* pegar botão do dark mode */
const botao = document.querySelector(".dark-mode");

if (botao) {

    /* trocar o tema ao clicar */
    botao.addEventListener("click", () => {

        document.body.classList.toggle("dark");

    });

}

/* efeito 3d nos cards dos produtos */

/* pegar todos os cards */
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    /* efeito 3d seguindo o mouse */
    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 20;

        const rotateX = -(y - rect.height / 2) / 20;

        card.style.transform =
        `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(-10px)`;

    });

    /* quando tirar o mouse o card volta ao normal */
    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)";

    });

});

/* efeito ao clicar nos botoes dos produtos */

/* pegar todos os botões */
const botoesProdutos = document.querySelectorAll(".card button");

botoesProdutos.forEach((botaoProduto) => {

    /* mudar o texto quando clicar */
    botaoProduto.addEventListener("click", () => {

        botaoProduto.innerHTML = "Adicionado!";

        botaoProduto.style.background = "#ffffff";

        /* depois de 2 segundos volta ao normal */
        setTimeout(() => {

            botaoProduto.innerHTML = "Adicionar";

            botaoProduto.style.background = "#27e9b5";

        }, 2000);

    });

});