import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Routes from './src/routes';
import theme from './src/themes/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
