// Animation nav-bar
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
        nav.classList.add("anim-nav");
    } else {
        nav.classList.remove("anim-nav");
    }
});

// *** scroll to top ***
//display btn
window.addEventListener("scroll", function () {
    let scroll = this.document.querySelector(".btn-scrollup");
    scroll.classList.toggle("active", window.scrollY > 200);
});
// scroll to top
const btn = document.querySelector(".btn-scrollup");
btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

// Animation Carousel
const btns = document.querySelectorAll(".btn-modale");
const modaleEquipement = document.querySelector(".bloc-modale");
const fermetureModale = document.querySelector(".fermeture-modale");
const imgIndex = document.querySelector(".bloc-modale img");

if (window.matchMedia("(min-width: 750px)").matches) {
    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            imgIndex.src = `ressources/img${e.target.getAttribute(
                "data-index"
            )}-equip.jpg`;
            modaleEquipement.classList.add("active-modale");
        });
    });
    modaleEquipement.addEventListener("click", () => {
        modaleEquipement.classList.remove("active-modale");
    });
}

// *** cookie modal ***
let cookieModal = document.querySelector("#cookieModal");
let acceptCookie = document.querySelector("#acceptCookie");
let cancelCookie = document.querySelector("#refusedCookie");
//
cancelCookie.addEventListener("click", function () {
    cookieModal.classList.remove("active");
});
//
acceptCookie.addEventListener("click", function () {
    let d = new Date();
    d.setMinutes(2 + d.getMinutes());
    document.cookie = "GymFitness=true; expires = ' + d + ';";
    cookieModal.classList.remove("active");
});

// check cookie exist
const checkCookie = () => {
    let input = document.cookie.split("=");
    if (input[0] == "GymFitness") {
        cookieModal.classList.remove("active");
    } else {
        cookieModal.classList.add("active");
    }
};
// check cookie exist page already load
window.onload = () => {
    setTimeout(() => {
        checkCookie();
    }, 1000);
};
