import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

// Define the shape of a theme
export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
  };
  fontSans: string;
  fontDisplay: string;
}

// Example themes
export const lightTheme: Theme = {
  name: 'light',
  colors: {
    primary: '#1D4ED8', // blue-700
    secondary: '#9333EA', // purple-600
    background: '#FFFFFF', // white
    surface: '#F3F4F6', // gray-100
    text: '#111827', // gray-900
  },
  fontSans: 'Inter, system-ui, sans-serif',
  fontDisplay: 'Poppins, system-ui, sans-serif',
};

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    primary: '#3B82F6', // blue-500
    secondary: '#A78BFA', // purple-400
    background: '#111827', // gray-900
    surface: '#1F2937', // gray-800
    text: '#F9FAFB', // gray-50
  },
  fontSans: 'Inter, system-ui, sans-serif',
  fontDisplay: 'Poppins, system-ui, sans-serif',
};

// Context to hold theme state
interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// Provider component
export const ThemeProvider: React.FC<{
  initialTheme?: Theme;
  children: ReactNode;
}> = ({ initialTheme = lightTheme, children }) => {
  const [theme, setThemeState] = useState<Theme>(initialTheme);

  // Apply theme as CSS variables on root
  useEffect(() => {
    const root = document.documentElement;
    const { colors, fontSans, fontDisplay } = theme;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value);
    });
    root.style.setProperty('--theme-font-sans', fontSans);
    root.style.setProperty('--theme-font-display', fontDisplay);
    // Persist theme name
    localStorage.setItem('theme', theme.name);
  }, [theme]);

  const setTheme = (next: Theme) => setThemeState(next);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook for consumption
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
