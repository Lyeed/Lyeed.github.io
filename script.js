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

const displayedSkills = new Set([]);

const availableSkills = new Set([
    "React 19",
    "TanStack updates",
    "TypeScript news",
    "New web standards",
    "Security news",
    "New browser APIs",
    "Unreal Engine 5",
    "AI progress",
    "New development tools",
    "Browsers support",
    "Data privacy",
    "SSO",
].sort(() => 0.5 - Math.random()));

const addRandomSkill = () => {
    const element = document.getElementById("random-skills");
    const child = document.createElement("li");
    const skill = [...availableSkills][0];

    if (skill) {
        child.textContent = skill;
        child.classList.add("skill", "temporary");
        element.insertBefore(child, element.firstChild);
        availableSkills.delete(skill);
        displayedSkills.add(skill);

        setTimeout(() => {
            child.remove();
            availableSkills.add(skill);
        }, 10000);
    }
};

addRandomSkill();
setInterval(addRandomSkill, 5000);
