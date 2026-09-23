const unlockBtn = document.getElementById("unlockBtn");
const intro = document.getElementById("intro");

const passwordModal =
document.getElementById("passwordModal");

const doorPassword =
document.getElementById("doorPassword");

const confirmPassword =
document.getElementById("confirmPassword");

const passwordError =
document.getElementById("passwordError");

const togglePassword =
document.getElementById("togglePassword");

const music =
document.getElementById("bgMusic");

const mainContent =
document.getElementById("mainContent");

const startBtn =
document.getElementById("startBtn");

/* HOA ĐÀO */

function createFlower(){

    const flower =
    document.createElement("div");

    flower.className = "flower";

    flower.innerHTML =
    Math.random() > 0.5 ? "🌸" : "💮";

    flower.style.left =
    Math.random()*100 + "vw";

    flower.style.fontSize =
    (15 + Math.random()*20) + "px";

    flower.style.animationDuration =
    (6 + Math.random()*5) + "s";

    document.body.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },12000);
}

/* MỞ HỘP MẬT KHẨU */

unlockBtn.onclick = () => {

    passwordModal.classList.add("show");

    doorPassword.value = "";
    passwordError.textContent = "";

    doorPassword.focus();
};

/* HIỆN ẨN MẬT KHẨU */

togglePassword.onclick = () => {

    if(doorPassword.type === "password"){
        doorPassword.type = "text";
        togglePassword.textContent = "🙈";
    }else{
        doorPassword.type = "password";
        togglePassword.textContent = "👁";
    }
};

/* XÁC NHẬN */

confirmPassword.onclick = () => {

    if(doorPassword.value !== "09042007"){

        passwordError.textContent =
        "Mật khẩu không chính xác, vui lòng nhập lại.";

        return;
    }

    passwordModal.classList.remove("show");

    music.play();

    intro.classList.add("open");

    setTimeout(() => {

        mainContent.classList.add("show");

        setInterval(createFlower,300);

    },1500);

    setTimeout(() => {

        intro.style.display = "none";

    },3000);
};

/* ENTER */

doorPassword.addEventListener("keypress",(e)=>{

    if(e.key === "Enter"){
        confirmPassword.click();
    }

});

/* BẮT ĐẦU */

startBtn.onclick = () => {

    window.location.href = "home.html";

};