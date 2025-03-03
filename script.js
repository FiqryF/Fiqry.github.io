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
    const items = document.querySelectorAll(".fade");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.9;

        items.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".more-info");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            alert("Informasi lebih lanjut akan segera tersedia!");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const header = document.querySelector("header");

    // Toggle Mobile Menu
    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation(); // Mencegah event bubbling
        mobileMenu.classList.toggle("active");
    });

    // Menutup menu jika klik di luar
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove("active");
        }
    });

    // Sticky Header saat Scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll("nav ul li a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll(".latest-project-item");

    const observerOptions = {
        root: null, // Menggunakan viewport sebagai root
        threshold: 0.2, // Akan memicu ketika 20% elemen terlihat
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            } else {
                entry.target.classList.remove("fade-in"); // Hapus class saat keluar viewport
            }
        });
    }, observerOptions);

    projectItems.forEach((item) => {
        observer.observe(item);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll(".latest-project-item");

    const observerOptions = {
        root: null, // Menggunakan viewport sebagai root
        threshold: 0.5, // 50% elemen harus terlihat
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active-animation"); // Tambahkan animasi saat masuk viewport
            } else {
                entry.target.classList.remove("active-animation"); // Hapus animasi saat keluar
            }
        });
    }, observerOptions);

    projectItems.forEach((item) => {
        observer.observe(item);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        let progressValue = bar.getAttribute("data-progress");
        bar.style.width = progressValue + "%";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress");

    progressBars.forEach(bar => {
        setInterval(() => {
            bar.style.background = "linear-gradient(90deg, darkred 0%, red 50%, darkred 100%)";
            bar.style.backgroundSize = "200% 100%";
            bar.style.animation = "shine 2s infinite linear";
        }, 2000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const mainButton = document.getElementById("mainButton");
    const options = document.getElementById("options");
    const icon = mainButton.querySelector(".icon");

    mainButton.addEventListener("click", function () {
        options.classList.toggle("show");
        mainButton.classList.toggle("open");

        icon.style.transition = "transform 0.3s ease-in-out, opacity 0.2s ease-in-out";
        
        if (mainButton.classList.contains("open")) {
            icon.style.opacity = "0"; // Hilangkan ikon sebentar
            icon.style.transform = "scale(1.2) rotate(90deg)"; // Perbesar & mulai rotasi

            setTimeout(() => {
                icon.innerHTML = "×"; // Ubah ke X
                icon.style.opacity = "1"; // Tampilkan lagi
                icon.style.transform = "scale(1) rotate(180deg)"; // Normal & rotasi penuh
            }, 200);
        } else {
            icon.style.opacity = "0";
            icon.style.transform = "scale(1.2) rotate(90deg)"; // Perbesar & mulai rotasi

            setTimeout(() => {
                icon.innerHTML = "+"; // Ubah kembali ke +
                icon.style.opacity = "1";
                icon.style.transform = "scale(1) rotate(0deg)"; // Normal & kembali ke posisi awal
            }, 200);
        }
    });
});
