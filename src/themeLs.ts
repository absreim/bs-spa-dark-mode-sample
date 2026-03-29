import type { ThemeOptionName } from "./types.ts";

export const THEME_LS_KEY = "theme";

export const getInitThemeOptionName: () => ThemeOptionName = () => {
  const lsValue = localStorage.getItem(THEME_LS_KEY);
  switch (lsValue) {
    case "light": {
      return "light";
    }
    case "dark": {
      return "dark";
    }
    default: {
      return "system";
    }
  }
};

export const setThemeOptionName = (name: ThemeOptionName) => {
  localStorage.setItem(THEME_LS_KEY, name);
};
