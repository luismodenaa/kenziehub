import { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";

interface iThemeProps {
  theme: any;
}

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#161616",
  fontColor: "#fff",
};

export const GlobalStyle = createGlobalStyle`

.ReactModal__Overlay {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
}

.ReactModal__Overlay--after-open{
    opacity: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}

body{
    background-color: ${({ theme }: iThemeProps) => theme.body};
    color: ${({ theme }: iThemeProps) => theme.fontColor};
    transition: 0.3s
}

/* VARIABLES */

:root{
    /* FONTS */
	--font-base: 'Inter', sans-serif;

    /* COLORS */
    --color-primary: #FF577F;
    --color-primary-Focus: #FF427F;
    --color-primary-Negative: #59323F;

    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;
    --color-grey--1: #C5C5C5;
    --color-grey--2: #A8A8A8;
    


    --color-sucess: #3FE864;
    --color-negative: #E83F5B;
}

























 /* Reset CSS */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}  

body{
    font-family: var(--font-base);
}



`;
