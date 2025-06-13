import React, { ReactNode } from 'react';
export interface Theme {
    name: string;
    colors: {
        primary: string;
        secondary: string;
        background: string;
        surface: string;
        text: string;
    };
    fontFamily: string;
}
export declare const lightTheme: Theme;
export declare const darkTheme: Theme;
interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}
export declare const ThemeProvider: React.FC<{
    initialTheme?: Theme;
    children: ReactNode;
}>;
export declare const useTheme: () => ThemeContextValue;
export {};
