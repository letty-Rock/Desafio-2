function validarProduto(idproduto, idcodigo, idquantidade) {
  let produto = document.getElementById(idproduto).value
  let codigo = document.getElementById(idcodigo).value
  let quantidade = document.getElementById(idquantidade).value
  if (produto == '')
    alert(' Nome do produto não pode estar em branco. Favor preenchê-lo!')
  else if (codigo == '')
    alert(' Código do produto não pode estar em branco. Favor preenchê-lo!')
  else cadastrarProduto(nome, codigo, parseInt(quantidade))
}
function cadastrarProduto(produto, codigo, quantidade) {
  let novoProduto = { nome: produto, codigo: codigo, quantidade: quantidade }

  if (typeof Storage !== 'undefined') {
    let produtos = localStorage.getItem('produtos')
    if (produtos == null) produtos = []
    else produtos = JSON.parse(produtos)
    produtos.push(novoProduto)
    localStorage.setItem('produtos', JSON.stringify(produtos))
    alert(
      'Foram cadastradas com sucesso' +
        quantidade +
        'unidades do produto' +
        produto +
        '!'
    )
    atualizarTotalEstoque('totalEstoque')
    location.reload()
  } else
    alert(
      'A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação'
    )
}

function atualizarTotalEstoque(idCampo) {
  localStorage.setItem(
    'totalEstoque',
    ++document.getElementById(idCampo).innerHTML
  )
}
function carregarTotalEstoque(idCampo) {
  if (typeof Storage !== 'undefined') {
    let totalEstoque = localStorage.getItem('totalEstoque')
    if (totalEstoque == null) totalEstoque = 0
    document.getElementById(idCampo).innerHTML = totalEstoque
  }
  alert(
    'A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação'
  )
}

function listarEstoque() {}
