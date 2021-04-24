import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  //COLORS
  --black: #2d3436;
  --white: #f1f2f6;
  --white-darker: #ecf0f1;
  --grey: #999;
  --grey-darker: #777;
  --light-grey: #ddd;
  --card-shadow: 1px 1px 8px #bbb;
}

body{
  box-sizing: border-box;
}
  a{
    text-decoration: none;
    color: initial;
  }
`;
