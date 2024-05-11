document.querySelector(".swiper-element-prev").addEventListener("click", () => {
    document.querySelector(".swiper-button-prev").click();
});

document.querySelector(".swiper-element-next").addEventListener("click", () => {
    document.querySelector(".swiper-button-next").click();
});

var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    // Default parameters
    slidesPerView: 1.4,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        1024: {
            slidesPerView: 2.4,
            spaceBetween: 20
        },
        1300: {
            slidesPerView: 3.4,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// GROW YOUR COLLECT ITEMS
(() => {
    let btns = document.querySelectorAll(".show-gyc-item");
    let img = document.querySelectorAll(".gyc-item");
    let icon = document.querySelectorAll(".gyc-btn-icon");

    btns.forEach((item, index) => {
        item.addEventListener("click", () => {
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove("bg-white");
                btns[i].classList.remove("bt-shadow5");
                icon[i].classList.add("d-none");
                img[i].classList.remove("active");
            }

            item.classList.add("bg-white");
            item.classList.add("bt-shadow5");
            icon[index].classList.remove("d-none");
            img[index].classList.add("active");
        })
    })
})();
