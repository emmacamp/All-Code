window.addEventListener('load', () => {
    let horaHTML = document.getElementById('horas') 
    let minutoHTML = document.getElementById('minutos')
    let segundoHTML = document.getElementById('segundos')

    const mostrarHora = () => {
        let horas = new Date().getHours()
        let minutos = new Date().getMinutes()
        let segundos = new Date().getSeconds()

        horaHTML.textContent = String(horas).padStart(2, '0')
        minutoHTML.textContent = String(minutos).padStart(2, '0')
        segundoHTML.textContent = String(segundos).padStart(2, '0')
        

        setTimeout(mostrarHora, 1000)
    }  

    mostrarHora()

});