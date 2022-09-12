import React from "react";

import theme from "./src/global/styles/theme";
import { ThemeProvider } from "styled-components";

import RootNavigator from "./src/navigation";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigator />
    </ThemeProvider>
  );
}
