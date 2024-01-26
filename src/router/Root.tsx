import App from "../App";
import { useAuth } from "../context/auth/useAuth";
import { redirect } from "react-router-dom";

const Root = () => {
  const AuthContext = useAuth();

  const user = AuthContext?.authUser;
  if (!user) {
    return redirect("/signup");
  }
  return <App />;
};

export default Root;
