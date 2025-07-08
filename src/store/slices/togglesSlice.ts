import { createSlice } from "@reduxjs/toolkit";
import type { LanguageType, ThemeType } from "../../types";

type initialStateType = {
  theme: ThemeType;
  language: LanguageType;
};

const initialState: initialStateType = {
  theme: "dark",
  language: "ru",
};

const themeSlice = createSlice({
  name: "toggles",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    toggleLanguage: (state) => {
      state.language = state.language === "ru" ? "en" : "ru";
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme, toggleLanguage } = themeSlice.actions;
