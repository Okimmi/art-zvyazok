import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
:root{
  --form-stroke-gradient: linear-gradient(
      90deg,
      #ffcce8,
      #ffcaf2 25%,
      #fdc7ff 50%,
      #ebc0ff 75%,
      #dec4ff 100%
    );
    --pink-btn: linear-gradient(
      90deg,
      #FF269B,
      #E227B3 25%,
      #C629CC 50%,
      #A92BE4 75%,
      #892DFF 100%
    );
    --purple-bg: linear-gradient(180deg, #2A005E 0%, #0D001C 46.35%);
    --btn-color: linear-gradient(109deg, #FF269B 13.07%, #E227B3 36.12%, #C629CC 55.85%, #A92BE4 74.03%, #892DFF 87.34%);
    --animation-time: 250ms;
  --animation-cubic: cubic-bezier(0.4, 0, 0.2, 1);
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
address {
  font-style: normal;
}
a {
  text-decoration: none;
  color: inherit;
}

ul,
ol {
  list-style: none;
  padding-left: 0;
  margin: 0;
}
html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    color: #212121;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background:  var(--purple-bg) no-repeat;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
  
 
`;
