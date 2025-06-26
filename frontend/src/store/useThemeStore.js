import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("ping-theme") || "dark",
  setTheme: (theme) => {
    localStorage.setItem("ping-theme", theme);
    set({ theme });
  },
}));