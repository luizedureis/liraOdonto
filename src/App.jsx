import AddressBar from "./components/AddressBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
function App() {
  return (
    <>
      <AddressBar />
      <Header />
      <Hero />
      <WhyChooseUs />
      <main className="px-4">
        resto do site
      </main>
    </>
  );
}

export default App;