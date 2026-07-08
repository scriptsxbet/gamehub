(function () {
    const savedTheme = localStorage.getItem("siteTheme") || "dark";

    document.documentElement.setAttribute("data-theme", savedTheme);

    function updateThemeButton(theme) {
        const themeToggle = document.getElementById("themeToggle");
        if (!themeToggle) return;

        themeToggle.innerHTML = theme === "light"
            ? "<i class='bx bx-sun'></i>"
            : "<i class='bx bx-moon'></i>";

        themeToggle.setAttribute(
            "aria-label",
            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
        );
    }

    document.addEventListener("DOMContentLoaded", () => {
        const themeToggle = document.getElementById("themeToggle");
        if (!themeToggle) return;

        updateThemeButton(savedTheme);

        themeToggle.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
            const nextTheme = currentTheme === "dark" ? "light" : "dark";

            document.documentElement.setAttribute("data-theme", nextTheme);
            localStorage.setItem("siteTheme", nextTheme);

            updateThemeButton(nextTheme);
        });
    });
})();