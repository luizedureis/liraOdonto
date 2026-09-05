import AddressBar from "./components/AddressBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import OurHistory from "./components/OurHistory";
import Testimonials from "./components/Testimonials";
import Treatments from "./components/Treatments";
import GoogleReviews from "./components/GoogleReviews";
function App() {
  return (
    <>
      <AddressBar />
      <Header />
      <Hero />
      <WhyChooseUs />
      <OurHistory />
      <Testimonials />
      <Treatments />
      <GoogleReviews />
      <main className="px-4 pt-8">
        resto do site
      </main>
    </>
  );
}

export default App;