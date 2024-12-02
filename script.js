document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const sidemenu = document.getElementById('sidemenu');

  // Toggle the 'active' class on the menu when the button is clicked
  menuToggle.addEventListener('click', () => {
      sidemenu.classList.toggle('active');
      console.log("clicked")
  });
});


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

document.addEventListener("DOMContentLoaded", function () {
    const certItems = document.querySelectorAll(".cert-item");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
  
    let currentIndex = 0;
  
    function updateCertificates() {
      // Hide all certificates
      certItems.forEach((item) => item.classList.remove("active"));
  
      // Show the current two certificates
      for (let i = currentIndex; i < currentIndex + 2; i++) {
        if (certItems[i]) certItems[i].classList.add("active");
      }
  
      // Disable buttons appropriately
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex + 2 >= certItems.length;
    }
  
    prevBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex -= 2;
        updateCertificates();
      }
    });
  
    nextBtn.addEventListener("click", function () {
      if (currentIndex + 2 < certItems.length) {
        currentIndex += 2;
        updateCertificates();
      }
    });
  
    // Initialize the view
    updateCertificates();
  });
  

