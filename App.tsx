import React from "react";

import theme from "./src/global/styles/theme";
import { ThemeProvider } from "styled-components";
import { MainProvider } from "./src/context";

import RootNavigator from "./src/routes";

export default function App() {
  return (
    <MainProvider>
      <ThemeProvider theme={theme}>
        <RootNavigator />
      </ThemeProvider>
    </MainProvider>
  );
}
