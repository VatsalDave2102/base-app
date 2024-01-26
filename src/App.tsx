import { Navigate } from "react-router-dom";
import { useAuth } from "./context/auth/useAuth";
import Header from "./feature/Header";
import MainContent from "./feature/MainContent";
import Sidebar from "./feature/Sidebar";

function App() {
  const AuthContext = useAuth();

  const user = AuthContext?.authUser;
  if (!user) {
    return <Navigate to="/signin" />;
  }

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
