import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ConfigProvider } from "antd";
import 'antd/dist/reset.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App />
  </StrictMode>
);
