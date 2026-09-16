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
   NHẠC
========================= */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

    if (!isPlaying) {

        music.play()
            .then(() => {

                isPlaying = true;

                musicBtn.innerHTML =
                    "🔇 Tắt nhạc";

            })
            .catch((error) => {

                console.log(error);

                alert("Không thể phát nhạc.");

            });

    } else {

        music.pause();

        isPlaying = false;

        musicBtn.innerHTML =
            "🎵 Bật nhạc ở đây nè<br>nghe cho nó chill";

    }

});


/* =========================
   PHÁT NHẠC KHI CLICK LẦN ĐẦU
========================= */

document.addEventListener("click", () => {

    if (!isPlaying) {

        music.play()
            .then(() => {

                isPlaying = true;

                musicBtn.innerHTML =
                    "🔇 Không mún chill thì tắt nhạc";

            })
            .catch(() => { });

    }

}, { once: true });