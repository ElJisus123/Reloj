const reloj = document.getElementById("clock")
const contenedorNumeros = document.getElementById("numeros")

function posicionarNumeros(numero, index) {
    let angulo = (Math.PI / 180) * (90 - (index * 30));
    let diametro = reloj.clientWidth * 0.8;

    let x = Math.cos(angulo) * (diametro / 2);
    let y = Math.sin(angulo) * (diametro / 2);

    numero.style.transform = `translate(calc(-50% - ${-x}px), calc(-50% - ${y}px))`
}

for (let index = 1; index <= 12; index++) {
    let numero = document.createElement("span")


    posicionarNumeros(numero, index)
    numero.textContent = index;
    //appendhcild crea nueva lista
    contenedorNumeros.appendChild(numero)
}

window.onresize = function () {
    contenedorNumeros.childNodes.forEach(element => {
        posicionarNumeros(element, parseInt(element.textContent));
    })
}

function modoOscuro() {
    document.body.classList.toggle("modoOscuro")
    //aqui se hace lo de mantener color cuando se actualiza la pagina
    localStorage.setItem("modoOscuro", document.body.classList.contains("modoOscuro") ? "1" : "0")
}

window.onload = function () {
    if (localStorage.getItem("modoOscuro") == "1") {
        document.body.classList.add("modoOscuro")
    }

}


const manecillaHoras = document.getElementById("horas");
const manecillaMinutos = document.getElementById("minutos")
const manecillaSegundos = document.getElementById("segundos")

function actualizarManecillas() {
    const date = new Date();
    const segundos = date.getSeconds()
    const minutos = date.getMinutes()
    const horas = date.getHours()

    const anguloSegundos = (segundos * 6) + 180;
    const anguloMinutos = (minutos * 6) + (segundos / 10) + 100;
    const anguloHoras = (horas * 30) + (minutos / 2) + 180;



    manecillaSegundos.style.transform = `rotate(${anguloSegundos}deg)`
    manecillaMinutos.style.transform = `rotate(${anguloMinutos}deg)`
    manecillaHoras.style.transform = `rotate(${anguloHoras}deg)`
}

actualizarManecillas()
setInterval(actualizarManecillas, 500)