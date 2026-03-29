import type { ThemeOptionName } from "./types.ts";

export const getThemeOptionName: () => ThemeOptionName = () => {
  const lsValue = localStorage.getItem(__THEME_LS_KEY__);
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
  localStorage.setItem(__THEME_LS_KEY__, name);
};
