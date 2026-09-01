import AddressBar from "./components/AddressBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <AddressBar />
      <Header />
      <Hero />
      <main className="px-4">
        resto do site
      </main>
    </>
  );
}

export default App;