import React from "react";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/Theme/defaultTheme";
import AssistirTV from "./pages/AssistirTV";
import Jogar from "./pages/Jogar";
import Cozinhar from "./pages/Cozinhar";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Home />
        <AssistirTV />
        <Jogar />
        <Cozinhar />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
