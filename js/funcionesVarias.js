const quitarParaMovil = document.getElementById('quitarParaMovil');
const quitarMenuMovil = document.getElementById('quitarMenuMovil');
const CuadradoGrande = document.getElementById('CuadradoGrande');
const left64Element = document.querySelector('.left-64');
const cuadradoNotificaciones = document.getElementById('cuadradoNotificaciones');
const quitarElementos = document.getElementById('quitarElementos');
const bajarLetra = document.getElementById('bajarLetra');

function verificarAnchoVentana() {
    // Obtener el ancho de la ventana del navegador
    var anchoVentana = window.innerWidth;
    if (anchoVentana <= 640) {
        console.log("La ventana es igual o menor a 640px");
        quitarParaMovil.style.display = 'none';
        quitarMenuMovil.style.display = 'none';

        left64Element.classList.remove('left-64');
        CuadradoGrande.removeAttribute('style');

        CuadradoGrande.classList.add('absolute', 'top-0', 'left-0', 'right-0', 'bottom-0', 'bg-gray-50', 'overflow-hidden');

        quitarElementos.style.display = 'none';
        bajarLetra.style.display = 'text-xs'

    } else {
        quitarParaMovil.removeAttribute('style');
        quitarParaMovil.classList.add('grid', 'grid-cols-2');

        quitarMenuMovil.removeAttribute('style');
        quitarMenuMovil.classList.add('fixed', 'top-0', 'left-0', 'z-40', 'w-64', 'h-screen', 'transition-transform', '-translate-x-full', 'sm:translate-x-0', 'bg-gray-700', 'shadow-inner', 'shadow-md-right');

        CuadradoGrande.removeAttribute('style');

        CuadradoGrande.classList.add('absolute', 'top-0', 'left-64', 'right-0', 'bottom-0', 'bg-gray-50', 'overflow-hidden');

        quitarElementos.style.display = 'block';
        bajarLetra.removeAttribute('style');
    }
}
// Llamar a la función al cargar la página y cada vez que se redimensione la ventana
window.addEventListener("load", verificarAnchoVentana);
window.addEventListener("resize", verificarAnchoVentana);
