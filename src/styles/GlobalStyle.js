import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  //COLORS
  --black: #2d3436;
  --white: #f1f2f6;
  --white-darker: #ecf0f1;

}

body{
  box-sizing: border-box;
}
  a{
    text-decoration: none;
    color: initial;
  }
`;
