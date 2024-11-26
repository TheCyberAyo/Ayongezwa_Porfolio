


function openTab(tabId) {
    var tabs = document.querySelectorAll('.tab-contents'); //gets tab content elements

    var tabLinks = document.querySelectorAll('.tab-links'); // gets tab links


    tabs.forEach(function (tab) {
        tab.classList.remove('active-tab');
    });
    tabLinks.forEach(function (link) {
        link.classList.remove('active-link');
    }); //hides all tab contents and remove 'active' class from all links


    document.getElementById(tabId).classList.add('active-tab');
    var activeLink = document.querySelector(`.tab-links[onclick="openTab('${tabId}')"]`);
    if (activeLink) {
        activeLink.classList.add('active-link');
    } // Shows selected tab content and add 'active' class to the clicked link
}


openTab('skills'); //first tab opens by default

const certificates = document.querySelector('#certificates');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
let scrollPosition = 0;

// Calculate the scroll step dynamically (two certificates)
const certificateWidth = certificates.querySelector('.certificate').clientWidth + 10; // Includes margin
const scrollStep = certificateWidth * 2; // Show two certificates at once

prevButton.addEventListener('click', () => {
    scrollPosition = Math.max(0, scrollPosition - scrollStep);
    certificates.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    updateButtons();
});

nextButton.addEventListener('click', () => {
    const maxScroll = certificates.scrollWidth - certificates.clientWidth;
    scrollPosition = Math.min(maxScroll, scrollPosition + scrollStep);
    certificates.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    updateButtons();
});

function updateButtons() {
    const maxScroll = certificates.scrollWidth - certificates.clientWidth;
    prevButton.disabled = scrollPosition <= 0;
    nextButton.disabled = scrollPosition >= maxScroll;
}

updateButtons();


