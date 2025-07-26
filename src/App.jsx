// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { MissionSection } from "./components/MissionSection.jsx";
import { GallerySection } from "./components/GallerySection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import { Footer } from "./components/Footer.jsx";
import  EventSection  from "./components/EventSection.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <MissionSection />
                <GallerySection />
              </>
            } />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/events" element={<EventSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}