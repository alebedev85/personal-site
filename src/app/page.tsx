"use client";

import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import App from "../App";
import i18n from "../i18n";
import { store } from "../store";

export default function HomePage() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  );
}
