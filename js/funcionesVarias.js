const quitarParaMovil = document.getElementById('quitarParaMovil');
const quitarMenuMovil = document.getElementById('quitarMenuMovil');
const CuadradoGrande = document.getElementById('CuadradoGrande');
const left64Element = document.querySelector('.left-64');
const cuadradoNotificaciones = document.getElementById('cuadradoNotificaciones');
const quitarElementos = document.getElementById('quitarElementos');
const bajarLetra = document.getElementById('bajarLetra');
const letrasCard = document.getElementById('letrasCard');
const tamanomovil = document.getElementById('tamanomovil');
const mostrarTamano = document.getElementById('mostrarTamano');
const logoIrun = document.getElementById('logoIrun');
const menuDesplegable = document.getElementById('menuDesplegable');
const aaaaa = document.getElementById('aaaaa');


function verificarAnchoVentana() {
    // Obtener el ancho de la ventana del navegador
    var anchoVentana = window.innerWidth;
    if (anchoVentana <= 1024 && anchoVentana >= 641) {
        quitarMenuMovil.style.display = 'none';

        left64Element.classList.remove('left-64');
        CuadradoGrande.removeAttribute('style');

        CuadradoGrande.classList.add('absolute', 'top-0', 'left-0', 'right-0', 'bottom-0', 'bg-gray-50', 'overflow-hidden');

        bajarLetra.style.display = 'text-xs';
        // letrasCard.style.display = 'text-xs';
        mostrarTamano.style.display = 'none';
        tamanomovil.style.display = 'block';

        // menu Desplegable
        menuDesplegable.style.display = 'block';
        logoIrun.classList.remove('mt-4');
        logoIrun.classList.add('mt-24', 'absolute');


    }

    if (anchoVentana <= 640) {
        console.log("La ventana es igual o menor a 640px");

        quitarMenuMovil.style.display = 'none';
        left64Element.classList.remove('left-64');
        CuadradoGrande.removeAttribute('style');

        CuadradoGrande.classList.add('absolute', 'top-0', 'left-0', 'right-0', 'bottom-0', 'overflow-hidden');

        quitarElementos.style.display = 'none';
        bajarLetra.style.display = 'text-xs';

        mostrarTamano.style.display = 'block';
        tamanomovil.style.display = 'none';


        // menu Desplegable
        menuDesplegable.style.display = 'block';
        logoIrun.classList.remove('mt-4');
        logoIrun.classList.add('mt-24', 'absolute');



    }

    if (anchoVentana >= 1025) {
        quitarParaMovil.removeAttribute('style');
        quitarParaMovil.classList.add('grid', 'grid-cols-2');

        quitarMenuMovil.removeAttribute('style');
        quitarMenuMovil.classList.add('fixed', 'top-0', 'left-0', 'z-40', 'w-64', 'h-screen', 'transition-transform', '-translate-x-full', 'sm:translate-x-0', 'bg-gray-700', 'shadow-inner', 'shadow-md-right');

        CuadradoGrande.removeAttribute('style');

        CuadradoGrande.classList.add('absolute', 'top-0', 'left-64', 'right-0', 'bottom-0', 'bg-gray-50', 'overflow-hidden');

        quitarElementos.style.display = 'block';
        bajarLetra.removeAttribute('style');

        mostrarTamano.style.display = 'none'
        tamanomovil.style.display = 'block';

        // menu Desplegable
        menuDesplegable.style.display = 'none';
        logoIrun.classList.remove('mt-24', 'absolute');
        logoIrun.classList.add('mt-4');
    }




}

let quitarMostrarMenu = 0;

function menuDesplegablee() {
    console.log(quitarMostrarMenu);
    var anchoVentanaa = window.innerWidth;
    // Sirve para pillar la pantalla de tablet y asi poder seleccionar en cual hacerlo
    if (anchoVentanaa <= 1024 && anchoVentanaa >= 641) {
        // Ejecuta la condicion del contador
        if (quitarMostrarMenu % 2 === 0) {
            quitarMenuMovil.style.display = 'block';
            quitarMostrarMenu++;
        } else {
            quitarMenuMovil.style.display = 'none';
            quitarMostrarMenu++;
        }

    }
    // Sirve para pillar la pantalla de movil y asi poder seleccionar en cual hacerlo
    if (anchoVentanaa <= 640) {
        // Ejecuta la condicion del contador
        if (quitarMostrarMenu % 2 === 0) {
            aaaaa.style.display = 'block';
            quitarMostrarMenu++;
        } else {
            aaaaa.style.display = 'none';
            quitarMostrarMenu++;
        }
    }
}
window.addEventListener("load", verificarAnchoVentana);
window.addEventListener("resize", verificarAnchoVentana);
