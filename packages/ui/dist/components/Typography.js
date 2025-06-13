import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Heading component with semantic levels and consistent styling.
 */
export const Heading = ({ level = 1, children, className = '', ...rest }) => {
    const Tag = `h${level}`;
    const sizeClass = {
        1: 'text-4xl md:text-5xl',
        2: 'text-3xl md:text-4xl',
        3: 'text-2xl md:text-3xl',
        4: 'text-xl md:text-2xl',
    }[level];
    return (_jsx(Tag, { className: `${sizeClass} font-display leading-tight text-primary ${className}`, ...rest, children: children }));
};
/**
 * Text component for body copy.
 */
export const Text = ({ children, className = '', ...rest }) => (_jsx("p", { className: `text-base leading-relaxed text-muted ${className}`, ...rest, children: children }));
/**
 * Caption component for small, muted text.
 */
export const Caption = ({ children, className = '', ...rest }) => (_jsx("span", { className: `text-sm text-muted ${className}`, ...rest, children: children }));
