import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  //COLORS
  --black: #262626;
  --white: #f1f2f6;
  --white-darker: #ecf0f1;
  --grey: #999;
  --grey-darker: #777;
  --light-grey: #ddd;
  --grey: #737373;
  --accent-light: #41FFE0;
  --accent-dark: #0544C8;
  --btn-primary: #F83D79;
  --btn-primary-darker: #F7105A;
  --bnt-accent: #fe6192;
  --card-shadow: 1px 1px 8px #bbb;
  font-family: 'Droid Serif', Serif;
}

body{
  box-sizing: border-box;
  overflow-x: hidden;
}
  a{
    text-decoration: none;
    color: initial;
  }
  
  h1 {
    font-family: 'Roboto', Sans-Serif;
  }


`;
