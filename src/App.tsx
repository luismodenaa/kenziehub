import { ToastContainer } from "react-toastify";
import { darkTheme, GlobalStyle, lightTheme } from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { RoutesMain } from "./routes";
import { AuthProvider } from "./context/Auth/Auth";
import Modal from "react-modal";
import { RegisterProvider } from "./context/Register/Register";
import React from "react";

Modal.setAppElement("#root");

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <ToastContainer
          theme={theme === "light" ? "light" : "dark"}
          autoClose={3000}
          style={theme === "light" ? { color: "black" } : { color: "white" }}
          limit={3}
        />
        <AuthProvider>
          <RegisterProvider>
            <RoutesMain themeToggler={themeToggler} theme={theme} />
          </RegisterProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
