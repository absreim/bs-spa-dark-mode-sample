import { useSyncExternalStore } from "react";

const darkModeQueryList = window.matchMedia("(prefers-color-scheme: dark)");

export default function useSystemDarkPref() {
  return useSyncExternalStore(subscribe, getSnapshot);
}

function getSnapshot() {
  return darkModeQueryList.matches;
}

function subscribe(
  callback: (this: MediaQueryList, ev: MediaQueryListEvent) => void,
) {
  darkModeQueryList.addEventListener("change", callback);
  return () => {
    darkModeQueryList.removeEventListener("change", callback);
  };
}
