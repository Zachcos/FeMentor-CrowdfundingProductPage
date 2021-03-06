import { createGlobalStyle } from 'styled-components';
import { color } from './variables';

const GlobalStyle = createGlobalStyle`
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
    overflow-x: hidden;
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
  html {
    background: #fafafa;
    font-size: 16px;
    font-family: "Commissioner", sans-serif;
    font-weight: 300;
  }
  body {
  }

  .btn {
    border-radius: 50px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s ease-out;
    &__primary {
      background: ${color.medCyan};
      color: white;
      padding: 20px 40px;
      &:hover {
        background: ${color.darkCyan};
      }
    }
    &__disabled {
      background: #cbcbcb;
      color: white;
      padding: 20px 40px;
    }
  }

  .oos {
    pointer-events: none;
    position: relative;
    &:after {
      background: white;
      border-radius: 12px;
      content: '';
      height: 100%;
      left: 0;
      opacity: 0.5;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
`;

export default GlobalStyle;
