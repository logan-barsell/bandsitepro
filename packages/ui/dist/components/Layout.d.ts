import React from 'react';
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}
/**
 * Container centers content and applies responsive horizontal padding.
 */
export declare const Container: React.FC<ContainerProps>;
export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    /** Direction of flex layout */
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    /** Justify content */
    justify?: 'start' | 'center' | 'end' | 'between' | 'around';
    /** Align items */
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    /** Allow wrapping */
    wrap?: boolean;
}
/**
 * Flex is a wrapper for CSS flexbox with common utility props.
 */
export declare const Flex: React.FC<FlexProps>;
export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    /** Whether to apply a contained width to the content */
    contained?: boolean;
}
/**
 * Section component for full-width sections with optional contained content.
 */
export declare const Section: React.FC<SectionProps>;
