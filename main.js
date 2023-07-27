
// Function to handle smooth scrolling when clicking on "PORTFLIOs" link
function scrollToPorto() {
    const portoSection = document.querySelector(".porto");
    const scrollOffsetY = -250; // Set your custom y offset here (in pixels)
    const navbarHeight = document.querySelector(".container-navbar").offsetHeight;
    const scrollOffset = portoSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - scrollOffsetY;

    // Use scrollIntoView with smooth behavior for smooth scrolling
    window.scroll({
        top: scrollOffset,
        behavior: "smooth"
    });
}

// Get the "PORTFLIOs" link element and attach a click event listener to it
document.addEventListener("DOMContentLoaded", function() {
    const portofoliosLink = document.querySelector(".navbar-list li:nth-child(1)"); // Adjust the selector accordingly

    if (portofoliosLink) {
        portofoliosLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            scrollToPorto(); // Call the scrollToPorto function
        });
    }
});

function scrollToAbout() {
    const aboutSection = document.querySelector(".about");
    const scrollOffsetY = -80; // Set your custom y offset here (in pixels)
    const navbarHeight = document.querySelector(".container-navbar").offsetHeight;
    const scrollOffset = aboutSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - scrollOffsetY;

    // Use scrollIntoView with smooth behavior for smooth scrolling
    window.scroll({
        top: scrollOffset,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.querySelector(".about-link");

    if (aboutLink) {
        aboutLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        scrollToAbout(); // Call the scrollToAbout function
        });
    }
});

function scrollToClients() {
    const clientSection = document.querySelector(".people");
    const scrollOffsetY = -220; // Set your custom y offset here (in pixels)
    const navbarHeight = document.querySelector(".container-navbar").offsetHeight;
    const scrollOffset = clientSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - scrollOffsetY;

    // Use scrollIntoView with smooth behavior for smooth scrolling
    window.scroll({
        top: scrollOffset,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const clientLink = document.querySelector(".client-link");

    if (clientLink) {
        clientLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        scrollToClients(); // Call the scrollToAbout function
        });
    }
    
});

document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll(".navbar-list li");

    navbarLinks.forEach(function(link) {
        link.addEventListener("click", function() {
        // Remove the "active" class from all list items
        navbarLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        // Add the "active" class to the clicked list item
        this.classList.add("active");
        });
    });
});
