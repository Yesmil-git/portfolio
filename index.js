 // Desactiva el scroll lateral forzando la posición
 document.addEventListener('scroll', function () {
    window.scrollTo(0, window.scrollY); // Fija la posición horizontal
});



function mostrarInstagram() {
    // Configuración de SweetAlert
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Serás redirigido a otra página.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirige al usuario
            window.location.href = "https://www.instagram.com/yesmileperez/profilecard/?igsh=dDkwc3l2bGNrM2R5";
        }
    });
}


function mostrarWhatsapp() {
    // Configuración de SweetAlert
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Serás redirigido a otra página.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirige al usuario
            window.location.href = "https://api.whatsapp.com/send?phone=18298991211";
        }
    });
}

 