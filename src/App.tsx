import CursorGlow from "./components/CursorGlow/CursorGlow";
import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <CursorGlow />
      <div className="layout">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
