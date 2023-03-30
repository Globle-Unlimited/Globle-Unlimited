import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import LocaleProvider from "./i18n";
import BodyStyle from "./components/BodyStyle";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LocaleProvider>
        <HashRouter>
          <App />
          <BodyStyle />
        </HashRouter>
      </LocaleProvider>
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
