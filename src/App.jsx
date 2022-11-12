import { ThemeProvider } from '@emotion/react';
import { theme } from './components/constants/theme';

import { AppContainer } from './App.styled';
import { Feedback } from './components/Feedback';
import { Form } from './components/Form';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Feedback />
        <Form />
      </AppContainer>
    </ThemeProvider>
  );
};
