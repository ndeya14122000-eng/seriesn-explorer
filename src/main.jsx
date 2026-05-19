import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FavorisProvider } from "./context/FavorisProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavorisProvider>
      <App />
    </FavorisProvider>
  </StrictMode>
);
