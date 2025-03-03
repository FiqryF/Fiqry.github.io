// Navigasi Mobile
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
// Navigasi Mobile

// Navigasi Desktop
document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.backgroundColor = "#A31D1D"; // Warna merah
            item.style.color = "white"; // Warna teks putih
            item.style.transform = "scale(1.05)"; // Efek sedikit membesar
            item.style.transition = "all 0.3s ease"; // Efek smooth
            item.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)"; // Bayangan halus
        });

        item.addEventListener("mouseleave", () => {
            item.style.backgroundColor = "transparent"; // Kembali ke default
            item.style.color = "black"; // Kembali ke warna default
            item.style.transform = "scale(1)"; // Kembali ke ukuran normal
            item.style.boxShadow = "none"; // Hilangkan bayangan
        });

        item.addEventListener("click", () => {
            item.style.backgroundColor = "#650F0F"; // Warna merah gelap saat diklik
            item.style.transition = "all 0.2s ease";
            setTimeout(() => {
                item.style.backgroundColor = "#A31D1D"; // Kembali ke warna hover
            }, 300); // Efek sementara saat diklik
        });
    });
});

// Navigasi Desktop

document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("fade-title");

    setTimeout(() => {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
    }, 500); // Delay 0.5 detik sebelum muncul
});


