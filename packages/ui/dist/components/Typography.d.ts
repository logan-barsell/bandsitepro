import React from 'react';
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4;
    children: React.ReactNode;
    className?: string;
}
/**
 * Heading component with semantic levels and consistent styling.
 */
export declare const Heading: React.FC<HeadingProps>;
export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
    className?: string;
}
/**
 * Text component for body copy.
 */
export declare const Text: React.FC<TextProps>;
export interface CaptionProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    className?: string;
}
/**
 * Caption component for small, muted text.
 */
export declare const Caption: React.FC<CaptionProps>;
