export type ThemeOptionName = "light" | "dark" | "system";

export type EffectiveOptionName = Exclude<ThemeOptionName, "system">
