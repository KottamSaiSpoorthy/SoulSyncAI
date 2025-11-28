import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../utils/apiClient";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { id, email, name }
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("soul_token");
    if (stored) {
      setToken(stored);
      try {
        const decoded = jwtDecode(stored);
        setUser({ id: decoded.id, email: decoded.email, name: decoded.name });
      } catch (e) {
        setUser(null);
      }
    }
    setLoading(false);
  }, []);

  const signup = async (payload) => {
    const res = await api.post("/auth/signup", payload);
    if (res.data && res.data.token) {
      localStorage.setItem("soul_token", res.data.token);
      setToken(res.data.token);
      const decoded = jwtDecode(res.data.token);
      setUser({ id: decoded.id, email: decoded.email, name: decoded.name });
    }
    return res.data;
  };

  const login = async (payload) => {
    const res = await api.post("/auth/login", payload);
    if (res.data && res.data.token) {
      localStorage.setItem("soul_token", res.data.token);
      setToken(res.data.token);
      const decoded = jwtDecode(res.data.token);
      setUser({ id: decoded.id, email: decoded.email, name: decoded.name });
    }
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem("soul_token");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
