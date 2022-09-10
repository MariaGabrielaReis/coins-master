import React from "react";

import theme from "./src/global/styles/theme";
import { ThemeProvider } from "styled-components";

import OnBoarding from "@screens/OnBoading";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <OnBoarding />
    </ThemeProvider>
  );
}
