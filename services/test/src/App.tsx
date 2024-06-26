import React from 'react';
import logo from './logo.svg';
import './App.css';
import { vars } from '@fastcampus/themes';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';

function App() {
  const theme = {
    colors: vars.colors.$static.dark,
  };
  return (
    <ThemeProvider theme={theme}>
      <View />
    </ThemeProvider>
  );
}

export default App;

function View() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text>
          Edit <code>src/App.tsx</code> and save to {vars.box.radii['2xl']}.
        </Text>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const Text = styled.p`
  color: ${vars.colors.$static.light.cyan[500]};
  /* color: ${({ theme }) => {
    console.log('theme : ', theme);
    // @ts-ignore
    return theme.colors.red[500];
  }}; */
`;
