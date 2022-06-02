const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const loginTrigger = document.getElementById('loginBtn')
if (loginTrigger) {
  loginTrigger.addEventListener('click', () => {
    alert('Logado com sucesso!', 'success');
    document.getElementById('inputEmail').value = ""
    document.getElementById('inputSenha').value = ""
  })
}
const resetTrigger = document.getElementById('resetBtn')
if (resetTrigger) {
  resetTrigger.addEventListener('click', () => {
    alert('formulário resetado', 'danger');
    document.getElementById('inputEmail').value = ""
    document.getElementById('inputSenha').value = ""
  })
}