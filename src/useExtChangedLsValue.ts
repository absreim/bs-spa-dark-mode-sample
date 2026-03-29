import { useSyncExternalStore } from "react";
import { getThemeOptionName } from "./themeLs.ts";

const subscribe: (callback: () => void) => (() => void) = (callback) => {
  const wrappedCallback: (event: StorageEvent) => void = (event) => {
    if ((event as StorageEvent).key === __THEME_LS_KEY__) {
      callback();
    }
  };
  window.addEventListener("storage", wrappedCallback);
  return () => {
    window.removeEventListener("storage", wrappedCallback);
  };
};

const useExtChangedLsValue = () => (
  useSyncExternalStore(subscribe, getThemeOptionName)
);

export default useExtChangedLsValue;
