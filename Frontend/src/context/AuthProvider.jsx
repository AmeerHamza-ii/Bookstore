import { createContext, useContext, useState, useEffect } from "react";

// Create Auth Context
export const AuthContext = createContext();

// AuthProvider Component
export default function AuthProvider({ children }) {
  // Initialize authUser from localStorage
  const [authUser, setAuthUser] = useState(() => {
    const savedUser = localStorage.getItem("Users");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Sync authUser with localStorage whenever it changes
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("Users", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("Users");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for using AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
