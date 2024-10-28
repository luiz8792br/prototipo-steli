const produtos = [
    {
        nome: "<p style='font-weight:900; color:#000;'>Camisa <span style='color:#007A33;'>Boston Celtics</span> 24-25</p>",
        categoria: "basquete",
        preco: "<span style='font-weight:900;'>R$ 39.99</span>",
        imagem: "../imagens/boston-celtics.jpg"
    },
    {
        nome: "<p style='font-weight:900; color:#000;'>Camisa <span style='color:#00538C;'>Dallas Mavericks</span> 24-25</p>",
        categoria: "basquete",
        preco: "<span style='font-weight:900;'>R$ 39.99</span>",
        imagem: "../imagens/dallas1.webp" // Caminho relativo mais seguro
    },
    {     
        nome: "<p style='font-weight:900; color:#000;'>Camisa <span style='color:#FDB927;'>L.A Lakers</span> 23-24</p>",
        categoria: "basquete",
        preco: "<span style='font-weight:900;'>R$ 39.99</span><br>",
        imagem: "../imagens/lakers-amarelo.jpg"
    },
    {
        nome: "<p style='font-weight:900; color:#000;'>Camisa Michael Jordan <br> <span style='color:#CE1141;'>Chicago Bulls</span> 91-92</p>",
        categoria: "basquete",
        preco: "<span style='font-weight:900;'>R$ 39.99</span>",
        imagem: "../imagens/bulls-jordan.jpg"
    },
    {
        nome: "<p style='font-weight:900; color:#000;'>Camisa <span style='color:#860038;'>Cavaliers</span> 23-24</p>",
        categoria: "basquete",
        preco: "<span style='font-weight:900;'>R$ 39.99</span>",
        imagem: "../imagens/cavs.webp"
    },
    {
        nome: "<p style='font-weight:900; color:#000;'>Camisa <span style='color:#1D428A;'>Warriors</span> 24-25</p>",
        categoria: "basquete",
        preco: "<span style='font-weight:900;'>R$ 39.99</span>",
        imagem: "../imagens/warriors.jpg"
    },
    {
        nome: "<p style='font-weight:900; color:#000;'>Camisa <span style='color:#98002E;'>Miami Heat</span> Edition</p>",
        categoria: "basquete",
        preco: "<span style='font-weight:900;'>R$ 39.99</span>",
        imagem: "../imagens/heat1.jpg"
    },
    {
        nome: "<p style='font-weight:900; color:#000;'>Camisa <span style='color:#00471B;'>Milwaukee Bucks</span> 23-24</p>",
        categoria: "basquete",
        preco: "<span style='font-weight:900;'>R$ 39.99</span>",
        imagem: "../imagens/bucks.jfif"
    },
    { 
        nome: "<p style='font-weight:900; color:#1c1a1f;'>Camisa <span style='color:#000000;'>Brooklyn Nets</span> 24-25</p>",
        categoria: "basquete",
        preco: "<span style='font-weight:900;'>R$ 39.99</span>",
        imagem: "../imagens/brookylin.jpg"
    },
    {
        nome: "<p style='font-weight:900; color:#000;'>Camisa <span style='color:#C8102E;'>Atlanta Hawks</span> Young 22-23</p>",
        categoria: "basquete",
        preco: "<span style='font-weight:900;'>R$ 39.99</span>",
        imagem: "../imagens/atlanta.webp"
    },
    {
        nome: "<p style='font-weight:900; color:#000;'>Camisa Manga Longa <br>Preta <span style='color:#000000da;'>Masculina</span></p>",
        categoria: "casuais",
        preco: "<span style='font-weight:900;'>R$ 54.99</span>",
        imagem: "../imagens/camisa-preta.webp"
    },
    {
        nome: "<p style='font-weight:900; color:#000;'>Camisa <span style='color:#007A33;'>Boston Celtics</span> 22-23</p>",
        categoria: "basquete",
        preco: "<span style='font-weight:900;'>R$ 39.99</span>",
        imagem: "../imagens/celtics-0.webp"
    },
    {
        nome: "<p style='font-weight:900; color:#000;'>Camisa <span style='color:#FDB927;'>Lakers</span> 22-23</p>",
        categoria: "basquete",
        preco: "<span style='font-weight:900;'>R$ 39.99</span>",
        imagem: "../imagens/lakers-branco.jpg"
    },
    {
        nome: "<p style='font-weight:900; color:#000;'>Camisa <span style='color:#98002E;'>Miami Heat</span> Edition 2023</p>",
        categoria: "basquete",
        preco: "<span style='font-weight:900;'>R$ 39.99</span>",
        imagem: "../imagens/miami-2023.jpg"
    },
    {
        nome: "<p style='font-weight:900; color:#000;'>Camisa <span style='color:#1D428A;'>Golden State Warriors</span></p>",
        categoria: "basquete",
        preco: "<span style='font-weight:900;'>R$ 39.99</span>",
        imagem: "../imagens/warrios-azul.jpg"
    },
    {
        nome: "<p style='font-size: 1.2rem; color:#000;'>Camisa Manga Longa <br> Bege <span style='color: #000000da;'>Masculina</span></p>",
        categoria: "casuais",
        preco: "<span style='font-weight:900;'>R$ 54.99</span>",
        imagem: "../imagens/manga-longa_bege.jfif"
    },
    {
        nome: "<p style='font-weight:900; color:#000;'>Camisa manga longa <br> <span style='color:#000000da;'>Masculina</span> Branca</p>",
        categoria: "casuais",
        preco: "<span style='font-weight:900;'>R$ 54.99</span>",
        imagem: "../imagens/manga-longa-branca.webp"
    },
    {
        nome: "<p style='font-weight:900; color:#000;'>Camisa Polo <span style='color:#000000da;'>Masculina</span> Preta</p>",
        categoria: "casuais",
        preco: "<span style='font-weight:900;'>R$ 49.99</span>",
        imagem: "../imagens/camisa-polo-masculina.webp"
    },
    {
        nome: " <p style='font-size: 1.2rem; color:#000;'>Short Jeans <span style='color: #CE1141;'>Feminino</span><br> Azul Escuro</p>",
        categoria: "casuais",
        preco: "<span style='font-weight:900;'>R$ 49.99</span>",
        imagem: "../imagens/short-jeans-feminino.jfif"
    },
    {
        nome: " <p style='font-size: 1.2rem; color:#000;'>Calça Pantalona <span style='color: #CE1141;'><br>Feminina</span> Preta</p>",
        categoria: "casuais",
        preco: "<span style='font-weight:900;'>R$ 54.99</span>",
        imagem: "../imagens/pantalona-feminina.jpg"
    },
    {
        nome: " <p style='font-size: 1.2rem; color:#000;'>Conjunto <span style='color: #CE1141;'>Feminino</span> Azul Bebê</p>",
        categoria: "casuais",
        preco: "<span style='font-weight:900;'>R$ 79.99</span>",
        imagem: "../imagens/conjunto-feminino.jfif"
    }
];

function exibirProdutos(filtro = 'tudo') {
    const container = document.getElementById('produtos-container');
    container.innerHTML = '';

    let filtrados;

    if (filtro === 'casuais') {
        filtrados = produtos.filter(produto => produto.categoria === 'casuais').slice(0, 14);
    } else if (filtro === 'basquete') {
        filtrados = produtos.filter(produto => produto.categoria === 'basquete').slice(0, 14);
    } else if (filtro === 'tudo') {
        filtrados = produtos; // Exibe todos os produtos sem limitação
    } else {
        filtrados = [];
    }

    filtrados.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');

        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${stripHtmlTags(produto.nome)}">
            <h3>${produto.nome}</h3>
            <p>${produto.preco}</p>
            <a href="https://wa.me/+5581987711659" target="_blank" style='background-color:#3498db9f; padding:0.4rem; border-radius:0.6rem; box-shadow:2px 2px 4px #000; color:#1c1a1d; font-weight:800; cursor:pointer; text-decoration:none;'>COMPRAR AGORA</a>
        `;

        container.appendChild(produtoDiv);
    });

    // Se não houver produtos a serem exibidos
    if (filtrados.length === 0) {
        container.innerHTML = '<p>Nenhum produto encontrado.</p>';
    }
}

function filterProducts(categoria) {
    exibirProdutos(categoria);
}

function stripHtmlTags(str) {
    return str.replace(/<[^>]*>?/gm, '');
}

// Exibe todos os produtos ao carregar a página
window.onload = () => {
    exibirProdutos('tudo');
};


// Função para exibir produtos
function exibirProdutos(filtro = 'tudo') {
    const container = document.getElementById('produtos-container');
    container.innerHTML = '';

    let filtrados;

    if (filtro === 'casuais') {
        filtrados = produtos.filter(produto => produto.categoria === 'casuais').slice(0, 14);
    } else if (filtro === 'basquete') {
        filtrados = produtos.filter(produto => produto.categoria === 'basquete').slice(0, 14);
    } else {
        filtrados = produtos; // Exibe todos os produtos sem limitação
    }

    filtrados.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');

        // Criação do elemento da imagem
        const img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = stripHtmlTags(produto.nome);
        img.style.width = '100%';  // Define a largura da imagem
        img.style.height = '300px'; // Define a altura da imagem
        img.style.objectFit = 'cover'; // Mantém a proporção

        produtoDiv.appendChild(img); // Adiciona a imagem ao produto
        produtoDiv.innerHTML += `
            <h3>${produto.nome}</h3>
            <p>${produto.preco}</p>
            <a href="https://wa.me/+5581987711659" target="_blank" style='background-color:#3498db9f; padding:0.4rem; border-radius:0.6rem; box-shadow:2px 2px 4px #000; color:#1c1a1d; font-weight:800; cursor:pointer; text-decoration:none;'>COMPRAR AGORA</a>
        `;

        container.appendChild(produtoDiv);
    });

    // Se não houver produtos a serem exibidos
    if (filtrados.length === 0) {
        container.innerHTML = '<p>Nenhum produto encontrado.</p>';
    }
}
