import CursorGlow from "./components/CursorGlow/CursorGlow";
import Header from "./components/Header/Header";
import ToggleControls from "./components/ToggleControls/ToggleControls";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <>
      <CursorGlow />
      <div className="layout">
        <ToggleControls />
        <Header />
        <MainContent />
      </div>
    </>
  );
}

export default App;
