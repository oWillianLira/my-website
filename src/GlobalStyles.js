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
  font-size: 16px;
  background: ${colors.bg};
  background: -moz-linear-gradient(left, ${colors.bg} 0%, #FFFFFF 50%, ${colors.bg} 100%);
  background: -webkit-linear-gradient(left, ${colors.bg} 0%, #FFFFFF 50%, ${colors.bg} 100%);
  background: linear-gradient(to right, ${colors.bg} 0%, #FFFFFF 50%, ${colors.bg} 100%);
}
`;

export default GlobalStyle;
