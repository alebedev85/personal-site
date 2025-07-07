import { useEffect } from "react";
import { useSelector } from "react-redux";
import CursorGlow from "./components/CursorGlow/CursorGlow";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import ToggleControls from "./components/ToggleControls/ToggleControls";
import type { RootState } from "./store";

function App() {
  const theme = useSelector((state: RootState) => state.toggles.theme);

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  
  return (
    <>
      <CursorGlow />
      <ToggleControls />
      <div className="layout">
        <Header />
        <MainContent />
      </div>
    </>
  );
}

export default App;
