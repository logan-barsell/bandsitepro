import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect, } from 'react';
// Example themes
export const lightTheme = {
    name: 'light',
    colors: {
        primary: '#1D4ED8', // blue-700
        secondary: '#9333EA', // purple-600
        background: '#FFFFFF', // white
        surface: '#F3F4F6', // gray-100
        text: '#111827', // gray-900
    },
    fontFamily: 'Inter, sans-serif',
};
export const darkTheme = {
    name: 'dark',
    colors: {
        primary: '#3B82F6', // blue-500
        secondary: '#A78BFA', // purple-400
        background: '#111827', // gray-900
        surface: '#1F2937', // gray-800
        text: '#F9FAFB', // gray-50
    },
    fontFamily: 'Inter, sans-serif',
};
const ThemeContext = createContext(undefined);
// Provider component
export const ThemeProvider = ({ initialTheme = lightTheme, children }) => {
    const [theme, setThemeState] = useState(initialTheme);
    // Apply theme as CSS variables on root
    useEffect(() => {
        const root = document.documentElement;
        const { colors, fontFamily } = theme;
        Object.entries(colors).forEach(([key, value]) => {
            root.style.setProperty(`--theme-${key}`, value);
        });
        root.style.setProperty('--theme-font', fontFamily);
        // Persist theme name
        localStorage.setItem('theme', theme.name);
    }, [theme]);
    const setTheme = (next) => setThemeState(next);
    return (_jsx(ThemeContext.Provider, { value: { theme, setTheme }, children: children }));
};
// Hook for consumption
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
