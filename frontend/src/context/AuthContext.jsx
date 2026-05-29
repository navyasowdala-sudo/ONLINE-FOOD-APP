import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const AuthContext = createContext();

// Provider Component
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Check token when app loads
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setUser({
        token: token,
      });
    }
  }, []);

  // Login function
  const login = (token, userData) => {
    localStorage.setItem("token", token);

    setUser(userData);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook
function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };