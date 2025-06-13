import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Container centers content and applies responsive horizontal padding.
 */
export const Container = ({ children, className = '', ...rest }) => (_jsx("div", { className: `mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl ${className}`, ...rest, children: children }));
/**
 * Flex is a wrapper for CSS flexbox with common utility props.
 */
export const Flex = ({ children, className = '', direction = 'row', justify, align, wrap = false, ...rest }) => {
    const dirClass = direction === 'column'
        ? 'flex-col'
        : direction === 'row-reverse'
            ? 'flex-row-reverse'
            : direction === 'column-reverse'
                ? 'flex-col-reverse'
                : 'flex-row';
    const justifyClass = justify === 'center'
        ? 'justify-center'
        : justify === 'end'
            ? 'justify-end'
            : justify === 'between'
                ? 'justify-between'
                : justify === 'around'
                    ? 'justify-around'
                    : 'justify-start';
    const alignClass = align === 'center'
        ? 'items-center'
        : align === 'end'
            ? 'items-end'
            : align === 'stretch'
                ? 'items-stretch'
                : align === 'baseline'
                    ? 'items-baseline'
                    : 'items-start';
    const wrapClass = wrap ? 'flex-wrap' : 'flex-nowrap';
    return (_jsx("div", { className: `flex ${dirClass} ${justify ? justifyClass : ''} ${align ? alignClass : ''} ${wrapClass} ${className}`, ...rest, children: children }));
};
/**
 * Section component for full-width sections with optional contained content.
 */
export const Section = ({ children, className = '', contained = true, ...rest }) => (_jsx("div", { className: `w-full ${className}`, ...rest, children: contained ? _jsx(Container, { children: children }) : children }));
