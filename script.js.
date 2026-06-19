function openTab(event, tabName) {
    // 1. Esconder todo o conteúdo das abas
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-content");
    }

    // 2. Remover a classe 'active' de todos os botões das abas
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // 3. Mostrar a aba atual selecionada e adicionar a classe 'active' ao botão clicado
    document.getElementById(tabName).classList.add("active-content");
    event.currentTarget.classList.add("active");
}
