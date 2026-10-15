document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio website loaded!");

    const projects = document.querySelectorAll(".project-card");

    projects.forEach(project => {

        project.addEventListener("mouseenter", () => {
            project.style.border = "1px solid #38bdf8";
        });

        project.addEventListener("mouseleave", () => {
            project.style.border = "1px solid transparent";
        });

    });

});