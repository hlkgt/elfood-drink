import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Product from "./pages/Product";
import Testimoni from "./pages/Testimoni";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Hero />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/product"} element={<Product />} />
        <Route path={"/testimoni"} element={<Testimoni />} />
      </Routes>
    </Router>
  );
};

export default App;
