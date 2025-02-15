import React from "react";
import "./App.css";
import { ThemeContextProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <ThemeToggle />
      </Layout>
    </ThemeContextProvider>
  );
};

export default App;
