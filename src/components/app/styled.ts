import styled, { createGlobalStyle } from 'styled-components';
import theme from 'styled-theming';
import SFProDisplayRegularWoff2 from '../../assets/fonts/SFProDisplay-Regular.woff2';
import SFProDisplayRegularWoff from '../../assets/fonts/SFProDisplay-Regular.woff';
import SFProDisplayRegularTrueType from '../../assets/fonts/SFProDisplay-Regular.ttf';
import SFProDisplayBoldWoff2 from '../../assets/fonts/SFProDisplay-Bold.woff2';
import SFProDisplayBoldWoff from '../../assets/fonts/SFProDisplay-Bold.woff';
import SFProDisplayBoldTrueType from '../../assets/fonts/SFProDisplay-Bold.ttf';
import SFProDisplayHeavyWoff2 from '../../assets/fonts/SFProDisplay-Heavy.woff2';
import SFProDisplayHeavyWoff from '../../assets/fonts/SFProDisplay-Heavy.woff';
import SFProDisplayHeavyTrueType from '../../assets/fonts/SFProDisplay-Heavy.ttf';

const themeAppBackground = theme('mode', {
  light: 'linear-gradient(123.75deg, #f6faff 19.07%, rgba(223, 233, 253, 0.78) 95.62%)',
  dark: 'linear-gradient(120.48deg, #3a3d4e 31.47%, #1f1523 71.66%)',
});

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${themeAppBackground};
`;

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-weight: 400;
    font-family: 'SF Pro Display';
    font-display: swap;
    src: url('../fonts/SFProDisplay-Regular.woff2') format('woff2'),
      url('../fonts/SFProDisplay-Regular.woff') format('woff'),
      url('../fonts/SFProDisplay-Regular.ttf') format('truetype');
  }

  @font-face {
    font-weight: 700;
    font-family: 'SF Pro Display';
    font-display: swap;
    src: url('../fonts/SFProDisplay-Bold.woff2') format('woff2'),
      url('../fonts/SFProDisplay-Bold.woff') format('woff'),
      url('../fonts/SFProDisplay-Bold.ttf') format('truetype');
  }

  @font-face {
    font-weight: 800;
    font-family: 'SF Pro Display';
    font-display: swap;
    src: url('../fonts/SFProDisplay-Heavy.woff2') format('woff2'),
      url('../fonts/SFProDisplay-Heavy.woff') format('woff'),
      url('../fonts/SFProDisplay-Heavy.ttf') format('truetype');
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    height: 100%;
  }

  body {
    height: 100%;
    font-weight: 400;
    font-family: 'SF Pro Display', 'Arial', sans-serif;
    scroll-behavior: smooth;
  }

  .root {
    width: 100%;
    height: 100%;
  }

  @keyframes checkShow {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .greeting__image .check-1 {
    opacity: 0;
    animation: checkShow 1s ease-in-out 0s forwards;
  }

  .greeting__image .check-2 {
    opacity: 0;
    animation: checkShow 1s ease-in-out 1s forwards;
  }

  .greeting__image .check-3 {
    opacity: 0;
    animation: checkShow 1s ease-in-out 2s forwards;
  }
`;
