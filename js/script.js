document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle'); // Botón de menú
    const navbarCollapse = document.getElementById('navbar-collapse'); // Contenido del menú

    // Función para abrir y cerrar el menú
    function toggleMenu() {
        navbarCollapse.classList.toggle('active');
        document.body.classList.toggle('no-scroll'); // Opcional: para evitar el scroll
    }

    // Evento para el botón de menú
    menuToggle.addEventListener('click', function(event) {
        toggleMenu();
        event.stopPropagation(); // Previene que el clic en el botón cierre el menú inmediatamente
    });

    // Evento para el clic fuera del menú
    document.addEventListener('click', function(event) {
        // Verifica si el clic está fuera del menú y el botón de menú
        if (!navbarCollapse.contains(event.target) && !menuToggle.contains(event.target)) {
            navbarCollapse.classList.remove('active');
            document.body.classList.remove('no-scroll'); // Permite el scroll
        }
    });

    // Evento para presionar la tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            navbarCollapse.classList.remove('active');
            document.body.classList.remove('no-scroll'); // Permite el scroll
        }
    });

    // Evento para cambiar el tamaño de la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navbarCollapse.classList.remove('active');
            document.body.classList.remove('no-scroll'); // Permite el scroll
        }
    });
});
