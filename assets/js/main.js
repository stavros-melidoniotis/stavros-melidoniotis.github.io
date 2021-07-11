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

// Settings

const mainToggler = document.getElementById('main-toggler');
const settingsToggler = document.getElementById('settings-toggler');

settingsToggler.addEventListener('click', function() {
    let isAlreadyActive = this.classList.contains('active');

    if (isAlreadyActive) return;

    mainToggler.classList.remove('active');
    this.classList.add('active');

    showSection('settings');
    removeActiveTab();
});

mainToggler.addEventListener('click', function() {
    let isAlreadyActive = this.classList.contains('active');

    if (isAlreadyActive) return;

    settingsToggler.classList.remove('active');
    this.classList.add('active');

    showSection('home');
    setFirstTabActive();
});

function removeActiveTab() {
    document.querySelector('.tab.active').classList.remove('active');
}

function setFirstTabActive() {
    document.querySelector('.tab').classList.add('active');
}


const localStorage = window.localStorage;

document.addEventListener('DOMContentLoaded', function() {
    let savedTheme = localStorage.getItem('theme');

    if (savedTheme)
        setTheme(savedTheme);
});

const changeThemeButtons = document.querySelectorAll('.set-theme-btn');

changeThemeButtons.forEach((btn) => {
    btn.addEventListener('click', function() {
        let themeToSet = this.dataset.theme;

        setTheme(themeToSet);
        localStorage.setItem('theme', themeToSet);
    });
});

function setTheme(theme) {
    switch(theme) {
        case 'dark':
            document.documentElement.style.setProperty('--main-bg', '#24292e');
            document.documentElement.style.setProperty('--header-bg', '#1f2428');
            document.documentElement.style.setProperty('--explorer-bg', '#1f2428');
            document.documentElement.style.setProperty('--accent-color', '#f9826c');
            document.documentElement.style.setProperty('--explorer-hover-bg', '#24292e');
            document.documentElement.style.setProperty('--bg-text', 'rgba(56, 58, 61, 0.35)');
            document.documentElement.style.setProperty('--h1-bg', 'rgba(249, 130, 108, 0.8)');
            document.documentElement.style.setProperty('--scrollbar-bg', '#1f2428');
            document.documentElement.style.setProperty('--scrollbar-hover-bg', '#32383f');
            break;
        // case 'light':
        //     document.documentElement.style.setProperty('--main-bg', '#ffffff');
        //     document.documentElement.style.setProperty('--header-bg', '#e5ebf1');
        //     document.documentElement.style.setProperty('--explorer-bg', '#e5ebf1');
        //     document.documentElement.style.setProperty('--text-color', '#000000');
        //     document.documentElement.style.setProperty('--faded-text-color', '#595959');
        //     document.documentElement.style.setProperty('--accent-color', '#007acc');
        //     document.documentElement.style.setProperty('--explorer-hover-bg', '#e8e8e8');
        //     document.documentElement.style.setProperty('--bg-text', 'rgba(111, 111, 111, 0.35)');
        //     document.documentElement.style.setProperty('--h1-bg', 'rgba(0, 122, 204, 0.8)');
        //     break;
        case 'cobalt2':
            document.documentElement.style.setProperty('--main-bg', '#193549');
            document.documentElement.style.setProperty('--header-bg', '#122738');
            document.documentElement.style.setProperty('--explorer-bg', '#122738');
            document.documentElement.style.setProperty('--accent-color', '#ff628c');
            document.documentElement.style.setProperty('--explorer-hover-bg', '#193549');
            document.documentElement.style.setProperty('--bg-text', 'rgba(18, 39, 56, 0.35)');
            document.documentElement.style.setProperty('--h1-bg', 'rgba(255, 98, 140, 0.8)');
            document.documentElement.style.setProperty('--scrollbar-bg', '#122738');
            document.documentElement.style.setProperty('--scrollbar-hover-bg', '#1d3e58');
            break;
    }
}