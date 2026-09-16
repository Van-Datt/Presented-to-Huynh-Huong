function createFlower(){

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML =
        Math.random() > 0.5 ? "🌸" : "💮";

    flower.style.left =
        Math.random() * 100 + "vw";

    flower.style.fontSize =
        (20 + Math.random() * 20) + "px";

    flower.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 12000);
}

setInterval(createFlower,300);

const btn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");
const password = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");

btn.onclick = () => {

    if(password.value !== "09042007"){

        errorMsg.textContent =
        "Đây là web dành cho Hương, vui lòng nhập đúng mật khẩu";

        password.focus();

        return;
    }

    errorMsg.textContent = "";

    music.play();

    document.body.classList.add("fadeOut");

    setTimeout(() => {

        window.location.href = "home.html";

    }, 1000);

};