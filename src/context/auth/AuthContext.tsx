import { createContext, useState } from "react";

interface AuthContextInterface {
  authUser: string | null;
  setAuthUser: React.Dispatch<React.SetStateAction<string | null>>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

// Auth context
export const AuthContext = createContext<AuthContextInterface | null>(null);

export function AuthProvider(props: AuthProviderProps) {
  const [authUser, setAuthUser] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
