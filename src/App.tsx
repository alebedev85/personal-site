"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import CursorGlow from "./features/ClassicPortfolio/CursorGlow/CursorGlow";
import { Layout } from "./features/ClassicPortfolio/Layout/Layout";
import MainContent from "./features/ClassicPortfolio/MainContent/MainContent";
import type { RootState } from "./store";

function App() {
  const theme = useSelector((state: RootState) => state.toggles.theme);

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <>
      <CursorGlow />
      <Layout>
        <MainContent />
      </Layout>
    </>
  );
}

export default App;
