const mouseMove = e => {
    document.getElementById("main").style.transform = `
        perspective(600px)
        rotateY(${-((window.innerWidth / 2) - e.clientX) * 0.02}deg)
        rotateX(${((window.innerHeight / 2) - e.clientY) * 0.02}deg)
    `;
};

document.addEventListener('mousemove', mouseMove);
