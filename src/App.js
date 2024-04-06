import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Category from "./components/category/Category";
import Prodact from "./components/product/Prodact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Category />
      <Prodact />
    </div>
  );
}

export default App;
