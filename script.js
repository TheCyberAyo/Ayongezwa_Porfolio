function openTab(tabName) {
    // Get all tab contents.
    var tabContents = document.getElementsByClassName("tab-contents");

    // Hide all tab contents
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active-tab");
    }

    // Show the selected tab content
    document.getElementById(tabName).classList.add("active-tab");

    // Get all tab links
    var tabLinks = document.getElementsByClassName("tab-links");

    // Remove active class from all tab links
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active-link");
    }

    // Add active class to the clicked tab link
    event.currentTarget.classList.add("active-link");
}
