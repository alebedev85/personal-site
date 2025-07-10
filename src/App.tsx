import { useEffect } from "react";
import { useSelector } from "react-redux";
import CursorGlow from "./components/CursorGlow/CursorGlow";
import MainContent from "./components/MainContent/MainContent";
import { Layout } from "./pages/Layout/Layout";
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
