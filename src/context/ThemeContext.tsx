/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext } from 'react';
import { useTheme } from '../hooks/useTheme';
import type { Theme } from '../types';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value = useTheme();
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeContext must be used inside ThemeProvider');
  return ctx;
};
