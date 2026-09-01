import AddressBar from "./components/AddressBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import OurHistory from "./components/OurHistory";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <AddressBar />
      <Header />
      <Hero />
      <WhyChooseUs />
      <OurHistory />
      <Testimonials />
      <main className="px-4">
        resto do site
      </main>
    </>
  );
}

export default App;