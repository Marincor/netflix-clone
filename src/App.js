import React from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import { Home } from "./components/Home/Home";
import { Main } from "./components/Main/Main";
import "../src/assets/css/scrollbar.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <Main />
    </>
  );
}

export default App;
