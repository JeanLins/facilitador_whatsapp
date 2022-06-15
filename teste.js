function gerarLink() {
  if (entrada_numero.value == '') {
    alert('Digite o número para continuar')
    return
  } else
    window.open(
      'https://wa.me/55' + document.getElementById('entrada_numero').value
    )
}