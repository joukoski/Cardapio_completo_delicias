/* ==========================================================
   CONFIGURAÇÃO — é só editar aqui
   ========================================================== */

// Número de WhatsApp que recebe o pedido (só dígitos: 55 + DDD + número)
const NUMERO_WHATSAPP = "5541991535249";

// Cardápio completo. O campo "imagem" é opcional: coloque o caminho
// da foto (ex: "js/imagem/brownie-ninho.jpg") dentro da pasta imagem/ do
// repositório. Se não existir, mostra o emoji no lugar automaticamente.
const CARDAPIO = [
  // ---------- Copos da Felicidade ----------
  { id: "copo-ninho-morango-250", nome: "Copo da Felicidade de Ninho com Morango", descricao: "250ml", preco: 20.0, categoria: "Copos da Felicidade", emoji: "🍓", imagem: "js/imagem/copo-ninho-morango.jpg" },
  { id: "copo-ninho-morango-300", nome: "Copo da Felicidade de Ninho com Morango", descricao: "300ml", preco: 25.0, categoria: "Copos da Felicidade", emoji: "🍓", imagem: "js/imagem/copo-ninho-morango.jpg" },
  { id: "copo-ninho-uva-250", nome: "Copo da Felicidade de Ninho com Uva", descricao: "250ml", preco: 20.0, categoria: "Copos da Felicidade", emoji: "🍇", imagem: "js/imagem/copo-ninho-uva.jpg" },
  { id: "copo-ninho-uva-300", nome: "Copo da Felicidade de Ninho com Uva", descricao: "300ml", preco: 25.0, categoria: "Copos da Felicidade", emoji: "🍇", imagem: "js/imagem/copo-ninho-uva.jpg" },
  { id: "copo-oreo-250", nome: "Copo da Felicidade de Oreo", descricao: "250ml", preco: 20.0, categoria: "Copos da Felicidade", emoji: "🍪", imagem: "js/imagem/copo-oreo.jpg" },
  { id: "copo-oreo-300", nome: "Copo da Felicidade de Oreo", descricao: "300ml", preco: 25.0, categoria: "Copos da Felicidade", emoji: "🍪", imagem: "js/imagem/copo-oreo.jpg" },
  { id: "copo-laka-oreo-250", nome: "Copo da Felicidade de Laka Oreo", descricao: "250ml", preco: 20.0, categoria: "Copos da Felicidade", emoji: "🍫", imagem: "js/imagem/copo-laka-oreo.jpg" },
  { id: "copo-laka-oreo-300", nome: "Copo da Felicidade de Laka Oreo", descricao: "300ml", preco: 25.0, categoria: "Copos da Felicidade", emoji: "🍫", imagem: "js/imagem/copo-laka-oreo.jpg" },
  { id: "copo-maracuja-250", nome: "Copo da Felicidade de Maracujá", descricao: "250ml", preco: 20.0, categoria: "Copos da Felicidade", emoji: "🟡", imagem: "js/imagem/copo-maracuja.jpg" },
  { id: "copo-maracuja-300", nome: "Copo da Felicidade de Maracujá", descricao: "300ml", preco: 25.0, categoria: "Copos da Felicidade", emoji: "🟡", imagem: "js/imagem/copo-maracuja.jpg" },
  { id: "copo-ovomaltine-250", nome: "Copo da Felicidade de Ovomaltine", descricao: "250ml", preco: 20.0, categoria: "Copos da Felicidade", emoji: "🍯", imagem: "js/imagem/copo-ovomaltine.jpg" },
  { id: "copo-ovomaltine-300", nome: "Copo da Felicidade de Ovomaltine", descricao: "300ml", preco: 25.0, categoria: "Copos da Felicidade", emoji: "🍯", imagem: "js/imagem/copo-ovomaltine.jpg" },

  // ---------- Brownies ----------
  { id: "brownie-ninho", nome: "Brownie de Ninho", descricao: "Massa úmida com cobertura de ninho", preco: 18.0, categoria: "Brownies", emoji: "🍫", imagem: "js/imagem/brownie-ninho.jpg" },
  { id: "brownie-ninho-morango", nome: "Brownie de Ninho com Morango", descricao: "Massa úmida, ninho e morango", preco: 20.0, categoria: "Brownies", emoji: "🍓", imagem: "js/imagem/brownie-ninho-morango.jpg" },
  { id: "brownie-laka-oreo", nome: "Brownie de Laka Oreo", descricao: "Cobertura de chocolate Laka e Oreo", preco: 20.0, categoria: "Brownies", emoji: "🍪", imagem: "js/imagem/brownie-laka-oreo.jpg" },
  { id: "brownie-brigadeiro", nome: "Brownie de Brigadeiro", descricao: "Cobertura de brigadeiro cremoso", preco: 20.0, categoria: "Brownies", emoji: "🍫", imagem: "js/imagem/brownie-brigadeiro.jpg" },
  { id: "brownie-brigadeiro-morango", nome: "Brownie de Brigadeiro com Morango", descricao: "Brigadeiro cremoso e morango", preco: 20.0, categoria: "Brownies", emoji: "🍓", imagem: "js/imagem/brownie-brigadeiro-morango.jpg" },
  { id: "brownie-maracuja", nome: "Brownie de Maracujá", descricao: "Cobertura cremosa de maracujá", preco: 20.0, categoria: "Brownies", emoji: "🟡", imagem: "js/imagem/brownie-maracuja.jpg" },

  // ---------- Tortas ----------
  { id: "torta-frango", nome: "Torta de Frango", descricao: "Salgada", preco: 40.0, categoria: "Tortas", emoji: "🥧", imagem: "js/imagem/torta-frango.jpg" },
  { id: "torta-queijo-presunto", nome: "Torta de Queijo e Presunto", descricao: "Salgada", preco: 40.0, categoria: "Tortas", emoji: "🥧", imagem: "js/imagem/torta-queijo-presunto.jpg" },

  // ---------- Bolos ----------
  { id: "bolo-cenoura-chocolate", nome: "Bolo de Cenoura com Cobertura de Chocolate", descricao: "Bolo inteiro, feito na hora", preco: 60.0, categoria: "Bolos", emoji: "🎂", imagem: "js/imagem/bolo-cenoura-chocolate.jpg" },
  { id: "bolo-chocolate-chocolate", nome: "Bolo de Chocolate com Cobertura de Chocolate", descricao: "Bolo inteiro, feito na hora", preco: 60.0, categoria: "Bolos", emoji: "🎂", imagem: "js/imagem/bolo-chocolate-chocolate.jpg" },
  { id: "bolo-chocolate-ninho", nome: "Bolo de Chocolate com Cobertura de Ninho", descricao: "Bolo inteiro, feito na hora", preco: 60.0, categoria: "Bolos", emoji: "🎂", imagem: "js/imagem/bolo-chocolate-ninho.jpg" },
  { id: "bolo-fuba-goiabada", nome: "Bolo de Fubá com Cobertura de Goiabada", descricao: "Bolo inteiro, feito na hora", preco: 50.0, categoria: "Bolos", emoji: "🍈", imagem: "js/imagem/bolo-fuba-goiabada.jpg" },
  { id: "bolo-fuba", nome: "Bolo de Fubá com Erva Doce", descricao: "Bolo inteiro, feito na hora", preco: 40.0, categoria: "Bolos", emoji: "🌽", imagem: "js/imagem/bolo-fuba.jpg" },
  { id: "bolo-formigueiro", nome: "Bolo Formigueiro", descricao: "Bolo inteiro, feito na hora", preco: 40.0, categoria: "Bolos", emoji: "🐜", imagem: "js/imagem/bolo-formigueiro.jpg" },

  // ---------- Pudim ----------
  { id: "pudim-tradicional", nome: "Pudim de Leite", descricao: "Tradicional, caseiro", preco: 60.0, categoria: "Pudim", emoji: "🍮", imagem: "js/imagem/pudim.jpg" },

  // ---------- Pães ----------
  { id: "pao-calabresa", nome: "Pão Caseiro com Recheio de Calabresa", descricao: "Assado na hora", preco: 35.0, categoria: "Pães", emoji: "🥖", imagem: "js/imagem/pao-calabresa.jpg" },
  { id: "pao-queijo-presunto", nome: "Pão Caseiro com Recheio de Queijo e Presunto", descricao: "Assado na hora", preco: 36.0, categoria: "Pães", emoji: "🥖", imagem: "js/imagem/pao-queijo-presunto.jpg" },
  { id: "pao-frango-catupiry", nome: "Pão Caseiro com Recheio de Frango com Catupiry", descricao: "Assado na hora", preco: 38.0, categoria: "Pães", emoji: "🥖", imagem: "js/imagem/pao-frango-catupiry.jpg" },
  { id: "pao-brigadeiro-ninho", nome: "Pão com Recheio de Brigadeiro de Ninho", descricao: "Assado na hora", preco: 30.0, categoria: "Pães", emoji: "🥖", imagem: "js/imagem/pao-brigadeiro-ninho.jpg" },

  // ---------- Especiais ----------
  { id: "pave-tradicional", nome: "Pavê Tradicional", descricao: "Receita clássica da casa", preco: 80.0, categoria: "Especiais", emoji: "🍰", imagem: "js/imagem/pave-tradicional.jpg" },
  { id: "pave-oreo", nome: "Pavê de Oreo", descricao: "Camadas de Oreo e creme", preco: 90.0, categoria: "Especiais", emoji: "🍪", imagem: "js/imagem/pave-oreo.jpg" },
  { id: "bombom-travessa-morango", nome: "Bombom de Travessa de Morango", descricao: "Travessa para compartilhar", preco: 120.0, categoria: "Especiais", emoji: "🍓", imagem: "js/imagem/bombom-travessa-morango.jpg" },
  { id: "bombom-travessa-uva", nome: "Bombom de Travessa de Uva", descricao: "Travessa para compartilhar", preco: 90.0, categoria: "Especiais", emoji: "🍇", imagem: "js/imagem/bombom-travessa-uva.jpg" },
  /*{ id: "feijao-tropeiro", nome: "Feijão Tropeiro", descricao: "Salgado, porção", preco: 50.0, categoria: "Especiais", emoji: "🍲", imagem: "js/imagem/feijao-tropeiro.jpg" }*/
];

/* ==========================================================
   ESTADO DO CARRINHO (persistido no localStorage)
   ========================================================== */

const CHAVE_ARMAZENAMENTO = "fabi_carrinho";

function carregarCarrinho() {
  try {
    const dados = localStorage.getItem(CHAVE_ARMAZENAMENTO);
    return dados ? JSON.parse(dados) : {};
  } catch {
    return {};
  }
}

function salvarCarrinho() {
  localStorage.setItem(CHAVE_ARMAZENAMENTO, JSON.stringify(carrinho));
}

let carrinho = carregarCarrinho();

/* ==========================================================
   MONTAGEM DAS PÁGINAS DO LIVRO
   Uma página por categoria (na ordem em que aparecem pela
   primeira vez no array CARDAPIO).
   ========================================================== */

const CATEGORIAS = [...new Set(CARDAPIO.map(item => item.categoria))];
const PAGINAS = [...CATEGORIAS];
let paginaAtual = 0;

/* ==========================================================
   ELEMENTOS DO DOM
   ========================================================== */

const sumarioEl = document.getElementById("sumario");
const paginaLivroEl = document.getElementById("pagina-livro");
const indicadorPaginaEl = document.getElementById("indicador-pagina");
const botaoAnteriorEl = document.getElementById("pagina-anterior");
const botaoProximaEl = document.getElementById("pagina-proxima");

const painelCarrinho = document.getElementById("painel-carrinho");
const fundoCarrinho = document.getElementById("fundo-carrinho");
const painelItens = document.getElementById("painel-itens");
const valorTotalEl = document.getElementById("valor-total");
const contadorCarrinhoEl = document.getElementById("contador-carrinho");
const botaoCarrinho = document.getElementById("botao-carrinho");
const botaoFinalizar = document.getElementById("botao-finalizar");

/* ==========================================================
   FORMATAÇÃO
   ========================================================== */

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/* ==========================================================
   RENDERIZAÇÃO DO SUMÁRIO (atalhos de categoria)
   ========================================================== */

function renderizarSumario() {
  sumarioEl.innerHTML = CATEGORIAS.map((cat, i) => `
    <button class="sumario-item ${PAGINAS[paginaAtual] === cat ? "ativo" : ""}" data-pagina="${i}">
      ${cat}
    </button>
  `).join("");

  sumarioEl.querySelectorAll(".sumario-item").forEach(botao => {
    botao.addEventListener("click", () => irParaPagina(Number(botao.dataset.pagina)));
  });
}

/* ==========================================================
   RENDERIZAÇÃO DE UMA PÁGINA
   ========================================================== */

function html_conteudoPagina(pagina) {
  const itens = CARDAPIO.filter(item => item.categoria === pagina);

  return `
    <h2 class="pagina-titulo">${pagina}</h2>
    <p class="pagina-subtitulo">${itens.length} ${itens.length === 1 ? "item" : "itens"}</p>
    <div class="lista-itens">
      ${itens.map(item => `
        <div class="linha-produto">
          <div class="miniatura" id="miniatura-${item.id}">${item.emoji}</div>
          <div class="produto-info">
            <h3>${item.nome}</h3>
            <p>${item.descricao}</p>
          </div>
          <div class="produto-acao">
            <span class="produto-preco">${formatarPreco(item.preco)}</span>
            <button class="botao-adicionar" data-id="${item.id}">Adicionar</button>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function tentarCarregarImagens(pagina) {
  const itens = CARDAPIO.filter(item => item.categoria === pagina);
  itens.forEach(item => {
    if (!item.imagem) return;
    const img = new Image();
    img.onload = () => {
      const miniatura = document.getElementById(`miniatura-${item.id}`);
      if (miniatura) {
        miniatura.innerHTML = `<img src="${item.imagem}" alt="${item.nome}">`;
        miniatura.classList.add("clicavel");
        miniatura.addEventListener("click", () => abrirModalImagem(item.imagem, item.nome));
      }
    };
    // se não existir a imagem, o emoji continua aparecendo (sem erro no console)
    img.src = item.imagem;
  });
}

/* ==========================================================
   MODAL DE FOTO AMPLIADA
   ========================================================== */

const modalImagemEl = document.getElementById("modal-imagem");
const modalImagemImgEl = document.getElementById("modal-imagem-img");

function abrirModalImagem(src, nome) {
  modalImagemImgEl.src = src;
  modalImagemImgEl.alt = nome;
  modalImagemEl.classList.add("aberto");
}

function fecharModalImagem() {
  modalImagemEl.classList.remove("aberto");
}

document.getElementById("fechar-modal-imagem").addEventListener("click", fecharModalImagem);
modalImagemEl.addEventListener("click", (e) => {
  if (e.target === modalImagemEl) fecharModalImagem();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") fecharModalImagem();
});

function renderizarPagina() {
  const pagina = PAGINAS[paginaAtual];
  paginaLivroEl.innerHTML = html_conteudoPagina(pagina);
  tentarCarregarImagens(pagina);

  paginaLivroEl.querySelectorAll(".botao-adicionar").forEach(botao => {
    botao.addEventListener("click", () => adicionarAoCarrinho(botao.dataset.id));
  });

  botaoAnteriorEl.disabled = paginaAtual === 0;
  botaoProximaEl.disabled = paginaAtual === PAGINAS.length - 1;

  indicadorPaginaEl.textContent = `Página ${paginaAtual + 1} de ${PAGINAS.length} · ${pagina}`;

  renderizarSumario();
}

function irParaPagina(indice, direcao) {
  if (indice < 0 || indice >= PAGINAS.length || indice === paginaAtual) return;

  const classeSaida = direcao === "anterior" ? "saindo-ant" : "saindo-prox";
  paginaLivroEl.classList.add(classeSaida);

  setTimeout(() => {
    paginaAtual = indice;
    renderizarPagina();
    paginaLivroEl.classList.remove(classeSaida);
  }, 180);
}

botaoAnteriorEl.addEventListener("click", () => irParaPagina(paginaAtual - 1, "anterior"));
botaoProximaEl.addEventListener("click", () => irParaPagina(paginaAtual + 1, "proxima"));

/* ==========================================================
   LÓGICA DO CARRINHO
   ========================================================== */

function adicionarAoCarrinho(id) {
  carrinho[id] = (carrinho[id] || 0) + 1;
  salvarCarrinho();
  atualizarInterfaceCarrinho();
}

function alterarQuantidade(id, delta) {
  if (!carrinho[id]) return;
  carrinho[id] += delta;
  if (carrinho[id] <= 0) delete carrinho[id];
  salvarCarrinho();
  atualizarInterfaceCarrinho();
}

function removerItem(id) {
  delete carrinho[id];
  salvarCarrinho();
  atualizarInterfaceCarrinho();
}

function calcularTotal() {
  return Object.entries(carrinho).reduce((total, [id, qtd]) => {
    const item = CARDAPIO.find(p => p.id === id);
    return item ? total + item.preco * qtd : total;
  }, 0);
}

function contarItens() {
  return Object.values(carrinho).reduce((soma, qtd) => soma + qtd, 0);
}

function atualizarInterfaceCarrinho() {
  const idsNoCarrinho = Object.keys(carrinho);
  contadorCarrinhoEl.textContent = contarItens();

  if (idsNoCarrinho.length === 0) {
    painelItens.innerHTML = `<p class="carrinho-vazio">Seu carrinho está vazio.<br>Adicione algo delicioso! 🍰</p>`;
    botaoFinalizar.disabled = true;
  } else {
    painelItens.innerHTML = idsNoCarrinho.map(id => {
      const item = CARDAPIO.find(p => p.id === id);
      const qtd = carrinho[id];
      return `
        <div class="linha-item">
          <div class="info">
            <h4>${item.nome}</h4>
            <span>${item.descricao} · ${formatarPreco(item.preco)} cada</span>
          </div>
          <div class="controle-quantidade">
            <button data-acao="menos" data-id="${id}">−</button>
            <span>${qtd}</span>
            <button data-acao="mais" data-id="${id}">+</button>
          </div>
          <button class="remover-item" data-acao="remover" data-id="${id}" aria-label="Remover">🗑</button>
        </div>
      `;
    }).join("");

    painelItens.querySelectorAll("[data-acao='mais']").forEach(b =>
      b.addEventListener("click", () => alterarQuantidade(b.dataset.id, 1)));
    painelItens.querySelectorAll("[data-acao='menos']").forEach(b =>
      b.addEventListener("click", () => alterarQuantidade(b.dataset.id, -1)));
    painelItens.querySelectorAll("[data-acao='remover']").forEach(b =>
      b.addEventListener("click", () => removerItem(b.dataset.id)));

    botaoFinalizar.disabled = false;
  }

  valorTotalEl.textContent = formatarPreco(calcularTotal());
}

/* ==========================================================
   ABRIR / FECHAR PAINEL
   ========================================================== */

function abrirCarrinho() {
  painelCarrinho.classList.add("aberto");
  fundoCarrinho.classList.add("visivel");
  painelCarrinho.setAttribute("aria-hidden", "false");
}

function fecharCarrinho() {
  painelCarrinho.classList.remove("aberto");
  fundoCarrinho.classList.remove("visivel");
  painelCarrinho.setAttribute("aria-hidden", "true");
}

botaoCarrinho.addEventListener("click", abrirCarrinho);
document.getElementById("fechar-painel").addEventListener("click", fecharCarrinho);
fundoCarrinho.addEventListener("click", fecharCarrinho);

/* ==========================================================
   FINALIZAR PEDIDO -> WHATSAPP
   ========================================================== */

function montarMensagemPedido() {
  const linhas = ["Olá! Gostaria de fazer o seguinte pedido:", ""];

  Object.entries(carrinho).forEach(([id, qtd]) => {
    const item = CARDAPIO.find(p => p.id === id);
    if (item) {
      linhas.push(`• ${qtd}x ${item.nome} (${item.descricao}) — ${formatarPreco(item.preco * qtd)}`);
    }
  });

  linhas.push("");
  linhas.push(`Total: ${formatarPreco(calcularTotal())}`);

  const observacoes = document.getElementById("observacoes").value.trim();
  if (observacoes) {
    linhas.push("");
    linhas.push(`Observações: ${observacoes}`);
  }

  return linhas.join("\n");
}

botaoFinalizar.addEventListener("click", () => {
  if (contarItens() === 0) return;

  const mensagem = montarMensagemPedido();
  const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");

  // Descomente as linhas abaixo se quiser limpar o carrinho após enviar o pedido
  // carrinho = {};
  // salvarCarrinho();
  // atualizarInterfaceCarrinho();
});

/* ==========================================================
   INICIALIZAÇÃO
   ========================================================== */

renderizarPagina();
atualizarInterfaceCarrinho();