const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("menu-active");
});

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");
  
    // Tambah delay manual biar loading tampil lebih lama (misalnya 2 detik)
    setTimeout(() => {
      loader.style.transition = "opacity 0.8s";
      loader.style.opacity = 0;
  
      // Setelah animasi opacity selesai (800ms), baru hilangkan loader
      setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
      }, 800);
    }, 2000); // <- ini durasi loading tampil, bisa ubah 2000 (ms) ke 3000 misalnya
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 3500); // delay 3.5 detik
  });
  
document.addEventListener("scroll", function() {
    let elementsRight = document.querySelectorAll(".scroll-right");
    let elementsLeft = document.querySelectorAll(".scroll-left");
    let scrollPosition = window.scrollY;

    elementsRight.forEach(element => {
        if (scrollPosition > 100) {
            element.classList.add("scrolled");
        } else {
            element.classList.remove("scrolled");
        }
    });

    elementsLeft.forEach(element => {
        if (scrollPosition > 100) {
            element.classList.add("scrolled");
        } else {
            element.classList.remove("scrolled");
        }
    });
});

document.getElementById("scrollButton").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah perilaku default link

    // Dapatkan tinggi viewport (layar pertama)
    let screenHeight = window.innerHeight;

    // Scroll ke posisi layar kedua
    window.scrollBy({
        top: screenHeight,  // Scroll ke bawah sebesar tinggi layar
        behavior: "smooth"  // Efek smooth scroll
    });
});


    const text = `Muhammad Fakhri Yudistra`;

    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        let typingText = document.getElementById("typing-text");

        if (!isDeleting) {
            // Mengetik karakter satu per satu
            typingText.innerHTML = text.substring(0, index);
            index++;
        } else {
            // Menghapus karakter satu per satu
            typingText.innerHTML = text.substring(0, index);
            index--;
        }

        // Atur kecepatan mengetik dan menghapus
        let speed = isDeleting ? 100 : 30;

        // Jika sudah selesai mengetik, mulai menghapus setelah jeda
        if (index > text.length) {
            isDeleting = true;
            speed = 4000; // Jeda sebelum mulai menghapus
        } 
        // Jika sudah selesai menghapus, mulai mengetik lagi setelah jeda
        else if (index === 0 && isDeleting) {
            isDeleting = false;
            speed = 100; // Jeda sebelum mulai mengetik lagi
        }

        setTimeout(typeEffect, speed);
    }
    // Jalankan efek mengetik setelah halaman dimuat
    window.onload = function() {
        typeEffect();
    };

    document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if(entry.isIntersecting){
              entry.target.classList.add("animate");
            }
          });
        }, { threshold: 0.2 });
      
        document.querySelectorAll(".dramatic-title, .dramatic-text").forEach(el => {
          observer.observe(el);
        });
      });
      
// Auto scroll (opsional)
const galleryScroll = document.querySelector(".gallery-scroll");
let scrollAmount = 0;

setInterval(() => {
  scrollAmount += 1;
  galleryScroll.scrollLeft = scrollAmount;
  if (scrollAmount >= galleryScroll.scrollWidth - galleryScroll.clientWidth) {
    scrollAmount = 0; // reset kalau sudah sampai akhir
  }
}, 50); // ubah kecepatan geser di sini


  document.addEventListener("DOMContentLoaded", function () {
      const galleryImages = document.querySelectorAll(".gallery-card img");
      const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightbox-img");
      const lightboxDesc = document.getElementById("lightbox-desc");
      const closeBtn = document.querySelector(".lightbox .close");
    
      galleryImages.forEach((img) => {
        img.addEventListener("click", () => {
          lightbox.style.display = "block";
          lightboxImg.src = img.src;
          lightboxDesc.textContent = img.getAttribute("data-desc") || "Tidak ada deskripsi.";
        });
      });

      document.querySelectorAll('.gallery-card img').forEach(img => {
        img.addEventListener('click', () => {
          const popup = document.getElementById("lightbox");
          const popupImg = document.getElementById("popup-img");
          const popupDesc = document.getElementById("popup-desc");
      
          popup.style.display = "block";
          popupImg.src = img.src;
          popupDesc.textContent = img.getAttribute("data-desc");
        });
      });
      
      document.querySelector(".close").addEventListener("click", () => {
        document.getElementById("lightbox").style.display = "none";
      });
      
  
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  });
  