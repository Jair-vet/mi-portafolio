import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { HomePage } from './components/pages/HomePage';

const App: React.FC = () => (
  <ThemeProvider>
    <HomePage />
  </ThemeProvider>
);

export default App;
