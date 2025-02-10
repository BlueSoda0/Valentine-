
// Hide loading screen and show main content after 1.5s
setTimeout(() => {
    document.getElementById("loadingScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}, 1500);

function openLetter() {
    document.getElementById("loveLetter").style.display = "block";
}

function createHeart() {
    let heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}
setInterval(createHeart, 500);

let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let noClickCount = 0;

noBtn.addEventListener("click", function() {
    noClickCount++;
    if (noClickCount < 6) {
        noBtn.style.transform = `scale(${1 - noClickCount * 0.2})`;
        noBtn.textContent = ["Are you sure? 😟", "Really sure? 🥺", "Think again! 🤔", "Don't do this! 😭", "Last chance! 💔"][noClickCount - 1];
    } else {
        noBtn.style.display = "none";
    }
    yesBtn.style.transform = `scale(${1 + noClickCount * 0.3})`;
});

yesBtn.addEventListener("click", function() {
    let fireworks = document.createElement("div");
    fireworks.classList.add("fireworks");
    fireworks.innerHTML = "🎆💖🎆";
    document.body.appendChild(fireworks);
    setTimeout(() => { fireworks.remove(); }, 5000);
    setTimeout(() => { window.location.href = "love_story.html"; }, 5000);
});
