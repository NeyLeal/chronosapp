import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { Home } from "../../Pages/Home";
import { AboutPomodoro } from "../../Pages/AboutPomodoro";
import { NotFound } from "../../Pages/NotFound";
import { useEffect } from "react";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-pomodoro/" element={<AboutPomodoro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
