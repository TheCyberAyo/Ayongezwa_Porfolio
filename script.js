
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

emailjs.init("WzUkvApTSmNyi5GF7");

function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send the email via EmailJS
    emailjs.send("service_zrqvldw", "template_2rey6lp", {
        name: name,
        email: email,
        message: message,
    })
    .then(
        (response) => {
            document.getElementById("msg").innerText = "Email sent successfully!";
        },
        (error) => {
            document.getElementById("msg").innerText = "Failed to send email.";
        }
    );
}
