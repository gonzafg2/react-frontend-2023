import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const setTitleLS = (title) => {
  localStorage.setItem("title", title);
};

const setSubtitleLS = (subtitle) => {
  localStorage.setItem("subtitle", subtitle);
};

const title = "Curso de Frontend React USACH 2023";
const subtitle = "Esta es una App con React";

setTitleLS(title);
setSubtitleLS(subtitle);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
