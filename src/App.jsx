import { ThemeProvider } from '@emotion/react';
import { theme } from './components/constants/theme';
import { GlobalStyle } from './GlobalStyle';

import { AppContainer } from './App.styled';
import { Feedback } from './components/Feedback';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Feedback />
      </AppContainer>
    </ThemeProvider>
  );
};
