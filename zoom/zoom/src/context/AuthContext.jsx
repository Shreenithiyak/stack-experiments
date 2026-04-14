import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('neon_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const handleUnload = () => {
      localStorage.removeItem('neon_user');
    };

    window.addEventListener('beforeunload', handleUnload);
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('neon_user', JSON.stringify(userData));
  };

  const register = (userData) => {
    setUser(userData);
    localStorage.setItem('neon_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('neon_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
