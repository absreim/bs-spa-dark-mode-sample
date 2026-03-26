import type { EffectiveOptionName, ThemeOptionName } from "./types.ts";
import { useMemo } from "react";

const useEffectiveTheme: (
  optionName: ThemeOptionName,
  sysDarkPref: boolean,
) => EffectiveOptionName = (optionName, sysDarkPref) =>
  useMemo(() => {
    if (optionName === "light" || optionName === "dark") {
      return optionName;
    }

    return sysDarkPref ? "dark" : "light";
  }, [optionName, sysDarkPref]);

export default useEffectiveTheme;
