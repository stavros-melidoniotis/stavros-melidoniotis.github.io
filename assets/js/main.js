const explorerToggler = document.querySelector('.explorer-toggler');
const explorerTogglerArrow = explorerToggler.firstElementChild;
const explorerFiles = explorerToggler.nextElementSibling;

explorerToggler.addEventListener('click', function() {
    explorerToggler.classList.toggle('collapsed');

    (explorerToggler.classList.contains('collapsed')) ?
        explorerTogglerArrow.className = 'fas fa-chevron-right' :
        explorerTogglerArrow.className = 'fas fa-chevron-down';

    explorerFiles.classList.toggle('d-none');
});
