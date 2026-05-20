/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app_theme') || 'dark';
  });

  const [reminderEnabled, setReminderEnabled] = useState(() => {
    const saved = localStorage.getItem('app_reminder_enabled');
    return saved === 'true';
  });

  const [reminderTime, setReminderTime] = useState(() => {
    return localStorage.getItem('app_reminder_time') || '18:00';
  });

  const [emailUpdates, setEmailUpdates] = useState(() => {
    const saved = localStorage.getItem('app_email_updates');
    return saved !== 'false'; // Default to true
  });

  // Apply theme to documentElement for Tailwind support
  useEffect(() => {
    localStorage.setItem('app_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Persist reminder settings
  useEffect(() => {
    localStorage.setItem('app_reminder_enabled', reminderEnabled);
  }, [reminderEnabled]);

  useEffect(() => {
    localStorage.setItem('app_reminder_time', reminderTime);
  }, [reminderTime]);

  // Persist email updates settings
  useEffect(() => {
    localStorage.setItem('app_email_updates', emailUpdates);
  }, [emailUpdates]);

  return (
    <SettingsContext.Provider value={{
      theme,
      setTheme,
      reminderEnabled,
      setReminderEnabled,
      reminderTime,
      setReminderTime,
      emailUpdates,
      setEmailUpdates
    }}>
      {children}
    </SettingsContext.Provider>
  );
};
