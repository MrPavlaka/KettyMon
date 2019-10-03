// Toggle Menu
function toggleMenu() {
    var x = document.getElementById("main-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Menu Dropdown
function toggleDropdown() {
    var d = document.getElementById("main-menu-dropdown");
    if (d.style.display === "none") {
        d.style.display = "block";
    } else {
        d.style.display = "none";
    }
}