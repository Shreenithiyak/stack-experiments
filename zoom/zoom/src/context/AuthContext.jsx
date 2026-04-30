import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('neon_user');
    const storedToken = localStorage.getItem('neon_token');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    if (storedToken) {
      setToken(storedToken);
    }

    const handleUnload = () => {
      // Typically we don't clear tokens on unload for persistent login, 
      // but to preserve existing behavior:
      localStorage.removeItem('neon_user');
      localStorage.removeItem('neon_token');
    };

    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, []);

  const login = (userData, authToken) => {
    setUser(userData);
    setToken(authToken);
    localStorage.setItem('neon_user', JSON.stringify(userData));
    localStorage.setItem('neon_token', authToken);
  };

  const register = (userData) => {
    setUser(userData);
    localStorage.setItem('neon_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('neon_user');
    localStorage.removeItem('neon_token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
