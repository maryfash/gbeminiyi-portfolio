 const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".flex-container nav ul");

    menuIcon.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });

    