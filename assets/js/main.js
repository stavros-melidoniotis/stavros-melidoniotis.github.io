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


// About section - Work details

const expandButtons = document.querySelectorAll('.expand-details');

expandButtons.forEach((button) => {
    button.addEventListener('click', function() {
        let workWrapper = this.closest('.work-wrapper');
        let arrow = this.children[0];
        let detailsDiv = workWrapper.children[1];

        detailsDiv.classList.toggle('d-none');

        (detailsDiv.classList.contains('d-none')) ? arrow.style.transform = 'rotate(360deg)' : arrow.style.transform = 'rotate(-180deg)';
    });
});


// Project Filters

const filters = document.querySelectorAll('.project-filter');
const projects = document.querySelectorAll('.project');

filters.forEach((filter) => {
    filter.addEventListener('click', function() {
        let projectTypeToShow = this.value;

        projects.forEach((project) => {
            if (projectTypeToShow == 'all') {
                project.style.display = 'flex';
            } else {
                (project.dataset.projectType == projectTypeToShow) ? project.style.display = 'flex' : project.style.display = 'none';
            }
        });
    });
});