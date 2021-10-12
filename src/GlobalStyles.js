import { createGlobalStyle } from 'styled-components';

export const colors = {
  bg: '#f2f2f2',
  primary: '#6688aa',
  btn: '#446688',
};

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Jost', sans-serif;
}

body {
  padding: 0;
  background-color: ${colors.bg};
  font-size: 16px;
}
`;

export default GlobalStyle;
