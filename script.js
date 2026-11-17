// Script vazio - HTML funciona sem JavaScript para este projeto
// Se necessário, adicione funcionalidades JavaScript aqui


async function lerFoto() {
    let foto = document.querySelector(".foto").files[0];

    if (!foto) return;

    // mostra a imagem de carregando antes da chamada
   document.querySelector('.resumo-comprovante').innerHTML = '<img src="assets/imagem/loading.gif" class="loading">';

    const pedido = `Analise este comprovante de compra para controle financeiro e retorne APENAS código HTML puro (sem usar blocos de código markdown \`\`\`html e sem textos extras antes ou depois), pronto para ser injetado em uma div. Use exatamente esta estrutura com emojis:

<div class="resumo-comprovante">
  <h3>🏪 [Nome do Estabelecimento]</h3>
  <p><strong>📅 Data:</strong> [Data da compra]</p>
  <p><strong>🏷️ Categoria:</strong> [Emoji da categoria + Nome da categoria]</p>
  <h4>🛒 Itens:</h4>
  <ul>
    <li>[Nome do item] — <strong>R$ [Valor]</strong></li>
  </ul>
  <p><strong>💰 Total: R$ [Valor total]</strong></p>
</div>`;

    // chamada assincrona
    const resposta = await puter.ai.chat(pedido, foto);

    // colocar na tela
    document.querySelector('.resumo-comprovante').innerHTML = resposta.message.content;
}



