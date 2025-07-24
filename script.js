const mouseMove = e => {
    document.getElementById("main").style.transform = `
        perspective(600px)
        rotateY(${-((window.innerWidth / 2) - e.clientX) * 0.02}deg)
        rotateX(${((window.innerHeight / 2) - e.clientY) * 0.02}deg)
    `;
};

document.addEventListener('mousemove', mouseMove);

document.getElementById("email").addEventListener("click", (event) => {
    event.currentTarget.classList.add("copied");
    navigator.clipboard.writeText("gautier.jousset@epitech.eu");
    setTimeout(() => {
        document.getElementById("email").classList.remove("copied");
    }, 2000);
});
