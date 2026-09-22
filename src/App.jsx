import { Routes, Route } from "react-router-dom";
import AddressBar from "./components/AddressBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
function App() {
  return (
    <>
      <ScrollToTop />
      <div className="lg:mx-auto lg:max-w-[1360px] lg:shadow-[0_0_60px_rgba(0,0,0,0.08)]">
        <AddressBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
