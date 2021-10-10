import { createGlobalStyle } from 'styled-components';

export const colors = {
  light: '#f2f2f2',
  blue: '#6688aa',
  d_blue: '#446688',
};

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Jost', sans-serif;
}

body {
  padding: 0;
  background-color: ${colors.light};
}
`;

export default GlobalStyle;
