import React from 'react'
import { createGlobalStyle } from 'styled-components'
const normalizeCss = require( './assets/normalize.css' )

const GlobalStyles = createGlobalStyle`
  ${normalizeCss};
`;

export default GlobalStyles
