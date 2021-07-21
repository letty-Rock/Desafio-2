const form = document.getElementById('form')

form.addEventListener('submit', e => {
  e.preventDefault()

  let produto = document.getElementById('produto').value
  let quantidade = document.getElementById('quantidade').value
  let codigo = document.getElementById('codigo').value
  let data = {
    produto,
    quantidade,
    codigo
  }
  let convertData = JSON.stringify(data)
  localStorage.setItem('lead', convertData)
}) /*
console.log(`Produto ${produto} cadastrado`)*/
