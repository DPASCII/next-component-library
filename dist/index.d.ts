import * as react_jsx_runtime from 'react/jsx-runtime';
import React$1 from 'react';
import { DefaultTheme } from 'styled-components';

declare const Button: ({ label, ...rest }: {
    label: string;
}) => react_jsx_runtime.JSX.Element;

interface NavBarProps extends React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    height: number;
    logo?: string;
    alt?: string;
    menuWidth?: number;
    pages: {
        iconComponent?: React$1.ReactNode;
        name: string;
        link: string;
        subPages?: {
            subName: string;
            subLink: string;
        }[];
    }[];
}
declare const Header: React$1.FC<NavBarProps>;

declare const Card: ({ height, width, text, subText, link, imgSrc, alt, }: {
    height: number;
    width: number;
    text: string;
    subText?: string;
    link?: string;
    imgSrc: string;
    alt: string;
}) => react_jsx_runtime.JSX.Element;

declare const CardContainer: ({ columns, children, ...props }: {
    columns: number;
    children: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;

declare const theme: DefaultTheme;

declare function ThemeOverlay({ theme, children, }: {
    theme?: typeof theme;
    children: React.ReactNode;
}): react_jsx_runtime.JSX.Element;

export { Button, Card, CardContainer, Header, ThemeOverlay, theme };
