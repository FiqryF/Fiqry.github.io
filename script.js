document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuToggle && mobileMenu) {  // Pastikan elemen ditemukan sebelum menambahkan event listener
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden"); // Tampilkan/sembunyikan menu
        });
    } else {
        console.error("Elemen menu-toggle atau mobile-menu tidak ditemukan!");
    }
});
