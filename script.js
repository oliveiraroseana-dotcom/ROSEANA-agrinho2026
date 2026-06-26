/* --- CONFIGURAÇÕES E VARIÁVEIS --- */
:root {
    --vermelho-aranha: #DE283B;
    --vermelho-escuro: #9B1C2A;
    --azul-aranha: #2A75D3;
    --azul-escuro: #132D64;
    --preto-fundo: #0B0E14;
    --preto-card: #161B26;
    --branco: #F5F7FA;
    --texto-mutado: #A0AEC0;
    --borda-glow: rgba(42, 117, 211, 0.3);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
}

body {
    background-color: var(--preto-fundo);
    color: var(--branco);
    overflow-x: hidden;
    /* Linhas cruzadas que lembram a textura do uniforme do herói */
    background-image: 
        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 20px 20px;
}

/* --- HEADER (Estilo Poster Cinematográfico) --- */
header {
    position: relative;
    background: linear-gradient(135deg, var(--vermelho-escuro) 0%, var(--vermelho-aranha) 50%, var(--azul-escuro) 100%);
    text-align: center;
    padding: 80px 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
    border-bottom: 5px solid var(--azul-aranha);
}

header::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle, transparent 20%, rgba(0,0,0,0.4) 100%);
    pointer-events: none;
}
