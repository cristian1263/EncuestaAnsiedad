const scriptURL = '/*Aquí va la url*/'

const form = document.forms['']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response => alert("¡Gracias por participar!"))
    .then(() => {window.location.reload();})
    .catch(error => console.error('Error', error.message))    
})