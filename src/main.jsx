import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-slideshow-image/dist/styles.css";
import App from "./App.jsx";
import { DarkModeProvider } from "./contexts/DarkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <HeroUIProvider>
        <App />
      </HeroUIProvider>
    </DarkModeProvider>
  </StrictMode>
);
