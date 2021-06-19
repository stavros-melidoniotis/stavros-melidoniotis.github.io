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

const explorerMenuItems = document.querySelectorAll('.menu-item');
const tabMenuItems = document.querySelectorAll('.tab-menu-item');

explorerMenuItems.forEach((item) => {
    item.addEventListener('click', event => {
        showSection(event.target.dataset.section);
        changeActiveTab(event.target);
    });
});

tabMenuItems.forEach((item) => {
    item.addEventListener('click', event => {
        showSection(event.target.dataset.section);
        changeActiveTab(event.target);
    });
});

const viewWorkBtn = document.getElementById('view-work-button');
const contactBtn = document.getElementById('contact-button');

viewWorkBtn.addEventListener('click', () => {
    showSection('projects');
    changeActiveTab(viewWorkBtn);
});

contactBtn.addEventListener('click', () => {
    showSection('contact');
    changeActiveTab(contactBtn);
});

function showSection(sectionID) {
    let sectionToShow = document.getElementById(sectionID);
    let allSections = document.querySelectorAll('.portfolio-section');

    allSections.forEach((section) => {
        (section === sectionToShow ) ? 
            section.classList.remove('d-none') : 
            section.classList.add('d-none');
    });
}

function changeActiveTab(clickedElement) {
    let activeTab = document.querySelector('.tab-menu-item.tab.active');

    activeTab.classList.remove('active');
    document.querySelector(`.tab-menu-item.tab[data-section="${clickedElement.dataset.section}"`).classList.add('active');
}


// About section - Age calculation

const birthYear = 1998;
const currentYear = new Date().getFullYear();
const ageSpan = document.getElementById('age');

ageSpan.innerText = currentYear - birthYear;
