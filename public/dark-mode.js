"use strict";

const __THEME_LS_KEY__ = "theme";

const syncTheme = () => {
  let currentTheme = "auto";
  const storedTheme = localStorage.getItem(__THEME_LS_KEY__);
  if (["dark", "light"].includes(storedTheme)) {
    currentTheme = storedTheme;
  }

  if (currentTheme === "auto") {
    document.documentElement.setAttribute(
      "data-bs-theme",
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
    );
  } else {
    document.documentElement.setAttribute("data-bs-theme", currentTheme);
  }
};

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", syncTheme);

window.addEventListener("storage", (event) => {
  if (event.key === __THEME_LS_KEY__) {
    syncTheme();
  }
})

syncTheme();

window.syncTheme = syncTheme;
