function gerarLink() {
  if (entrada_numero.value == '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Você não digitou nada, digite um número!'
    })
    return
  } else
    window.open(
      'https://wa.me/55' + document.getElementById('entrada_numero').value
    )
}
