import React from "react";

import theme from "./src/global/styles/theme";
import { ThemeProvider } from "styled-components";
import { MainProvider } from "./src/context";
import { AvaliationProvider } from "./src/context/AvaliationContext";

import RootNavigator from "./src/routes";

export default function App() {
  return (
    <MainProvider>
      <AvaliationProvider>
        <ThemeProvider theme={theme}>
          <RootNavigator />
        </ThemeProvider>
      </AvaliationProvider>
    </MainProvider>
  );
}
