document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("#header");
    const gnbItems = document.querySelectorAll(".gnb");

    gnbItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            header.classList.add("active");
        });

        item.addEventListener("mouseleave", () => {
            header.classList.remove("active");
        });
    });

    // 메인 비주얼
    new Swiper(".visual-slider", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".visual-prev",
            prevEl: ".visual-next",
        },
    });

    // menu
    new Swiper(".menu-slider", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        slidesPerView: 4,
        spaceBetween: 20,

        navigation: {
            nextEl: ".menu-prev",
            prevEl: ".menu-next",
        },
    });

    //value
    const swiper = new Swiper(".value-slider", {
        slidesPerView: 1.3,
        centeredSlides: true,
        spaceBetween: 40,
        loop: true,
        navigation: {
            nextEl: ".value-next",
            prevEl: ".value-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // GSAP
    gsap.registerPlugin(ScrollTrigger);

    // line
});
