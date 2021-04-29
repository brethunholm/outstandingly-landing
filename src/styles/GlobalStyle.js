import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  //COLORS
  --black: #140D04;
  --white: #f1f2f6;
  --white-darker: #ecf0f1;
  --grey: #999;
  --grey-darker: #777;
  --light-grey: #ddd;
  --accent-light: #41FFE0;
  --accent-dark: #0544C8;
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
