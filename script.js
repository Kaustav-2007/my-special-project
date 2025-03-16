document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".container");
    const music = document.getElementById("bg-music");

    function showPage(pageNumber) {
        pages.forEach(page => page.classList.remove("show"));
        document.getElementById(`page${pageNumber}`).classList.add("show");
    }

    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", function () {
            const nextPage = this.getAttribute("onclick").match(/\d+/)[0];
            showPage(nextPage);
        });
    });

    function createFallingItems() {
        const emojis = ["❤️", "💛", "💚", "💙", "💜", "🖤", "💖", "🌸", "🍃", "✨", "🎈"];
        const fallingContainer = document.querySelector(".falling-container");

        setInterval(() => {
            let fallItem = document.createElement("div");
            fallItem.classList.add("falling-item");
            fallItem.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            fallItem.style.left = Math.random() * 100 + "vw";
            fallItem.style.animationDuration = (Math.random() * 5 + 3) + "s";

            fallingContainer.appendChild(fallItem);

            setTimeout(() => {
                fallItem.remove();
            }, 6000);
        }, 200);
    }

    showPage(1);
    createFallingItems();
});
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");

    function playMusic() {
        music.play().catch(error => console.log("Autoplay failed: User interaction required."));
    }

    document.body.addEventListener("click", function () {
        playMusic();
    });

    playMusic();  // Try playing automatically on load
});
document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".container");

    function showPage(pageNumber) {
        pages.forEach(page => page.classList.remove("show"));
        document.getElementById(`page${pageNumber}`).classList.add("show");
    }

    document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", function () {
            const nextPage = this.getAttribute("onclick").match(/\d+/)[0];
            showPage(nextPage);
        });
    });

    showPage(1);
});
