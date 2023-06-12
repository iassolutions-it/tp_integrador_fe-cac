// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
    const borrar = document.getElementById('borrar')
    const resumen = document.getElementById('resumen')
    const nombre = document.getElementById('nombre')
    const apellido = document.getElementById('apellido')
    const email = document.getElementById('email')
    const cantidad = document.getElementById('cantidad')
    const categoria = document.getElementById('categoria')
    const total = document.getElementById('total')
    const precio = 200
    //const validForm = document.querySelector("form")
    
    const data = {}
    const disc = {
        estudiante: .2,
        trainee: .5,
        junior: .85,
    }
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          //event.preventDefault()
          //event.stopPropagation()
        }
        event.preventDefault()
        event.stopPropagation()

        form.classList.add('was-validated')
      }, false)  

      borrar.addEventListener('click', resetData)
      
      getData()
      
      
    })


function getData() {
    data.nombre = nombre.value
    data.apellido = apellido.value
    data.email = email.value
    data.cantidad = cantidad.value
    data.categoria = categoria.value
    // Validaciones en cliente hechas...
    data.total = parseInt(data.cantidad) * precio * disc[data.categoria]
    if (data.total > 0){
      total.value = `Total a Pagar: $${data.total.toFixed(2)}` 
    } else data.total = 0

}
function resetData() {
    nombre.value = ""
    nombre.placeholder = "Nombre"
    apellido.value = ""
    apellido.placeholder = "Apellido"
    email.value = ""
    email.placeholder = "Correo"
    cantidad.value = ""
    cantidad.placeholder = "Cantidad"
    //cantidad.innerText = "Estudiante"
    categoria.value = "estudiante"
    total.value = `Total a Pagar: $`
    document.querySelector("form").classList.remove('was-validated')
}


resumen.addEventListener('click', getData)
borrar.addEventListener('click', resetData)


})()





