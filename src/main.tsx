import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollPage } from "./pages/1.scrollAnimation/ScrollPage.js";
import { AnimatePerson } from "./pages/2.animatePerson/AnimatePerson.js";
import { SpringAnimation } from "./pages/3.springAnimation/SpringAnimation.js";
const rootElement = document.getElementById("root");
createRoot(rootElement as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="scrollPage" element={<ScrollPage />}></Route>
          <Route path="animatePerson" element={<AnimatePerson/>}></Route>
          <Route path="springAnimation" element={<SpringAnimation/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
