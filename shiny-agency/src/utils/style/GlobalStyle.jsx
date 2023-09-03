import React, { useContext } from 'react'
import { ThemeContext } from '../context'
import { createGlobalStyle } from 'styled-components'


const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-seerif;
  }

  body {
    background-color: ${ ({isDarkMode})=> isDarkMode ? 'black' : 'white'};
    background-color: ${ (props)=> props.isDarkMode ? '#2F2E41' : 'white'};
    margin: 0; 
  }
`

export function GlobalStyle() {
  const {theme} = useContext(ThemeContext)
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}
