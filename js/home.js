/* =========================
   ĐẾM NGƯỢC
========================= */

const target = new Date("2026-09-30 00:00:00");

function updateCountdown() {

    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {

        document.getElementById("days").textContent = 0;
        document.getElementById("hours").textContent = 0;
        document.getElementById("minutes").textContent = 0;
        document.getElementById("seconds").textContent = 0;

        return;
    }

    document.getElementById("days").textContent =
        Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        Math.floor(diff / (1000 * 60 * 60) % 24);

    document.getElementById("minutes").textContent =
        Math.floor(diff / (1000 * 60) % 60);

    document.getElementById("seconds").textContent =
        Math.floor(diff / 1000 % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* =========================
   HOA RƠI
========================= */

function createSakura() {

    const flower = document.createElement("div");

    flower.className = "sakura";

    flower.innerHTML =
        Math.random() > 0.5 ? "🌸" : "💮";

    flower.style.left =
        Math.random() * 100 + "vw";

    flower.style.fontSize =
        (15 + Math.random() * 20) + "px";

    flower.style.animationDuration =
        (8 + Math.random() * 6) + "s";

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 15000);
}

setInterval(createSakura, 300);


/* =========================
   TIM RƠI
========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "💖";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 15) + "px";

    heart.style.animationDuration =
        (6 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

setInterval(createHeart, 1000);


/* =========================
   SCROLL ANIMATION
========================= */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(".reveal")
.forEach((element) => {
    observer.observe(element);
});



/* =========================
   MỞ THIỆP
========================= */

document.body.classList.add("waiting");

const intro =
document.getElementById("letterIntro");

const openBtn =
document.getElementById("openLetterBtn");

const music =
document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {

    music.play()
    .catch(error => {
        console.log(error);
    });

    intro.classList.add("hide");

    setTimeout(() => {

        document.body.classList.remove("waiting");
        document.body.classList.add("ready");

    }, 500);

});



