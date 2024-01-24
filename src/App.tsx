import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    // Container
    <div className="container app p-5 mx-auto h-screen">
      {/* Header */}
      <Header />
      <div className="content-wrapper flex">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
