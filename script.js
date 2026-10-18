(() => {
    const preference = window.matchMedia("(prefers-color-scheme: light)");
    let savedTheme = null;

    try {
        const stored = localStorage.getItem("portfolio-theme");
        if (stored === "light" || stored === "dark") savedTheme = stored;
    } catch {
        // Theme switching still works when browser storage is unavailable.
    }

    function applyTheme(theme) {
        document.documentElement.dataset.theme = theme;
        const button = document.querySelector(".theme-toggle");
        if (button) {
            button.hidden = false;
            button.setAttribute("aria-checked", String(theme === "light"));
        }
    }

    const systemTheme = () => preference.matches ? "light" : "dark";
    applyTheme(savedTheme || systemTheme());

    document.addEventListener("DOMContentLoaded", () => {
        applyTheme(savedTheme || systemTheme());
        document.querySelector(".theme-toggle").addEventListener("click", () => {
            savedTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
            applyTheme(savedTheme);
            try {
                localStorage.setItem("portfolio-theme", savedTheme);
            } catch {
                // Keep the chosen theme for this visit if storage is unavailable.
            }
        });
    });

    preference.addEventListener("change", () => {
        if (!savedTheme) applyTheme(systemTheme());
    });
})();
