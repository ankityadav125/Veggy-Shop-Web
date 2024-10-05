import Blogs from "./components/Blogs";
import Discount from "./components/Discount";
import FeatureProduct from "./components/FeatureProduct";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <FeatureProduct />
      <Discount />
      <Blogs />
      <Footer />
    </main>
  );
};

export default App;
