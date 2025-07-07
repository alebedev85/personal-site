import { createSlice } from "@reduxjs/toolkit";

type ThemeType = "light" | "dark";
type LanguageType = "ru" | "en";

type initialStateType = {
  theme: ThemeType;
  language: LanguageType;
};

const initialState: initialStateType = {
  theme: "light",
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
    setTheme: (state, action: { payload: ThemeType }) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: { payload: LanguageType }) => {
      state.language = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const {
  toggleTheme,
  toggleLanguage,
  setTheme,
  setLanguage,
} = themeSlice.actions;