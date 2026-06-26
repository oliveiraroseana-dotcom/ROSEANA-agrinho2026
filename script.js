// 1. ANIMAÇÃO DE REVELAR/FECHAR O CARD (CLIQUE)
function toggleCard(card) {
    // Alterna a classe que o CSS usa para expandir o card
    card.classList.toggle('ativo');
    
    const botao = card.querySelector('.btn-revelar');
    if (card.classList.contains('ativo')) {
        botao.textContent = 'Fechar';
        // Pequeno pulo de feedback visual no botão (Efeito Sentido Aranha)
        botao.style.transform = 'scale(1.1)';
        setTimeout(() => botao.style.transform = 'scale(1)', 150);
    } else {
        botao.textContent = 'Ver';
    }
}

// 2. EFEITO DE DIGITAÇÃO NA INTRODUÇÃO
function efeitoDigitacao() {
    const elementoIntro = document.querySelector('.introducao p');
    if (!elementoIntro) return;

    const textoOriginal = elementoIntro.innerHTML;
    elementoIntro.innerHTML = ''; // Esvazia para começar a digitar
    
    let i = 0;
    const velocidade = 15; // Tempo em milissegundos entre cada letra

    function digitar() {
        if (i < textoOriginal.length) {
            // Ignora as tags HTML (como <br>) para não quebrar a estrutura durante a digitação
            if (textoOriginal.charAt(i) === '<') {
                i = textoOriginal.indexOf('>', i) + 1;
            } else {
                i++;
            }
            elementoIntro.innerHTML = textoOriginal.substring(0, i);
            setTimeout(digitar, velocidad);
        }
    }
    digitar();
}

// 3. ANIMAÇÃO DOS CARDS AO ROLAR A PÁGINA (SCROLL REVEAL)
function animarScroll() {
    const cards = document.querySelectorAll('.card');
    if (cards.length === 0) return;
    
    // Cria um observador para monitorar a visibilidade dos cards na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Aplica um delay sequencial para o efeito cascata (um por um)
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 150); 
                
                observer.unobserve(entry.target); // Para de assistir após o card aparecer
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do card estiver na tela
    });

    // Configura o estado inicial (escondido) de cada card antes da animação
    cards.forEach((card) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px) scale(0.95)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(card);
    });
}

// EXECUTA AS FUNÇÕES ASSIM QUE A P
