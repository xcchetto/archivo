document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 1. Quitar la clase 'active' de todos los botones y paneles
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // 2. Añadir la clase 'active' al botón clicado
            button.classList.add('active');

            // 3. Obtener el ID de la pestaña a mostrar
            const targetTabId = button.dataset.tab; // data-tab="descripcion"
            const targetTabPane = document.getElementById(targetTabId);

            // 4. Añadir la clase 'active' al panel de la pestaña correspondiente
            if (targetTabPane) {
                targetTabPane.classList.add('active');
            }
        });
    });

    // Asegurarse de que la primera pestaña esté activa al cargar la página
    // (Esto es útil si JavaScript se carga antes de que se establezcan las clases iniciales)
    const initialTabButton = document.querySelector('.tab-button.active');
    if (initialTabButton) {
        const initialTabPaneId = initialTabButton.dataset.tab;
        const initialTabPane = document.getElementById(initialTabPaneId);
        if (initialTabPane) {
            initialTabPane.classList.add('active');
        }
    } else {
        // Fallback: activa la primera pestaña si ninguna tiene 'active' inicialmente
        if (tabButtons.length > 0 && tabPanes.length > 0) {
            tabButtons[0].classList.add('active');
            tabPanes[0].classList.add('active');
        }
    }
});
