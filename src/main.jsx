import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FavorisProvider } from "./context/FavorisContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FavorisProvider>
      <App />
    </FavorisProvider>
  </React.StrictMode>
);
