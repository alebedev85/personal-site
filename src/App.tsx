import CursorGlow from "./components/CursorGlow/CursorGlow";
import MainContent from "./components/MainContent/MainContent";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <CursorGlow />
      <div className="layout">
        <Header />
        <MainContent />
      </div>
    </>
  );
}

export default App;
