import Header from "./feature/Header";
import MainContent from "./feature/MainContent";
import Sidebar from "./feature/Sidebar";

function App() {
  return (
    // Container
    <div className=" app  h-screen">
      {/* Header */}
      <div className="content-wrapper md:flex gap-5">
        <Sidebar />
        <div className="w-full p-4">
          <Header />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
