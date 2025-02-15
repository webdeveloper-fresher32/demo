import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = {
    token: {
      colorPrimary: mode === "light" ? "#1890ff" : "#87d068",
      background: mode === "light" ? "#fff" : "#000",
    },
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
