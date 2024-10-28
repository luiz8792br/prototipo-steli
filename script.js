function abrirMenu(){
    var minhaDiv = document.getElementById("menu_lateral");
    minhaDiv.classList.add("aparecer");
}

function fecharMenu(){
    var minhaDiv = document.getElementById("menu_lateral");
    minhaDiv.classList.remove("aparecer");
}

// Função para verificar parâmetros da URL
function verificarCadastro() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('sucesso') && urlParams.get('sucesso') === 'sim') {
        alert('Enviado com sucesso!');
    }
}

// Executa a função ao carregar a página
window.onload = verificarCadastro;

   // Função para verificar e exibir mensagem de sucesso, e limpar a URL
   function verificarCadastro() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('sucesso') && urlParams.get('sucesso') === 'sim') {
        alert('Cadastrado com sucesso!');
        // Limpa o parâmetro 'sucesso=sim' da URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
}

// Executa a função ao carregar a página
window.onload = verificarCadastro;