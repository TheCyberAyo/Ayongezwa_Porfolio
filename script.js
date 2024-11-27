


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

// Updated JavaScript logic for two items
const certifications = document.querySelectorAll('.cert-item');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const itemsToShow = 2; // Number of certificates to show at a time

function updateDisplay() {
    certifications.forEach((cert, index) => {
        // Show the items within the range of currentIndex and itemsToShow
        const isVisible = index >= currentIndex && index < currentIndex + itemsToShow;
        cert.classList.toggle('active', isVisible);
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= certifications.length - itemsToShow;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= itemsToShow;
        updateDisplay();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < certifications.length - itemsToShow) {
        currentIndex += itemsToShow;
        updateDisplay();
    }
});

updateDisplay();
